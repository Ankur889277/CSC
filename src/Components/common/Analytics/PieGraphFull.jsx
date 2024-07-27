import { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieGraphFull = () => {
  const [chartData, setChartData] = useState({
    labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
    datasets: [
      {
        label: "Dataset 1",
        data: [20, 30, 25, 10, 15],
        backgroundColor: [
          "#FF6384",
          "#FF9F40",
          "#FFCD56",
          "#4BC0C0",
          "#36A2EB",
        ],
        hoverOffset: 40,
      },
    ],
  });

  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
      const ctx = chartContainer.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "pie",
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: false,
              text: "Chart.js Pie Chart",
            },
          },
        },
      });
    }
  }, [chartData]);

  const handleRandomize = () => {
    const newData = {
      labels: chartData.labels,
      datasets: [
        {
          ...chartData.datasets[0],
          data: chartData.datasets[0].data.map(() =>
            Math.floor(Math.random() * 100)
          ),
        },
      ],
    };
    setChartData(newData);
  };

  const handleAddData = () => {
    const newData = {
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: [
            ...chartData.datasets[0].data,
            Math.floor(Math.random() * 100),
          ],
        },
      ],
    };
    setChartData(newData);
  };

  const handleRemoveData = () => {
    const newData = {
      ...chartData,
      datasets: [
        {
          ...chartData.datasets[0],
          data: chartData.datasets[0].data.slice(0, -1),
        },
      ],
    };
    setChartData(newData);
  };

  return (
    <div>
      <div>
        <canvas ref={chartContainer} />
      </div>
    </div>
  );
};

export default PieGraphFull;
