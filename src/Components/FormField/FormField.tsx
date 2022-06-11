import { PropsWithChildren } from 'react';

interface FormFieldProps {
  labelTitle: string;
  id: string;
}

export function FormField({ labelTitle, id, children }: PropsWithChildren<FormFieldProps>) {
  return (
    <div className="form-field">
      <label className="form-label" htmlFor={id}>
        {labelTitle}
      </label>

      {children}
    </div>
  );
}
