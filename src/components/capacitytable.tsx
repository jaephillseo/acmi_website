import React from "react";
import styles from "../styles/productioncapacity.module.css";

interface CapacityTableProps {
  data: {
    moldType: string;
    monthlyCapacity: string;
    yearlyCapacity: string;
  }[];
}

const CapacityTable: React.FC<CapacityTableProps> = ({ data }) => {
  return (
    <div className={styles["table-container"]}>
      <table className={styles["custom-table"]}>
        <thead>
          <tr>
            <th className="text-xl md:text-2xl font-bold text-gray-800">Mold Type</th>
            <th className="text-xl md:text-2xl font-bold text-gray-800">Monthly Capacity</th>
            <th className="text-xl md:text-2xl font-bold text-gray-800">Yearly Capacity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="text-lg md:text-xl font-semibold text-gray-800">{row.moldType}</td>
              <td className="text-lg md:text-xl font-semibold text-gray-800">{row.monthlyCapacity}</td>
              <td className="text-lg md:text-xl font-semibold text-gray-800">{row.yearlyCapacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CapacityTable;