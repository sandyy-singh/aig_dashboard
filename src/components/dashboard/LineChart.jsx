import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LineChart = () => {
  // const data = {
  //   labels: ["2023", "2024", "2025", "2026", "2027", "2028"],
  //   datasets: [
  //     {
  //       label: {
  //         display: false,
  //       },
  //       data: [50000, 250000, 450000, 650000],
  //       borderColor: "blue",
  //       fill: false,
  //     },

  //     //   {
  //     //     label: "yearly Sales",
  //     //     data: [55, 85, 40, 71, 66],
  //     //     borderColor: "red",
  //     //     fill: false,
  //     //   },
  //   ],
  // };
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
        tension: 0.1,
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
        <div className="col-12 mt-lg-5 ">
          <div className="row">
            <div className="col-12 mt-5 mx-3 ">
              <div className="mt-xl-2">
                <h3 className="fs-4 fw-bold">Projected Growth</h3>
              </div>
            </div>
            <div className="p-md-4 mb-lg-4">
              <div className="col-12 d-flex align-items-center justify-content-center p-md-4 mb-lg-4">
                <Line data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
          
    </div>
  );
};

export default LineChart;
