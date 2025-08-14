// src/components/Login.jsx
import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className='bg-white shadow-md rounded-lg p-8 w-[90%] max-w-md'>
      <h2 className='text-2xl font-bold text-center text-blue-600 mb-6'>
        Login Form
      </h2>

      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        className='w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
      />

      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        className='w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
      />

      <button
        onClick={handleSubmit}
        className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition'
      >
        Login
      </button>
    </div>
  );
}

export default Login;
