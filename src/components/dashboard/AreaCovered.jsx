import React from "react";

const AreaCovered = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col">
          <div className="d-flex flex-column p-4">
            <p className="lh-1 p-3">
              <span className="fw-bold">Area Covered (in ha.) </span>
              <br />
              <span className="fw-bold fs-6"> Sep. 2023 - Nov. 2023</span>
            </p>
            <div className="range-container p-2">
              <input type="range" className="range-input" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaCovered;
