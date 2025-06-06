import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // false initially
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fake login simulation
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const demoUser = { name: 'Abhishek', email: 'abhishek@example.com' };
    localStorage.setItem('user', JSON.stringify(demoUser));
    setUser(demoUser);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/home');
  };

  if (!isLoggedIn) {
    // Render Login Form
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6"
      >
        <form
          onSubmit={handleLogin}
          className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full "
        >
          <h2 className="text-3xl font-bold mb-6 text-yellow-400 text-center">Login to Your Profile</h2>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none hover:border-2 border-yellow-400"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 ">Password</label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none hover:border-2 border-yellow-400"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-semibold py-2 rounded hover:bg-yellow-500"
          >
            Login
          </button>
        </form>
      </motion.div>
    );
  }

  // Render Profile View
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 text-white py-12 px-6"
    >
      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Your Profile</h1>
        <div className="text-lg space-y-4">
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/home')}
            className="bg-green-500 font-bold text-xl text-white px-6 py-2 rounded hover:bg-green-600 shadow-xl border-2 border-green-600"
          >
            Back to Login
          </button>
          <br />
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
