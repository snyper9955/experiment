import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60 }}
      className="min-h-screen bg-gray-950 text-white py-12 px-6"
    >
      <div className="max-w-4xl mx-auto bg-gray-900 p-10 rounded-lg shadow-lg  hover:border-1 border-gray-600">
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-6">Get in Touch</h1>
        <p className="text-center text-gray-300 mb-10">
          We’d love to hear from you! Fill out the form below and we’ll get back to you shortly.
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="How can we help you?"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
