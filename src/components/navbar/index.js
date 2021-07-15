import React from "react";
import { Modal } from "../modal";
import logo from "../assest/img/logo.png";
import "./navbar.css";

export function NavbarRtl(props) {
  return (
    <nav
      className="navbar navbar-expand-md navbar-light   bg-light font-vazir-light"
      style={{ fontSize: 15, height: 80 }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="تبديل التنقل"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse bg-light" id="navbarCollapse">
          <ul className="navbar-nav mr-5 mb-2 mb-md-0">
            <li className="nav-item active">
              <a className="nav-link p-text" aria-current="page" href="/">
                خانه
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link p-text " aria-current="page" href="/team" >
                درباره ما
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="btn btn-outline-primary btn-round "
                href="/login"
                style={{ marginRight: "auto" }}
              >
                <span style={{ fontSize: 20 }}> فرم ثبت نام / ورود</span>
              </a>
            </li>
          </ul>
          
        </div>
        <a className="navbar-brand mr-auto">
          <img width="150" src={logo} />
        </a>
      </div>
    </nav>
  );
}
