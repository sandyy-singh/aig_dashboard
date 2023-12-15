import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LineChart = () => {
  const data = {
    labels: ["2023", "2024", "2025", "2026", "2027", "2028"],
    datasets: [
      {
        label: "Sales",
        data: [50000, 250000, 450000, 650000],
        borderColor: "blue",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200000, // Set the step size for the y-axis ticks
        },
      },
    },
  };
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-12 mt-lg-5 ">
          <div className="row">
            <div className="col-12 mt-5 mx-3 ">
              <div className=" mt-xl-4">
                <h3 className="fs-4 fw-bold">Projected Growth</h3>
              </div>
            </div>
            <div className="p-md-4 mb-lg-4">
              <div className="col-12 d-flex align-items-center justify-content-center p-md-4 mb-lg-4">
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-5 d-flex align-items-center justify-content-center">
          {/* <div className="col-12 d-flex align-items-center justify-content-center p-md-4 mb-lg-4"> */}
          <Line data={data} options={options} height={100} width={250} />
          {/* </div> */}
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
          
    </div>
  );
};

export default LineChart;
