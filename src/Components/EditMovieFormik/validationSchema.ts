import * as Yup from 'yup';

export const validationSchema = Yup.object({
  title: Yup.string()
    .trim('There must be no trailing whitespaces')
    .strict(true)
    .max(50, 'Must be 50 characters or less')
    .required('Title is required'),
  release_date: Yup.date().required('Release date is required'),
  poster_path: Yup.string().trim('There must be no trailing whitespaces').url('Invalid URL').required('Poster URL is required'),
  vote_average: Yup.number().typeError('Rating must be a number').min(0, 'Must be 0 or higher').max(10, 'Must be 10 or lower'),
  runtime: Yup.number()
    .typeError('Runtime must be a number')
    .integer('Should be an integer')
    .min(0, 'Must be 0 or higher')
    .required('Runtime is required'),
  overview: Yup.string()
    .trim('There must be no trailing whitespaces')
    .max(400, 'Must be 400 characters or less')
    .required('Overview is required'),
  genres: Yup.array().min(1, 'At least one genre should be provided'),
});
