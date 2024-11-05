// import React from 'react';
// import { motion } from 'framer-motion';

// interface TimelineItemProps {
//   year: string;
//   title: string;
//   description: string;
// }

// const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => {
//   return (
//     <motion.div
//       className="relative flex items-center my-12"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
      

//       {/* Content */}
//       <div className="w-full flex flex-col md:flex-row md:justify-between items-center">
//         {/* Left side - Year */}
//         <div className="md:w-1/4 text-center md:text-right pr-4">
//           <h3 className="text-xl font-bold">{year}</h3>
//         </div>

//         {/* Right side - Title and Description */}
//         <div className="md:w-3/4 bg-white shadow-md p-6 rounded-lg">
//           <h4 className="text-lg font-semibold text-custom-blue">{title}</h4>
//           <p className="text-gray-600 mt-2">{description}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default TimelineItem;

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isRightAligned: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isRightAligned }) => {
  return (
    <motion.div
      className={`relative flex flex-col md:flex-row items-center my-12 mx-auto max-w-3xl ${
        isRightAligned ? 'md:flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Vertical Line Connector on Small Screens */}
      <div className="absolute md:hidden w-1 h-full bg-custom-blue left-1/2 transform -translate-x-1/2 top-0"></div>

      {/* Left side - Year */}
      <div className="md:w-1/4 w-full text-center md:text-right pr-4 mb-4 md:mb-0">
        <h3 className="text-xl md:text-2xl font-bold text-custom-blue">{year}</h3>
      </div>

      {/* Right side - Title and Description */}
      <div className="md:w-3/4 w-full bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h4 className="text-lg md:text-xl font-semibold text-custom-blue mb-2">{title}</h4>
        <p className="text-gray-600 text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
