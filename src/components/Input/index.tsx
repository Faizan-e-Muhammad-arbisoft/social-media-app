import React, { ClassAttributes, InputHTMLAttributes } from 'react';
import { Form } from 'react-bootstrap';
import { useField, FieldConfig, ErrorMessage } from 'formik';

interface ICustomInputComponentProps {
  label: string;
  type?: string;
  placeholder: string;
  as?: string;
  rows?: number;
}

const CustomInputComponent: React.FC<
  ICustomInputComponentProps & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement> & FieldConfig
> = ({ label, type, placeholder, as, rows, ...props }) => {
  const [field] = useField(props);

  let formInput = null;
  if (as === 'textarea') formInput = <Form.Control as={as} rows={rows} placeholder={placeholder} {...field} />;
  else formInput = <Form.Control type={type} placeholder={placeholder} {...field} />;

  return (
    <div>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        {formInput}
      </Form.Group>
      <ErrorMessage name={field.name}>{(msg) => <div style={{ color: 'red' }}>*{msg}</div>}</ErrorMessage>
    </div>
  );
};

export default React.memo(CustomInputComponent);
