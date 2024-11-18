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
            <th>Mold Type</th>
            <th>Monthly Capacity</th>
            <th>Yearly Capacity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.moldType}</td>
              <td>{row.monthlyCapacity}</td>
              <td>{row.yearlyCapacity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CapacityTable;