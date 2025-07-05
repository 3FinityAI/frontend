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

const wrapText = (text, maxLineLength) => {
  const words = text.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + word).length <= maxLineLength) {
      currentLine += word + ' ';
    } else {
      lines.push(currentLine.trim());
      currentLine = word + ' ';
    }
  }

  if (currentLine.length > 0) {
    lines.push(currentLine.trim());
  }

  return lines;
};

const LineChart = () => {
  const data = {
    labels: ['2021', '2022', '2023', '2024', '2025', '2026', '2021', '2022', '2023', '2024'], // 4 years
    datasets: [
      {
        // label: 'hjk',
        data: [20, 16, 26, 35, 30, 20, 10, 35, 30, 20, 10], // Example returns
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
          text: wrapText("Motilal Oswal 4-Year Return Performance", 35),
          align: 'start', 
          font: {
          size: 20,
          weight: '500',
        },
        color: '#fff',
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      legend: {
        display: false,
      },
    },
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
        color: '#fff',
      },
    },
    y: {
      grid: {
        display: true,   // Hide horizontal lines
        drawBorder: false,
        color: '#eee',
        zeroLineColor: 'transparent',
        borderWidth: 0.1,      // Thickness of Y-axis grid lines
        lineWidth: 0.1       // Alternative for line width (in some versions)
      },
      beginAtZero: false,
     
      min: 0,        // Minimum value of Y-axis
      max: 50,      // Maximum value of Y-axis
      ticks: {
        stepSize: 10, // Optional: defines interval
        font: {
          size: 18, // Y-axis label font size
        },
         color: '#fff',
      },
      
    },
  },
  };

  return <Line data={data} options={options}  />;
};

export default LineChart;