import React from "react";

const StatusOperation = () => {
  return (
    <div className="container-fluid ">
      <div className="row h-100">
        <div className="col-12 h-30  mx-3 mx-xl-0">
          <h3 className="fs-4 fw-bold  ms-3">States Under Operation</h3>
        </div>
        <div className="col-12 h-70 pt-4 pt-xl-0 d-flex align-items-center justify-content-center">
          <div className="table-responsive ">
            <table className="table table-bordered text-center ">
              <thead>
                <tr>
                  <th className="align-middle">State</th>
                  <th className="align-middle">Total Land Under Management</th>
                  <th
                    className="align-middle"
                    style={{
                      backgroundColor: "rgba(0, 128, 0, 1)",
                      color: "white",
                    }}
                    scope="col"
                  >
                    Farming
                  </th>
                  <th
                    className="align-middle"
                    style={{
                      backgroundColor: "rgba(115, 74, 0, 1)",
                      color: "white",
                    }}
                    scope="col"
                  >
                    Agroforestry
                  </th>
                  <th
                    className="align-middle"
                    style={{
                      backgroundColor: "rgba(0, 40, 63, 1)",
                      color: "white",
                    }}
                    scope="col"
                  >
                    Forestry
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="vertical-align-middle">Kerela</td>
                  <td className="vertical-align-middle">5000ha.</td>
                  <td className="vertical-align-middle"></td>
                  <td className="vertical-align-middle">5000ha.</td>
                  <td className="vertical-align-middle"></td>
                </tr>
                <tr>
                  <td className="vertical-align-middle">Uttar Pradesh</td>
                  <td className="vertical-align-middle">10000ha.</td>
                  <td className="vertical-align-middle">10000ha.</td>
                  <td className="vertical-align-middle"></td>
                  <td className="vertical-align-middle"></td>
                </tr>

                <tr>
                  <td className="vertical-align-middle">Tamil Nadu</td>
                  <td className="vertical-align-middle">15000ha.</td>
                  <td className="vertical-align-middle"></td>
                  <td className="vertical-align-middle">15000ha.</td>
                  <td className="vertical-align-middle"></td>
                </tr>
                <tr>
                  <td className="vertical-align-middle">Rajasthan</td>
                  <td className="vertical-align-middle">6500ha.</td>
                  <td className="vertical-align-middle">5000ha.</td>
                  <td className="vertical-align-middle"></td>
                  <td className="vertical-align-middle">1500ha</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusOperation;
