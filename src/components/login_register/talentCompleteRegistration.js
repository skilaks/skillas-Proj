import React, { useState, useEffect } from "react";
import { StudentForm, TeacherForm } from "./";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import _ from "lodash";

export function TalentCompleteRegistration(props) {
  const [user, setUser] = useState({
    name: "",
    family: "",
    type: "teacher",
    age: "",
  });

  /*----------------------------------------*/
  const [errors, setErrors] = useState({});
  const [switchType, setSwitchType] = useState(false);
  const [isTeacher, setIsTeacher] = useState(true);
  const [isStudent, setIsStudent] = useState(false);
  /*------------------------------------*/
  useEffect(() => {
    console.log(switchType);
    if (switchType) {
      setUser({ ...user, type: "teacher" });
    } else {
      setUser({ ...user, type: "student" });
    }
  }, [switchType]);
  /*------------------------------------------------ */
  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(user);
    props.onUser(user);
    setUser({
      name: "",
      family: "",
      type: "",
      discription: "",
    });
    // setIsStudent(false);
    setIsTeacher(true);
    setErrors({});
  };
  /*------------------------------------------------ */
  const teacherFormDataHandler = (data) => {
    setUser({
      ...user,
      discription: data.discription,
      course: data.Course,
      education: data.Education,
      typeOfTeachings: data.typeOfTeachings,
      workExperienc:data.workExperienc
    });
    // console.log(data)
  };
  /*------------------------------------------------ */

  const discriptionHandler = (disc) => {
    setUser({ ...user, discription: disc });
  };

  /*------------------------------------------------ */
  const changeHandler = (event) => {
    const formData = { [event.target.name]: event.target.value };
    setUser({ ...user, ...formData });
  };

  /*------------------------------------------------ */

  const switchHandler = (event) => {
    setSwitchType(event);
  };

  /*------------------------------------------------*/
  return (
    <div>
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
        <div className="mt-2  col">
          <div className="border-bt">
            <div className="row ">
              <div className=" col-md-6">
                <input
                  type="text"
                  id="inputName"
                  value={user.name || ""}
                  onChange={changeHandler}
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
                  value={user.family || ""}
                  onChange={changeHandler}
                  name="family"
                  className="form-control"
                  placeholder="نام خانوادگی"
                  required
                />
              </div>
            </div>
            <div className="row justify-content-center mb-2 mt-2">
              <div className="col-6 ">
                <input
                  type="number"
                  className="form-control"
                  placeholder="سن"
                  name="age"
                  min="5"
                  max="80"
                  value={user.age || ""}
                  onChange={(e) => setUser({ ...user, age: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="col-12 mt-2 mb-2">
            <BootstrapSwitchButton
              checked={switchType}
              onlabel="استاد"
              onstyle="info"
              offlabel="دانشجو"
              offstyle="success"
              style="w-50 "
              onChange={switchHandler}
            />
          </div>
          <div className="d-flex justify-content-center mb-2">
            {!switchType && <StudentForm discription={discriptionHandler} />}
            {switchType && <TeacherForm data={teacherFormDataHandler} />}
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            تکمیل فرایند
          </button>
        </div>
      </form>
    </div>
  );
}
