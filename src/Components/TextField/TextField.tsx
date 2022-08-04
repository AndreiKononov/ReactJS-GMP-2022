import { useField } from 'formik';
import inputStyles from '../../scss/components/form-input.module.scss';
import textAreaStyles from '../../scss/components/form-textarea.module.scss';
import labelStyles from '../../scss/components/form-label.module.scss';
import errorStyles from '../../scss/components/form-error.module.scss';

interface TextInputProps {
  id: string;
  label: string;
  name: string;
  textarea?: boolean;
  [k: string]: string | boolean | undefined;
}

export const TextField = ({ label, textarea, ...props }: TextInputProps) => {
  const [fieldProps, fieldMeta] = useField(props);

  return (
    <div>
      {label && (
        <label htmlFor={props.id || props.name} className={labelStyles.formLabel}>
          {label}
        </label>
      )}

      {!textarea ? (
        <input className={inputStyles.formInput} {...fieldProps} {...props} />
      ) : (
        <textarea className={textAreaStyles.formTextarea} {...fieldProps} {...props} />
      )}

      {fieldMeta.touched && fieldMeta.error ? <div className={errorStyles.formError}>{fieldMeta.error}</div> : null}
    </div>
  );
};
