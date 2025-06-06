import React from 'react';
import { motion } from 'framer-motion';

const DesignThinking = () => {
  return (
    <motion.div
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      className="min-h-screen bg-gray-800 text-gray-900 p-8"
    >
      <div className=" max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 ">
        <h1 className="text-4xl font-bold mb-6 text-indigo-600 text-center ">
          Design Thinking Approach
        </h1>
        
        <p className="text-lg mb-4 leading-relaxed">
          Design Thinking is a human-centered approach to innovation and problem-solving. It emphasizes understanding users’ needs, rapid prototyping, and iterative testing to create impactful and usable solutions.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-indigo-700">Key Phases of Design Thinking</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Empathize:</strong> Understand your users deeply by researching their needs, emotions, and challenges.</li>
          <li><strong>Define:</strong> Clearly articulate the problem you aim to solve based on insights gathered.</li>
          <li><strong>Ideate:</strong> Brainstorm creative ideas without judgment to explore multiple solutions.</li>
          <li><strong>Prototype:</strong> Build simple, low-fidelity models to bring ideas to life and explore usability.</li>
          <li><strong>Test:</strong> Gather feedback by testing prototypes with users, iterating to improve solutions.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3 text-indigo-700">Why Design Thinking Matters</h2>
        <p className="text-lg leading-relaxed">
          This approach encourages collaboration, creativity, and continuous learning. It helps teams deliver products and services that truly resonate with users, reduce risks, and foster innovation.
        </p>

        <p className="text-lg mt-6 italic text-center text-gray-600">
          “Design is not just what it looks like and feels like. Design is how it works.” — Steve Jobs
        </p>
      </div>
    </motion.div>
  );
};

export default DesignThinking;
