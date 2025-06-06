import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-800 p-6">
      <motion.div
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8"
      >
        <h1 className="text-4xl font-bold mb-4 text-center text-teal-600">About Us</h1>
        <img
          src="https://source.unsplash.com/random/800x400?team,office"
          alt="About"
          className="rounded-lg mb-6 w-full object-cover"
        />
        <p className="text-lg leading-relaxed">
          Welcome to our website! We're a passionate team of developers, designers, and thinkers dedicated to building modern, user-friendly web applications. 
          Our goal is to deliver high-quality products that make people's lives easier, smarter, and more connected.
        </p>
        <p className="text-lg mt-4 leading-relaxed">
          Whether you're a student, a professional, or just someone curious about tech, we aim to provide something valuable for everyone. Thanks for visiting us!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
