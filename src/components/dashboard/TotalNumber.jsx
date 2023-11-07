import React from "react";
import {FaUserFriends} from 'react-icons/fa';
const TotalNumber = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column p-4">
            <p className="mt-2  ">
              <span className="fw-bold"> Total Number of Farmers Enrolled</span>
              <br />
              <span className="fw-bold fs-6"> Sep. 2023 - Nov. 2023</span>
            </p>
            <div className="Number-container p-2">
              <h1 className="px-3 mt-3 fw-bold"><FaUserFriends className="text-secondary mb-2"/> 10,000</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalNumber;
