import React from "react";
import "./assest/styles/style.css";
import "./assest/styles/magnific-popup.css";
import {TeamCart} from "../components/utility"
import kohjaniImg from "./assest/img/team/kohjani.jpg";
import missSozanchi from "./assest/img/team/miss-sozanchi.jpg";
import mahdiSozanchi from "./assest/img/team/mahdi-sozanchi.jpg";
import amirgilaki from "./assest/img/team/amirgilaki.jpg";
import hafar from "./assest/img/team/hafar.jpg";
export function Team() {
  return (
    <div>
      <section className="background hero-wrapp">
        <div className="container ">
          <div className="row no-gutters  slider-text align-item-end justify-content-center">
            <div className="col-md-9  pb-5 mb-5 text-center position">
              <h1 className="mb-5 mt-5 bread shadow-text ">درباره ما</h1>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-section ftco-no-pt ftco-no-pb dir-rtl mt-4 "
        dir="ltr"
      >
        <div className=" container ">
          <div className="row d-flex">
            <div className="col-md-6 d-flex">
              <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center  justify-content-md-end background-team rounded">
                <a
                  href="https://www.instagram.com/skilaks_boof"
                  className="icon-video  d-flex justify-content-center  align-items-center mt-auto mt-md-0"
                >
                  <span
                    className="fa fa-instagram"
                    style={{ fontSize: 100 }}
                  ></span>
                </a>
              </div>
            </div>
            <div className="col-md-6 pl-md-5 py-md-2 ">
              <div className="row justify-content-start pt-3 pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <h2 className="mb-4 font-weight-bold">
                    اسکیلاس از کجا اومد؟
                  </h2>
                  <p className="p-text mt-2">
                    داستان اسکیلاس از وقتی که ما وارد دانشگاه شدیم و در آخر
                    فهمیدیم تحصیلاتمون با بازار کار کاملا فرق داره شروع شد،
                    دقیقا همونجایی که چالش های کاری در روز اول محل کار شروع
                    میشه! و برای ما یکی از چالش هایی که وجود داشت و خودشو رو
                    نشون میداد ، کار با نرم افزار و سایر توانایی هایی بود که در
                    دانشگاه و دوران تحصیلی به ما اضافه نشده بود و مجبور بودیم
                    دنبال اساتید مختلفی باشیم که بهمون بصورت کاربردی یاد بده و
                    این موضوع خیلی زمانبر بود. از طرفی به علت سیستم معیوب آموزش
                    و پرورش ، هیچکدوممون نتوسته بودیم استعداد خودمون رو به درستی
                    کشف کنیم و پرورشش بدیم و وارد رشته های اشتباهی شدیم و حتی
                    دوران مدرسمونو بی انگیزه و علاقه گذروندیم... و اونجا دقیقا
                    رسیدیم به جمله آقای جانسون اوکانر که میگفت من قربانی
                    استعدادیابی نشدن هستم و اگر استعدادیابی میشدم دقیقا مسیر
                    زندگیم تغییر می کرد.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-skillas-pink-light pb-5">
        <div className="container my-4 team-container">
          <div className="team-header-title mb-5 pt-5 ">
            <h2 className="font-weight-bold text-light rounded-bottom">تیم ما</h2>
          </div>
          <div className="row justify-content-center px-4 px-md-2" role="listbox">
            <div className="col-md-3 m-2  ">
              <div className="card mb-3 shadow team-card  border-0">
                <img
                  className="card-img-top"
                  width="500"
                  height="200"
                  src={amirgilaki}
                  alt="Card image cap"
                />
                <div className="card-body bg-skillas-pink text-light rounded-bottom">
                  <h4 className="card-title p-text ">مهشاد امیرگیلکی</h4>
                  <hr/>
                  <p className="card-text">
                    من مهشاد امیرگیلکی ام کارشناس ارشد برنامه ریزی شهری با گذشت
                    زمان، فهمیدم مهم ترین اصل در زندگی، داشتن برنامه دقیق از
                    علایق و خواسته های خود آدماست که زندگیشونو میسازه، برای همین
                    ما اسکیلاس رو به وجود آوردیم
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 m-2  " style={{ float: "right" }}>
            <div className="card mb-2 shadow team-card  border-0">
                <img
                  className="card-img-top "
                  src={missSozanchi}
                  width="500"
                  height="200"
                  alt="Card image cap"
                />
                <div className="card-body bg-skillas-pink text-light rounded-bottom ">
                  <h4 className="card-title p-text">منیو سوزنچی</h4>
                  <hr/>
                  <p className="card-text">
                    دانشجوی مهندسی برق ،عاشق الکترونیکم ولی چون نسبت به دانش
                    آموزان کشورم دغدغه مندم اینجام.با اسکیلاکس استعدادت رو پیدا
                    کن و موفق شو.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 m-2 " style={{ float: "right" }}>
              <div className="card mb-2 shadow team-card border-0">
                <img
                  className="card-img-top"
                  src={mahdiSozanchi}
                  width="500"
                  height="200"
                  alt="Card image cap"
                />
                <div className="card-body bg-skillas-pink text-light rounded-bottom">
                  <h4 className="card-title p-text">مهدی سوزنچی</h4>
                  <hr/>
                  <p className="card-text">
                    مهدی سوزنچی هستم معتقدم خیلی از اوقات پاسخ ها و راه حل ها
                    برای نجات یک سیستم، میتونه خارج از چارچوب فکری ما یا پاسخ
                    های کلیشه ای باشه مطلق فکر نکردن و ساختارشکنی سیستم های فکری
                    من هستند ما اومدیم ساختارها رو دگرگون کنیم
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 m-2 " style={{ float: "right" }}>
              <div className="card mb-2 shadow team-card  border-0">
                <img
                  className="card-img-top"
                  width="500"
                  height="200"
                  src={hafar}
                  alt="Card image cap"
                />
                <div className="card-body bg-skillas-pink text-light rounded-bottom">
                  <h4 className="card-title p-text">امیرمحمد حفار</h4>
                  <hr/>
                  <p className="card-text">
                    سلام من امیرمحمد حفار هستم کارشناسی ارشد رشته برنامه ریزی
                    شهری ما اومدیم تا با کمک شما تغییری در ساختار آموزشی و
                    همچنین محیطی برای درآمدزایی شما ایجاد کنیم
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3  m-2 " style={{ float: "right" }}>
              <div className="card mb-2 shadow team-card  border-0">
                <img
                  className="card-img-top"
                  src={kohjaniImg}
                  width="500"
                  height="200"
                  alt="Card image cap"
                />
                <div className="card-body bg-skillas-pink text-light  rounded-bottom">
                  <h4 className="card-title p-text">امیر محمد کوهجانی</h4>
                  <hr/>
                  <p className="card-text ">
                    فارق التحصیل رشته فناوری اطلاعات عاشق برنامه نویسی و علاق
                    مند به الکترونیک. برنامه نویس و مدیر بخش آی تی گروه
                    اسکیلاکس.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
