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
            <th>Mold Type</th>
            <th>Stage</th>
            <th>Lead Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.moldType}</td>
              <td>{row.moldStage}</td>
              <td>{row.leadTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadtimeTable;