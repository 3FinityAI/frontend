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

const DoughnutChart = ({chartData}) => {

  if (!chartData || chartData.length === 0) {
  return null; // or a loading spinner
}

  console.log(chartData, "chartData")


  const colorList = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];
  const dummyData = [30, 40, 15, 15];


  const data = {
    labels: ['Future Income', 'Flexicap Fund', 'Smallcap Fund', 'Midcap Fund'],
    datasets: [
      {
        label: 'Fund Allocation',
        data: chartData.map((item)=> Number(parseFloat(item?.allocationPercentage.replace('%', ''))) ),
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
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: '82%',
  };

  return <Doughnut data={data}  width={221} height={221} options={options} plugins={[centerTextPlugin]}/>;
};

export default DoughnutChart;