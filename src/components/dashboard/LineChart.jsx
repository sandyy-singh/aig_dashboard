import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);
const LineChart = () => {
  const data = {
    labels: ["2023", "2024", "2025", "2026", "2027",'2028'],
    datasets: [
      {

        label: {
          display: false,
        },
        data: [1065, 1059, 2080, 3081, 4056],
        borderColor: "blue",
        fill: false,
      },

    //   {
    //     label: "yearly Sales",
    //     data: [55, 85, 40, 71, 66],
    //     borderColor: "red",
    //     fill: false,
    //   },
    ],
  };

  return (
    <div className="container-fluid ">
      <div className="row">
      <h3 className="col mt-4 mx-2">Projected Growth</h3>
      </div>
      <div className="row d-flex align-items-center justify-content-center p-md-5 ">

        <Line data={data} />
      </div>
    </div>
  );
};

export default LineChart;
