import React from "react";
import { Link } from "react-router-dom";
import Asset from '../../img/Asset.png';
import { useLocation } from 'react-router-dom';
const MobileUpperNav = () => {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/addfarmer' || location.pathname === '/FarmerIdMain' || location.pathname === '/') {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav class="navbar navbar-expand-lg  ">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <Link class="navbar-brand" to="/">
              <img className='me-2' height={45} src={Asset} alt="logo" />
              </Link>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav p-2 text-center">
                  <li class="nav-item mt-4">
                    <Link
                      className="m-1 text-black text-decoration-none"
                      to="/"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li class="nav-item mt-2">
                    <Link
                      className="m-1 text-black text-decoration-none"
                      to="/addfarmer"
                    >
                      Add Farmer
                    </Link>
                  </li>
                  <li class="nav-item mt-2">
                    <Link className="text-black text-decoration-none" to="/">
                      Generate Report
                    </Link>
                  </li>
                  <li class="nav-item mt-2">
                  <Link className="text-black text-decoration-none" to="/">
                   Report
                </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
} else {
  return null;
}
};

export default MobileUpperNav;
