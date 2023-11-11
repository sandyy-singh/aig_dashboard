import React from 'react';
import './Sidebar.scss';
import dashboard from '../../img/dashboard.png';
import farmer from '../../img/farmer.png';
import generate_report from '../../img/generate_report.png';
import user from '../../img/user.png';
import { Link } from 'react-router-dom';
import setting from '../../img/setting.png';
import logout from '../../img/logout.png';
import Asset from '../../img/Asset.png';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/addfarmer' || location.pathname === '/FarmerIdMain' || location.pathname === '/') {
    return (
    
      <nav className="container-fluid sidebar">
      <div className="row navbar d-flex flex-column justify-content-between parentsidebar">
        <div className="col">
          <ul className="navbar-nav flex-column">
            <li className="nav-item mt-4 ms-1 mb-3 d-flex flex-row  align-items-center">
              <img className='me-2' height={15} src={Asset} alt="logo" />
              Welcome<span className='fw-bold ms-2'>User</span>
            </li>
            <li className="nav-item mb-2">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Search"
              />
            </li>
            <li className="nav-item">
              <p className="d-flex align-items-center">
                <img src={dashboard} alt="Dashboard Icon" />
                <Link className="m-1 text-black text-decoration-none" to="/">
                  Dashboard
                </Link>
              </p>
            </li>
            <li className="nav-item">
              <p className="d-flex align-items-center">
                <img src={farmer} alt="Add Farmer Icon" />
                <Link className="m-1 text-black text-decoration-none" to="/addfarmer">
                  Add Farmer
                </Link>
              </p>
            </li>
            <li className="nav-item">
              <p className="d-flex align-items-center">
                <img src={generate_report} alt="Generate Report Icon" />
                <Link className="text-black text-decoration-none" to="#">
                  Generate Report
                </Link>
              </p>
            </li>
          </ul> 
        </div>
        <div className="col d-flex flex-column">
          <div className='row mt-auto'>
            <div className="col d-flex mb-3">
              <div className="col-1 me-3">
                <img src={user} alt="User Icon" />
              </div>
              <div className="col-8 ms-3">
                <div>Gustavo Xavier</div>
                <div className="rounded-pill bg-warning d-inline ps-1 pe-1">Admin</div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column ">
                <Link to="#" className="text-black text-decoration-none mb-2">
                  <img className="me-2" src={setting} alt="Settings Icon" />
                  Settings
                </Link>
                <Link to="#" className="text-black text-decoration-none">
                  <img className="me-2" src={logout} alt="Logout Icon" />
                  Log out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    );
  } else {
    return null;
  }

}

export default Sidebar;
