import React from 'react';
import LoginForm from '../molecules/LoginForm';

const LoginSection = ({ onLogin }) => {
  return (
    <section>
      <h2>Login</h2>
      <LoginForm onLogin={onLogin} />
    </section>
  );
};

export default LoginSection;
