// components/DoughnutChart.js
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import centerTextPlugin from "../../../plugins/doughnutCenterText"

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    // labels: ['Future Income', 'Flexicap Fund', 'Smallcap Fund', 'Midcap Fund'],
    datasets: [
      {
        label: 'Fund Allocation',
        data: [30, 20, 30, 20],
        backgroundColor: [
          '#FF6384', // Future Income
          '#36A2EB', // Flexicap
          '#FFCE56', // Smallcap
          '#4BC0C0', // Midcap
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
    cutout: '82%',
  };

  return <Doughnut data={data} options={options} plugins={[centerTextPlugin]}/>;
};

export default DoughnutChart;