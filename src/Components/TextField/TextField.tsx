import { useField } from 'formik';

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
    <div className="form-field">
      {label && (
        <label htmlFor={props.id || props.name} className="form-label">
          {label}
        </label>
      )}

      {!textarea ? (
        <input className="form-input" {...fieldProps} {...props} />
      ) : (
        <textarea className="form-textarea" {...fieldProps} {...props} />
      )}

      {fieldMeta.touched && fieldMeta.error ? <div className="form-error">{fieldMeta.error}</div> : null}
    </div>
  );
};
