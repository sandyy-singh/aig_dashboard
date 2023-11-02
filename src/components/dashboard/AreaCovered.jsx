import React from "react";

const AreaCovered = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col">
          <div className="d-flex flex-column p-4">
            <p className="">
              <span className="fw-bold">Area Covered (in ha.) </span>
              <br />
              <span className="fw-bold fs-6"> Sep. 2023 - Nov. 2023</span>
            </p>
            <div className="range-container ">
              <div className="row">

                <div className="d-flex">
                  <div className="col-4">
                    <p>Agroforestry</p>
                  </div>
                  <div className="col-8  progressFirst ms-2 ">
                    <div className="row d-flex align-items-center justify-content-between ">
                      <div className="grad2" style={{ width: "45%" }}></div>
                      <span className="gbgg1">200,000 ha.</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="col-4">
                    <p>Forestry</p>
                  </div>
                  <div className="col-8  progressFirst ms-2 ">
                    <div className="row ">
                      <div
                        className="d-flex align-items-center justify-content-between grad3"
                        style={{ width: "8%" }}
                      ></div>
                      <span className="gbgg2">1,500 ha.</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="col-4">
                    <p>Farming</p>
                  </div>
                  <div className="col-8  progressFirst ms-2 ">
                    <div className="row ">
                      <div
                        className="d-flex align-items-center justify-content-between grad4  "
                        style={{ width: "28%" }}
                      ></div>
                      <span className="gbgg3">1,500 ha.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaCovered;
