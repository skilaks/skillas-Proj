import React from "react";

export function Footer() {
  const styles ={
    panddingTop:'60'
  }
  return (
    <section className="footer footer-bg  text-light pandding-footer pt-5">
      <div className="container pt-5 ">
        <div className="row pt-4">
          <div className="col-md-3 ">
              <div>
            <div className='d-flex justify-content-start '> 
           <span
                className="oi oi-phone  text-success span-icon"
                title="icon phone"
                aria-hidden="true"
              ></span>
              <h5>  شرکت اسکیلاکس</h5>
              </div>
              <div className="mt-">
              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
            <div className='d-flex justify-content-start'>
              <span
                className="oi oi-phone  text-success span-icon"
                title="icon phone"
                aria-hidden="true"
              ></span>
              <p className=''>0513-2134567</p>
            </div>
            <div className='d-flex justify-content-start'>
              <span
                className="oi oi-envelope-closed  text-success span-icon"
                title="icon email"
                aria-hidden="true"
              ></span>
              <p>id@gmail.com</p>
            </div>
            <div className='d-flex justify-content-start' >
              <span
                className="oi oi-map-marker  text-success span-icon"
                title="icon map-maker"
                aria-hidden="true"
              ></span>
              <p>مشهد</p>
              </div>
            </div>
          </div>
        <div className='col-md-3 margin-col'>
            <h5>لینک های کار بردی</h5>
            <div className='mt-5'>
                <diV>
                  <a href="#" className=" text-light">خانه</a>   
                </diV>
               <div className="mt-4">
                      <a href="#" className=" text-light" >تماس با ما</a>
               </div>
             <div className="mt-4">
                  <a href="#" className=" text-light">دوره های آموزشی</a>
             </div>
               
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}
