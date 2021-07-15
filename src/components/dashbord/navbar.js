import React, { useState, useEffect } from "react";
import logo from "../assest/img/logo.png";
export function Navbar(props) {
  const [user, setUser] = useState(props.onUser);
  const [toggled, setToggled] = useState(false);
  return (
    <nav
      className="navbar navbar-expand navbar-light bg-white topbar  pr-md-5 pl-md-5  static-top shadow justify-content-end "
      style={{ direction: "ltr" }}
    >
      <a className="navbar-brand mr-auto">
        <img width="150" src={logo} />
      </a>
      <ul className="navbar-nav  ">
        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}

        {/* <!-- Nav Item - Alerts --> */}
        <li className="nav-item dropdown no-arrow mr-1 mr-md-1 ml-0 ml-md-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-bell fa-fw"></i>
            {/* <!-- Counter - Alerts --> */}
            <span className="badge badge-danger badge-counter">3+</span>
          </a>
          {/* <!-- Dropdown - Alerts --> */}
          <div
            className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="alertsDropdown"
          >
            <h6 className="dropdown-header">Alerts Center</h6>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="mr-3">
                <div className="icon-circle bg-primary">
                  <i className="fa fa-file-alt text-white"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 12, 2019</div>
                <span className="font-weight-bold">
                  A new monthly report is ready to download!
                </span>
              </div>
            </a>
          </div>
        </li>

        {/* <!-- Nav Item - Messages --> */}
        <li className="nav-item dropdown no-arrow mr-0 mr-md-5 ml-0 ml-md-5 ">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="messagesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fa fa-envelope fa-fw"></i>
            {/* <!-- Counter - Messages --> */}
            <span className="badge badge-danger badge-counter">7</span>
          </a>
          {/* <!-- Dropdown - Messages --> */}
          <div
            className="dropdown-list dropdown-menu dropdown-menu-right  shadow animated--grow-in"
            aria-labelledby="messagesDropdown"
          >
            <h6 className="dropdown-header">Message Center</h6>
            <a className="dropdown-item d-flex align-items-center" href="#">
              <div className="dropdown-list-image mr-3">
                <img
                  className="rounded-circle"
                  src="./img/svgs/undraw_profile_1.svg"
                  alt=""
                />
                <div className="status-indicator bg-success"></div>
              </div>
              <div className="font-weight-bold">
                <div className="text-truncate">
                  Hi there! I am wondering if you can help me with a problem
                  I've been having.
                </div>
                <div className="small text-gray-500">Emily Fowler · 58m</div>
              </div>
            </a>
          </div>
        </li>

     

        {/* <!-- Nav Item - User Information --> */}
        <li className="nav-item dropdown no-arrow mr-md-1 ml-0 ml-md-0">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small p-text">
              {`${user.Data.name}  ${user.Data.family}`}
            </span>
            <img
            
              className="img-profile rounded-circle"
              src="./img/svgs/undraw_profile.svg"
            />
          </a>
          {/* <!-- Dropdown - User Information --> */}
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <a className="dropdown-item" href="#">
              <i className="fa fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Settings
            </a>
            <a className="dropdown-item" href="#">
              <i className="fa fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              Activity Log
            </a>
            <div className="dropdown-divider"></div>
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="fa fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
