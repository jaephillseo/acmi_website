import React from 'react';
import { motion } from 'framer-motion';

interface Machine {
  name: string;
  units: string;
}

interface MachineCategoryProps {
  title: string;
  machines: Machine[];
  color: string;
  delay?: number;
}

const MachineCategory: React.FC<MachineCategoryProps> = ({ title, machines, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="w-full"
    >
      <div className="machine-card h-52">
        <div className={`machine-card-header rounded-lg ${color}`}>
          <h3 className="text-base-100">{title}</h3>
        </div>
        <div className="machine-list">
          <ul>
            {machines.map((machine, index) => (
              <li key={index} className="machine-item">
                <span>{machine.name}</span>
                <span className="badge badge-ghost">{machine.units}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default MachineCategory;