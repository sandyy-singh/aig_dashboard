import React from "react";

const AreaCovered = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-column">
        <div className="col">
          <div className="w-100 d-flex flex-column  pt-2">
            <p className="lh-1 p-3">
              <span className="fw-bold">Area Covered (in ha.) </span>
              <br />
              <span className="fw-bold fs-6"> Sep. 2023 - Nov. 2023</span>
            </p>
          </div>
        </div>
        <div className="col">
          <div className="row align-items-center flex-row">
            <div className="col-1 fw-bold">
              Agroforestry
            </div>
            <div className="col-7 d-flex justify-content-between progress1">
             <span className="m-0 progress1"></span>
              <span>10000</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaCovered;
