import React, { useState } from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
export function ConfrimRegistringForm(props) {
  const [state, setState] = useState({
    flags: { teacher: false, student: true },
    user: { name: "", family: "",type:"student" },
  });
  //*----------------------------------------------
  const options = [
    {label: "فناوری اطلاعات",
  value: "فناوری اطلاعات"},
    {label: "شهر سازی",
  value: "شهر سازی"},
    {label: "معماری",
  value: "معماری"},
    {label: "...",
  value: "..."},
  ]
  /*------------------------------------------------ */
  const submitHandler = (event) => {
    event.preventDefault();
    props.onUser(state.user);
   
    setState({
      user: { name: "", family: "",type:"",skill:"",type:"student"},
      flags: { teacher: false, student: true },
      errors: {},
    });
  };

  /*------------------------------------------------ */
  const setFlags = ({ flag }) => {
    let flags = {};
    if (flag === "student") flags = { teacher: false, student: true };
    else if (flag == "teacher") flags = { teacher: true, student: false };
    setState({ ...state, flags: flags });
  };
  /*------------------------------------------------ */

  const switchHandler = (event) => {
    let flag = "";
    {
      event ? (flag = "teacher") : (flag = "student");
    }
     setState({ ...state, user: { ...state.user,type: flag  }});
  };
  /*------------------------------------------------ */

  const changeHandler = (event) => {
    const formData = { [event.target.name]: event.target.value };
    setState({ ...state, user: { ...state.user, ...formData } });
  };
  /*------------------------------------------------ */

  const selectHandler =async (event) => {
      
     const skill =  event.target.value;
     await setState({ ...state, user: { ...state.user,skill: skill  }});
    //  console.log(state)
  };

  /*------------------------------------------------ */

  const StudentForm = () => {
    return (
      <div className="col-md-12 ">
        <div className="input-group mb-3">
          {/* <select className="custom-select" id="inputGroupSelect" onChange={selectHandler}>
            <option value="0" >فناوری اطلاعات</option>
            <option value="1">شهر سازی</option>
            <option value="2">معماری</option>
            <option value="3">...غیره</option>
          </select>*/}
          <select className="custom-select" id="inputGroupSelect"  onChange={selectHandler}>
            {props.options.student.map((option)=>
              <option value={option.value} selected={option.selected||false}>{option.label}</option>)
            }
          </select>
          <div className="input-group-prepend"> 
          
            <label className="input-group-text" htmlFor="inputGroupSelect">
            :  رشته 
            </label>
          </div>
        </div>
      </div>
    );
  };
  /*------------------------------------------------ */

  const TeacherForm = () => {
    return (
      <div className="col-md-12 ">
        <div className="input-group mb-3">
          {/* <select className="custom-select" id="inputGroupSelect">
            <option selected>ریاضی</option>
            <option value="1">زبان انگلیسی</option>
            <option value="2">برنامه نویسی</option>
            <option value="3">...غیره</option>
          </select> */}
          <select className="custom-select" id="inputGroupSelect"onChange={selectHandler}>
            {props.options.teacher.map((option)=>
            <option value={option.value} selected={option.selected||false} >{option.label}</option>)}
          </select>
          <div className="input-group-prepend">
            <label className="input-group-text" for="inputGroupSelect">
              : تخصص
            </label>
          </div>
        </div>
      </div>
    );
  };
  /*------------------------------------------------ */

  return (
    <form className="form-confrim" onSubmit={submitHandler}>
      <img
        className="mb-4"
        src="./img/logo.png"
        alt=""
        width="100%"
        height="100%"
      />
      <div className="border-bt">
        <h1 className="h3 mb-3 font-weight-normal ">
          لطفا برای تکمیل ثبت نام اطلاعات خود را وارد کنید!
        </h1>
      </div>
      <div className="mt-2 col">
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              id="inputName"
              value={state.user.name || ""}
              onChange={changeHandler}
              //   value={state.user.email || ""}
              name="name"
              className="form-control"
              placeholder="نام"
              required
            />
          </div>
          <div className="col-md-6 ">
            <input
              type="text"
              id="inputfamily"
              value={state.user.family || ""}
              onChange={changeHandler}
              //   value={state.user.email || ""}
              //   onChange={inputHandler}
              name="family"
              className="form-control"
              placeholder="نام خانوادگی"
              required
            />
          </div>
        </div>
        <div className="col-12 mt-2 mb-2">
          <BootstrapSwitchButton
            checked={false}
            onlabel="استاد"
            onstyle="info"
            offlabel="دانشجو"
            offstyle="success"
            style="w-50 "
            onChange={switchHandler}
          />
        </div>
        <div className="d-flex justify-content-center">
          {state.flags.student ? StudentForm() : TeacherForm()}
        </div>
        {/* <div className="col-md-12 d-flex justify-content-center">
          <div className="form-group">
            <label for="exampleFormControlFile1">لطفا یک تصویر برای خود انتخاب کنید:</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
        </div> */}

        <button className="btn btn-lg btn-primary btn-block" type="submit">
          تکمیل فرایند
        </button>
      </div>
    </form>
  );
}
