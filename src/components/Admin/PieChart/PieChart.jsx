import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (data) {
      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: data.labels,
          datasets: [{
            label: 'Sales by Category',
            data: data.values,
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colors for each slice
          }]
        },
        options: {
          // Add options here, such as legend, tooltips, etc.
        }
      });
    }
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
};

export default PieChart;
