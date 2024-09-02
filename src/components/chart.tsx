'use client'

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'HSK Growth Chart',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 500000
      }
    }
  }
};

const getData = ({label, dataset}:{label:string[], dataset:number[]}) => {
  return {
  type: 'line',
  labels: label,
  datasets: [
    {
      label: 'Total Production Capacity (pairs/month)',
      data: dataset,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
}}

const LineChartComp = ({label, dataset}:{label:string[], dataset:number[]}) => {
  return (
    <Line options={options} data={getData({label, dataset})} className='mt-12'/>
  )
}

export default LineChartComp