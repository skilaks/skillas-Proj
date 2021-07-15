import React, { useState, useEffect } from "react";
import { StudentLabels } from "./labels";
import { modeStore } from "../redux";

// import "./dashbord.css";

export function Sidebar(props) {
  const [state, setState] = useState({});
  const [sidebarToggled, setSidebarToggled] = useState([]);

  const [classToggled, setClassToggled] = useState("");

  const toggelHandeler = () => {
    if (classToggled == "toggled") setClassToggled("");
    else setClassToggled("toggled");
    console.log(classToggled);
  };
  useEffect(() => {
    modeStore.subscribe(() => {
      setSidebarToggled(modeStore.getState());
    });
    sidebarToggled[0] ? setClassToggled("") : setClassToggled("toggled");

    console.log(sidebarToggled[0]);
  }, [sidebarToggled]);

  return (
    <ul
      className={
        "navbar-nav bg-skillas-pink sidebar  sidebar-dark accordion p-text " +
        classToggled
      }
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      {/* <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fa fa-laugh-wink"></i>
        </div>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="sidebar-brand-text mx-3 font-blotus">
          اسکیلاس <sub>{StudentLabels.hedear}</sub>
        </div>
      </a> */}

      {/* <!-- Divider --> */}
    
      <div className="sidebar-heading mt-3">{StudentLabels.homeHeader}</div>

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item">
        <a className="nav-link" href="index.html">
          <i className="fa fa-fw fa-tachometer-alt"></i>
          <span>{StudentLabels.dashboard}</span>
        </a>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">{StudentLabels.Education}</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-fw fa-cog"></i>
          <span>{StudentLabels.LessonSelection}</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">
          <i className="fa fa-fw fa-cog"></i>
          <span>{StudentLabels.ClassShedule}</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">
          <i className="fa fa-fw fa-cog"></i>
          <span>{StudentLabels.Homeworks}</span>
        </a>
      </li>

      {/* <!-- Nav Item - Utilities Collapse Menu --> */}

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">{StudentLabels.financialHeader}</div>

      {/* <!-- Nav Item - Pages Collapse Menu --> */}

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-fw fa-chart-area"></i>
          <span>{StudentLabels.wallet}</span>
        </a>
      </li>

      {/* <!-- Nav Item - Tables --> */}

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
      <div className="sidebar-heading">{StudentLabels.supportHeader}</div>

      <li className="nav-item">
        <a className="nav-link" href="#">
          <i className="fa fa-fw fa-chart-area"></i>
          <span>{StudentLabels.support}</span>
        </a>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />

      {/* <!-- Sidebar Toggler (Sidebar) --> */}
      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          onClick={() => toggelHandeler()}
        >
          <i
            className={
              classToggled
                ? "fa fa-fw fa-chevron-left"
                : "fa fa-fw fa-chevron-right"
            }
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </ul>
  );
  // return (

  //   <Navbar bg="light" expand="lg">

  //   <Navbar.Toggle aria-controls="basic-navbar-nav" />

  //   <Navbar.Collapse id="basic-navbar-nav">
  //     <Nav className="mr-auto">
  //        <Row>
  //         <Col>
  //         <a className="nav-link" href="index.html">
  //         <i className="fa fa-fw fa-tachometer-alt"></i>
  //         <span>{StudentLabels.dashboard}</span>
  //       </a>
  //         </Col>
  //         <Col>
  //         <li className="nav-item">
  //        <a className="nav-link" href="#">
  //          <i className="fa fa-fw fa-cog"></i>
  //          <span>{StudentLabels.LessonSelection}</span>
  //        </a>
  //        </li>
  //        <li className="nav-item">
  //        <a className="nav-link " href="#">
  //          <i className="fa fa-fw fa-cog"></i>
  //          <span>{StudentLabels.ClassShedule}</span>
  //       </a>
  //      </li>
  //        <li className="nav-item">
  //       <a className="nav-link " href="#">
  //          <i className="fa fa-fw fa-cog"></i>
  //        <span>{StudentLabels.Homeworks}</span>
  //      </a>
  //      </li>
  //         </Col>
  //         <Col>

  //         </Col>
  //       </Row>
  //     </Nav>

  //   </Navbar.Collapse>
  // </Navbar>

  // );
}
