import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => {
  return (
    <motion.div
      className="relative flex items-center my-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Remove the Line Dot */}
      {/* We are skipping the line dot rendering here */}

      {/* Content */}
      <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
        {/* Left side - Year */}
        <div className="md:w-1/4 text-center md:text-right pr-4">
          <h3 className="text-xl font-bold">{year}</h3>
        </div>

        {/* Right side - Title and Description */}
        <div className="md:w-3/4 bg-white shadow-md p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-custom-blue">{title}</h4>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;