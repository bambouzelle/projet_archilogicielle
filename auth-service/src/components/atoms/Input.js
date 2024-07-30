import React from 'react';

const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <div>
      <input {...field} {...props} />
      {touched[field.name] && errors[field.name] && <div>{errors[field.name]}</div>}
    </div>
  );
};

export default Input;
