import React from 'react';
import { motion } from 'framer-motion';

const Web = () => {
  return (
    <motion.div
      initial={{ x: '0vw', opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60 }}
      className="min-h-screen bg-gradient-to-t from-gray-950 via-gray-800 to-gray-950 text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
          Web Development by <span className="text-white">Creative Abhishek</span>
        </h1>

        {/* Introduction */}
        <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          We build high-performing, modern, and responsive websites using the latest technologies like React, Tailwind, and Node.js. Whether you’re a startup or an enterprise, we help you scale your digital presence.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Responsive Design',
              desc: 'Pixel-perfect layouts that adapt to all screen sizes.',
              color: 'from-pink-500 to-yellow-500',
            },
            {
              title: 'Modern Tech Stack',
              desc: 'Built with React, Tailwind, Next.js, and more.',
              color: 'from-purple-500 to-indigo-500',
            },
            {
              title: 'Performance Optimization',
              desc: 'Fast-loading, SEO-friendly, and scalable apps.',
              color: 'from-green-500 to-blue-500',
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`p-6 bg-gradient-to-br ${service.color} text-white rounded-xl shadow-lg hover:scale-105 transform transition duration-300`}
            >
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Let’s Build Something Great Together</h2>
          <a
            href="/contact"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Web;
