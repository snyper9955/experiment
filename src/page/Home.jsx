import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate(); // Navigation hook

  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-t from-gray-950 via-gray-800 to-gray-950 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="text-yellow-400 text-4xl font-bold mb-4"
          >
            Build Your Brand with <span className="text-5xl text-white font-bold mb-6">Creative Abhishek</span>
          </motion.h1>
          <p className="text-xl mb-8 text-gray-300">
            Unlock new skills, elevate your creativity, and launch your digital presence today.
          </p>
          <Link
            to="/about"
            className="bg-gray-300 text-indigo-600 px-6 py-3 font-semibold rounded-md shadow hover:bg-gray-200"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10 text-center ">
          {[
            {
              title: 'Web Development',
              desc: 'Modern, responsive, and scalable websites using the latest technologies.',

              onClick: () => navigate('/web'),
              
            },
            {
              title: 'Design Thinking',
              desc: 'Beautiful and functional UI/UX to attract and retain users.',
              onClick: () => navigate('/designthinking'),
            },
            {
              title: 'Skill Development',
              desc: 'Practical learning paths for future-ready creators and developers.',
              onClick: () => navigate('/skill'),
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              onClick={feature.onClick}
              className="bg-gradient-to-t from-gray-950 via-gray-800 to-gray-950 p-6 rounded-lg shadow-xl hover:shadow-lg cursor-pointer "
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2 text-yellow-300">{feature.title}</h3>
              <p className="text-gray-300 font-bold shadow-md">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-950 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Journey with Creative Abhishek</h2>
        <p className="mb-6 text-lg">Take the next step in your skill-building adventure today.</p>
        <Link
          to="/contact"
          className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-800"
        >
          Get in Touch
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-10 text-center text-sm">
        &copy; {new Date().getFullYear()} Creative Abhishek. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
