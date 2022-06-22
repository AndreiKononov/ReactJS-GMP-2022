import { PropsWithChildren } from 'react';

interface FormFieldProps {
  labelTitle: string;
}

export function FormField({ labelTitle, children }: PropsWithChildren<FormFieldProps>) {
  return (
    <div className="form-field">
      <label className="form-label" >
        {labelTitle}
        {children}
      </label>

    </div>
  );
}
