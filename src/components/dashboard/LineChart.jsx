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
    labels: ["2023", "2024", "2025", "2026", "2027", "2028"],
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
      <div className="row p-0 p-xxl-5">
        <div className="col-12 mt-lg-5 p-0 p-xl-5">
          <div className="row">
            <div className="col-12 ">
              <h3 className="fs-4 fw-bold">Projected Growth</h3>
            </div>

            <div className="col-12 d-flex align-items-center justify-content-center ">
              <Line data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
