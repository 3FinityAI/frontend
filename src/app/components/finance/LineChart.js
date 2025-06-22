// components/LineChart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
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

const maxTitleLength = 35;

const truncate = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const LineChart = () => {
  const data = {
    labels: ['2021', '2022', '2023', '2024'], // 4 years
    datasets: [
      {
        // label: 'hjk',
        data: [20, 16, 26, 35, 30], // Example returns
        borderColor: '#0080E8',
        backgroundColor: 'rgba(75,192,192,0.2)',
        tension: 0.4, // smooth curve
        fill: true,
        // pointBackgroundColor: '#4BC0C0',
        // pointBorderColor: '#fff',
        pointRadius: 0, // hide breakpoints
      pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
    mode: 'index', // or 'nearest'
    intersect: false, // Show tooltip even if not exactly on a point
  },
    maintainAspectRatio: false,
    plugins: {
        tooltip: {
      enabled: true,
    },
      title: {
        display: true,
        text: truncate("Motilal Oswal 4-Year Return Performance Data", maxTitleLength),
        align: 'start', 
        font: {
        size: 20,
        weight: '500',
        },
      color: '#0D0D0D',
      padding: {
        top: 10,
        bottom: 30,
      },
      },
      legend: {
        display: false,
      },
    },
    // scales: {
    //   y: {
    //     title: {
    //       display: true,
    //       text: 'Returns (%)',
    //     },
    //     beginAtZero: true,
    //   },
    // },
    scales: {
    x: {
      grid: {
        display: false,    // Show vertical lines
        drawBorder: false,
        zeroLineColor: 'transparent',
      },
      beginAtZero: false,
    //   min: 2016,        // Minimum value of Y-axis
    //   max: 50,
      
      ticks: {
        font: {
          size: 18, // Y-axis label font size
        },
        color: '#0D0D0D',
      },
    },
    y: {
      grid: {
        display: true,   // Hide horizontal lines
        drawBorder: false,
        zeroLineColor: 'transparent',
      },
      beginAtZero: false,
     
      min: 0,        // Minimum value of Y-axis
      max: 50,      // Maximum value of Y-axis
      ticks: {
        stepSize: 10, // Optional: defines interval
        font: {
          size: 18, // Y-axis label font size
        },
         color: '#0D0D0D',
      },
      
    },
  },
  };

  return <Line data={data} options={options}  />;
};

export default LineChart;