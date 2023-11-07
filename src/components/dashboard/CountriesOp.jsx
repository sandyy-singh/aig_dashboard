import React from "react";

const CountriesOp = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col">
          <div className="d-flex flex-column p-4">
            <p className="fw-bold">Countries Under Operation</p>

            <div className="row my-1">
              <div  className="d-flex align-items-center justify-content-between grad1 p-2 " style={{ width: "80" + '%' }}>
                <div className="">India</div>
                <div className="">120k</div>
              </div>
            </div>

            <div className="row  my-1">
              <div  className="d-flex align-items-center justify-content-between grad1 p-2 " style={{ width: "70" + '%' }}>
                <div className="">Camroon</div>
                <div className="">80k</div>
              </div>
            </div>

            <div className="row   my-1">
              <div className="d-flex align-items-center justify-content-between grad1 p-2  " style={{ width: "60" + '%' }}>
                <div className="">Guyana</div>
                <div className="">70k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountriesOp;
