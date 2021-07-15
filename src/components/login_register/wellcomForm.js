import React,{useState} from "react";

import './assest/style_wellcome.css'

export function WellcomForm(props) {
  const [name,setName]=useState(props.name)
  return (
    <div>
      <form className="form_wellcome">
        <img
          className="mb-4 mt-5  anim-fadeOut_center_infinite"
          src="./img/logo.png"
          alt=""
          width="100%"
          height="100%"
        />
        <div className="">
        <h1 className="h1 mb-3 font-weight-normal ">{name} عزیز</h1>
        <h3 className="h3 mb-3 font-weight-normal ">
          خیلی خوش حالیم که در همایش ما ثبت نام کردی مکان و زمان همایش رو
          براتون پیام میکنیم
        </h3>
        <h3 className="h3 mb-3 font-weight-normal ">به امید دیدار گرمتون</h3>
      </div>
      </form>

      
    </div>
  );
}
