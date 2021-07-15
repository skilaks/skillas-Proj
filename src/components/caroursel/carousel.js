import React from "react";
import "./style.css";
import background from "../assest/img/baner1.png";
export function Carousel() {
  return (
    <div className="content " height="300">
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="imgCarousel ">
            <img width="100%" src={background} alt="#" />
          </div>
        </div>

        <div
          class="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
          data-scrollax-parent="true"
        >
         
          <div className="row myButtons justify-content-center ">
            {/* <div className="col-md-2">
                 <a
              className="btn btn-success text-light btn-lg  btn-block "
              id="signupBtn"
              href="/login"
            >
             ورود
            </a>
            </div> */}
            <div className="col-md-3  ">
              <a
                className="btn btn-info text-light  btn-lg btn-block "
                href="/"
              >
                {" "}
                استعداد خودتو بشناس!
              </a>
            </div>
            <span> </span>
          </div>
        </div>
      </div>
    </div>
  );
}
