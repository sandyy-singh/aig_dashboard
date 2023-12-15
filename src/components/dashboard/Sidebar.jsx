import React, { useState } from "react";
import "./Sidebar.scss";
// import dashboard from "../../img/dashboard.png";
// import farmer from "../../img/farmer.png";
// import generate_report from "../../img/generate_report.png";
import user from "../../img/user.png";
import { Link } from "react-router-dom";
import setting from "../../img/setting.png";
import logout from "../../img/logout.png";
// import Asset from "../../img/Asset.png";
import DharaLogo from "../../img/DharaLogo.jpg";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { useUserContext } from "../../ContextProvider";
function Sidebar() {
  const [activeListItem, setActiveListItem] = useState(null);
  const { setIsTocken } = useUserContext();

  const handleListItemClick = (listItemName) => {
    setActiveListItem(listItemName);
  };

  const isListItemActive = (listItemName) => {
    return activeListItem === listItemName ? "orange" : "black";
  };

  return (
    <nav className="container-fluid sidebar">
      <div className="row navbar d-flex flex-column justify-content-between parentsidebar">
        <div className="col">
          <ul className="navbar-nav flex-column">
            <li className="nav-item mt-4 ms-1 mb-3 d-flex flex-row align-items-center">
              <img className="me-2" height={15} src={DharaLogo} alt="logo" />
              Welcome <span className="fw-bold ms-2">Admin</span>
            </li>
            <li className="nav-item mb-2">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Search"
              />
            </li>
            <li
              className="nav-item mt-2 listitem"
              onClick={() => handleListItemClick("Dashboard")}
            >
              <Link
                className="m-1 text-black text-decoration-none listitem"
                to="/"
              >
                {/* <img className="mb-1 me-1" src={dashboard} alt="Dashboard Icon" /> */}
                <RxDashboard
                  className="mb-1 me-1"
                  style={{ color: isListItemActive("Dashboard") }}
                />
                <span style={{ color: isListItemActive("Dashboard") }}>
                  Dashboard
                </span>
              </Link>
            </li>
            <li
              className="nav-item mt-2 listitem"
              onClick={() => handleListItemClick("Add Farmer")}
            >
              <Link
                className="m-1 text-black text-decoration-none"
                to="/addfarmer"
              >
                {/* <img className="mb-1 me-1" src={farmer} alt="Add Farmer Icon" /> */}
                <MdOutlinePeopleAlt
                  style={{ color: isListItemActive("Add Farmer") }}
                  className="mb-1 me-1"
                />
                <span style={{ color: isListItemActive("Add Farmer") }}>
                  Add Farmer
                </span>
              </Link>
            </li>
            <li
              className="nav-item mt-2 listitem"
              onClick={() => handleListItemClick("Generate Report")}
            >
              <Link className="text-black text-decoration-none" to="#">
                {/* <img className="mb-1 me-1" src={generate_report} alt="Generate Report Icon" /> */}
                <HiOutlineClipboardList
                  className="mb-1 me-1"
                  style={{ color: isListItemActive("Generate Report") }}
                />
                <span style={{ color: isListItemActive("Generate Report") }}>
                  Generate Report
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col d-flex flex-column">
          <div className="row mt-auto">
            <div className="col d-flex mb-4 align-items-center">
              <div className="col-1 me-3">
                <img src={user} alt="User Icon" />
              </div>
              <div className="col-8 ms-3">
                {/* <div>Gustavo Xavier</div> */}
                <div className="rounded-pill bg-warning d-inline ps-1 pe-1">
                  Admin
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column">
                <Link to="#" className="text-black text-decoration-none mb-2">
                  <img className="me-2" src={setting} alt="Settings Icon" />
                  Settings
                </Link>
                <Link
                  to="#"
                  className="text-black text-decoration-none"
                  onClick={() => setIsTocken(false)}
                >
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
}

export default Sidebar;
