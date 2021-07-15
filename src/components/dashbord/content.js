import React, { useState,useEffect } from "react";
import {modeStore,sidebarToggeled} from '../redux'
// import './dashbord.css'

export function Content(props) {
  return (
    <div id="content-wrapper" className="d-flex flex-column" dir="rtl">
      {/* <!-- Main Content --> */}
      <div id="content">
    

        {/* <!-- Begin Page Content --> */}
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
          <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
        </div>
        {/* <!-- /.container-fluid --> */}
      </div>
      {/* <!-- End of Main Content --> */}

      {/* <!-- Footer --> */}
      {/* <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2020</span>
          </div>
        </div>
      </footer> */}
      {/* <!-- End of Footer --> */}
    </div>
  );
}
