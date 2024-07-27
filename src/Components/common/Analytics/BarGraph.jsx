// components/BarChart.js
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarGraph = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [50, 20, 30, 50, 20, 30, 70],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "#0785C4",
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarGraph;
