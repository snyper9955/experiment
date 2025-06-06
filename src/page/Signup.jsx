import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const userData = {
      name: formData.name,
      email: formData.email,
    };
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      <form
        onSubmit={handleSignup}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">Create an Account</h2>
        
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          required
          className="w-full mb-4 px-4 py-2 rounded bg-gray-700 focus:outline-none hover:border-2 border-yellow-400"
          onChange={handleChange}
        />
        
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="w-full mb-4 px-4 py-2 rounded bg-gray-700 focus:outline-none hover:border-2 border-yellow-400"
          onChange={handleChange}
        />
        
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="w-full mb-6 px-4 py-2 rounded bg-gray-700 focus:outline-none hover:border-2 border-yellow-400"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-gray-900 font-semibold py-2 rounded hover:bg-yellow-500"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
