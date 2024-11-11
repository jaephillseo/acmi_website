import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="stat-card"
    >
      <div className="stat">
        <div className="stat-value text-primary">{value}</div>
        <div className="stat-title">{title}</div>
      </div>
    </motion.div>
  );
};

export default StatCard;