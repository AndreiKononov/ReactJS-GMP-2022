import { Formik, FormikProps, Form, FormikHelpers } from 'formik';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useQueryParams } from '../../hooks/useQueryParams';
import { AsyncSubmitStatus } from '../../models/AsyncSubmitStatus';
import { deleteMovieById, fetchMovies } from '../../store/moviesReducer';
import styles from './DeleteMovieConfirm.module.scss';
import btnStyles from '../../scss/components/button.module.scss';
import errorStyles from '../../scss/components/form-error.module.scss';

interface DeleteMovieFormValue {
  movieId: number;
}

interface DeleteMovieProps extends DeleteMovieFormValue {
  handleClose: () => void;
}

const DeleteMovieConfirm = ({ movieId, handleClose }: DeleteMovieProps) => {
  const dispatch = useAppDispatch();
  const routerQueryParams = useQueryParams();

  const handleFormSubmit = async ({ movieId }, { setSubmitting, setStatus }: FormikHelpers<{ movieId: number }>) => {
    try {
      await dispatch(deleteMovieById(movieId))
      dispatch(fetchMovies(routerQueryParams));
      handleClose();
      setStatus(AsyncSubmitStatus.SUBMIT_SUCCESS);
    } catch (rejectedValueOrSerializedError) {
      setStatus(AsyncSubmitStatus.SUBMIT_FAIL);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={{ movieId }} onSubmit={handleFormSubmit}>
      {({ isSubmitting, status }: FormikProps<DeleteMovieFormValue>) => (
        <Form>
          {status === AsyncSubmitStatus.SUBMIT_FAIL && <p className={errorStyles.formError}>Submit failed. Please try again.</p>}

          <div className={styles.confirmModal}>
            <p className={styles.confirmText}>Are you sure you want to delete this movie?</p>
            <button className={`${btnStyles.appBtn} ${styles.confirmBtn}`} type="submit" disabled={isSubmitting}>
              Confirm
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DeleteMovieConfirm;
