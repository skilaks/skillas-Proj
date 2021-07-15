import React from "react";
import logo from "../assest/img/logo.png"
// import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
export function Footer2() {
  return (
    <section id="footer">
      <div className="container">
        <div className="row text-center  ">
          <div className="col-xs-12 col-sm-6 col-md-6">
            <h5>لینک های کاربردی</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="/">
                  <i className="fa fa-angle-double-left mr-2"></i>خانه
                </a>
              </li>
              <li>
                <a href="/team">
                  <i className="fa fa-angle-double-left"></i>درباره ما
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-left"></i>فروشگاه
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-angle-double-left"></i>شروع کن
                </a>
              </li>
              
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 mt-5 mb-5 mb-md-0 mt-md-1 border-right   d-flex flex-warp justify-content-center ">
           
          
              <div className="align-self-center">
               <img width="150" src={logo}/>
            
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
           
              <ul class="list-unstyled list-inline social text-center">
                {/* <li class="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li> */}
                <li class="list-inline-item">
                  <a href="https://www.instagram.com/skilaks_boof">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                {/* <li class="list-inline-item">
                  <a href="https://www.fiverr.com/share/qb8D02">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li> */}
                <li class="list-inline-item">
                  <a href="https://t.me/Skilaks_boof" target="_blank">
                    <i class="fa fa-telegram"></i>
                  </a>
                </li>
              </ul>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}


