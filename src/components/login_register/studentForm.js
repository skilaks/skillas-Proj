import React, { useState,useEffect } from "react";

export function StudentForm(props) {
  var p = /^[\u0600-\u06FF\s]+$/;
  const [discription,setDiscription]=useState("")
  useEffect(()=>{
    props.discription(discription)
  },[discription])
  const changeHandler = (event)=>{

    
    const disc = event.target.value
    if(p.test(disc))
    setDiscription(disc)
  
  }
  return (
    <div>
      <label className="h5 font-weight-normal text-skillas-secondary" htmlFor='discription' >
      فرزند خوبم،میخوام در این قسمت برامون از آرزوهات بگی !
      </label>
      <textarea className="form-control textarea" value={discription||' '} name="disc" onChange={changeHandler}  id="discription" rows="3"/>
    </div>
  );
}
