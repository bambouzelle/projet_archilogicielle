import React from 'react';
import LoginSection from './components/organisms/LoginSection';
import axios from 'axios';

const App = () => {
  const handleLogin = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:8000/login', credentials);
      console.log('Token:', response.data.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <LoginSection onLogin={handleLogin} />
    </div>
  );
};

export default App;
