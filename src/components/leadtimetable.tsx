import React from "react";
import styles from "../styles/productioncapacity.module.css";

interface LeadtimeTableProps {
  data: {
    moldType: string;
    moldStage: string;
    leadTime: string;
  }[];
}

const LeadtimeTable: React.FC<LeadtimeTableProps> = ({ data }) => {
  return (
    <div className={styles["table-container"]}>
      <table className={styles["custom-table"]}>
        <thead>
          <tr>
            <th className="text-lg md:text-2xl font-bold text-gray-800">Mold Type</th>
            <th className="text-lg md:text-2xl font-bold text-gray-800">Stage</th>
            <th className="text-lg md:text-2xl font-bold text-gray-800">Lead Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="text-lg md:text-xl font-semibold text-gray-800">{row.moldType}</td>
              <td className="text-lg md:text-xl font-semibold text-gray-800">{row.moldStage}</td>
              <td className="text-lg md:text-xl font-semibold text-gray-800">{row.leadTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadtimeTable;