import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = ({ onLogin }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await onLogin(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="username" placeholder="Username" component={Input} />
          <Field type="password" name="password" placeholder="Password" component={Input} />
          <Button label="Login" type="submit" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
