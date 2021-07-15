import React from "react";
import talentImg from "../assest/img/talent.png";
import storetImg from "../assest/img/store.png";
import eduImg from "../assest/img/edu.png";

// import "./style.css";
export function Education() {
  return (
    <section className="section-padding bg-light mt-2 mb-5">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center ">
            <div className="col-md-8 ">
              <h2 className="mb-5 mb-md-3">
                ارائه متفاوت ترین <span className="text-info">خدمات </span>{" "}
                اسکیلاس
              </h2>

              <p style={{ fontSize: 20 }}>
                اسکیلاس اولین سایت هوشمند در حوزه{" "}
                <span className="text-info font-weight-bold">خدمات آموزشی</span>{" "}
                و 
                <span className="text-info font-weight-bold"> استعدادیابی   </span>
                  با  کادری مجرب و حرفه ای پشتیبان شما !
              </p>
            </div>
          </div>
        </div>
        <div className="row p-md-4 mb-md-5 mt-5">
          <div className="col-md-4">
            <div className="card border-light bg-light shadow">
              <img
                className="cart-img-top"
                width=""
                src={talentImg}
                alt="..."
              />
              <div className="cart-body">
                <h5 className="cart-title p-text mt-3">استعداد یابی</h5>
                <p className="cart-text p-1">
                  آموزش در کنار پرورش استعداد، با جدیدترین روش و متد موجود برای
                  کودکان
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-light bg-light shadow">
              <img
                className="cart-img-top"
                width=""
                src={storetImg}
                alt="..."
              />
              <div className="cart-body">
                <h5 className="cart-title p-text mt-3">فروشگاه</h5>
                <p className="cart-text p-1">
                  فروشگاهی جهت ارائه محصولات و مکانی برای درآمدزایی بیشتر شما !
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card border-light bg-light shadow ">
              <img className="cart-img-top" width="" src={eduImg} alt="..." />
              <div className="cart-body">
                <h5 className="cart-title p-text mt-3">
                  پرورش،آموزش،استغال زایی
                </h5>
                <p className="cart-text p-1">
                  دادن حق آموزش به هنرجو و دانش آموزانی که به تایید استاد رسیده
                  باشند!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
