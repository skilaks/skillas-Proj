import React, { useState } from "react";
import {
  Sidebar,
  Content,
  Navbar,
  DashbordService,
} from "../components/dashbord";
import { dashbordService } from "../components/dashbord/";
import { userStore, userLogined } from "../components/redux";
import "../components/dashbord/dashbord.css";
import { PageService } from "./";
import { Nav } from "react-bootstrap";
const unsubscrobe = userStore.subscribe(() =>
  console.log("Updated user", userStore.getState())
);
export class DashbordPage extends React.Component {
  state = { flag: {} };
  async componentDidMount() {
    const response = await dashbordService.getDashboard(
      JSON.parse(PageService.getUserData())
    );
    if (response.status === 200) {
      this.setState({ user: response.data });
      userStore.dispatch(userLogined(response.data));
      //  console.log(response.data)
      userStore.subscribe(() => {
        this.setState({ user: userStore.getState() });
      });
      this.flagHandler(true);
    }
  }

  componentWillUnmount() {
    unsubscrobe();
  }

  flagHandler(flag) {
    this.setState({ flag: flag });
  }
  render() {
    console.log(this.state.user);

    return (
      <div className='row' id="wrapperDashbord">
        {/*Navbar*/}
        <div className='col-12 col-md-12 p-0'>
          {this.state.user ? <Navbar onUser={this.state.user} /> : ""}
        </div>
        <div className='col-12 col-md-12 p-0'>
          <div className=' '>
            <div className='col-1 col-md-1 p-0'>
 {/* Sidebar */}
        <Sidebar />
        
            </div>
            <div className='col-10 col-md-10 p-0'>
              {/* Content Wrapper */}

        <Content />
            </div>
          </div>
           
        </div>
      
      </div>
    );
  }
}
