import React, { useState, useEffect } from "react";

export function TalentRegisterForm(props) {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState({});

  /*------------------------------------------------ */
  const submitHandler = (event) => {
    event.preventDefault();
    if (formDataIsValid()) {
      props.onUser(user);
      // console.log(user);
      setUser({});
      setErrors({});
    }
    //else {
    //   console.log(errors);
    //   if(errors.matchPassword)
    //    alert('کلمه عبور یکسان نیست!');
    // }
  };
  /*------------------------------------------------ */
  // useEffect(()=>{
  //   console.log(errors);
  // },[errors])
  /*------------------------------------------------ */

  const changeHandler = (event) => {
    const formData = { [event.target.name]: event.target.value };
    setUser({ ...user, ...formData });
    // setState({ ...state, user: { ...state.user, ...formData } });
  };
  /*------------------------------------------------ */

  const formDataIsValid = () => {
    const errors = {};
    // if (!user.nationalCode) errors.nationalCode = "nationalCode is requierd";
    if (!user.password) errors.msg = "password is requierd";
    if (!user.rePassword) errors.msg = "repassword is requierd";
    if (user.password !== user.rePassword)
      errors.msg = "passwords is not match";
    setErrors(errors);
    if (
      errors.msg
    )
      return false;
    else return true;
  };
  /*------------------------------------------------ */
  const checkboxChecked = (event) => {
    let checked = event.target.checked;
    setUser({ ...user, rememberMe: checked });
    // setState({ ...state, user: { ...state.user, rememberMe: checked } });
  };
  /*------------------------------------------------ */

  return (
    <div>
      <form className="form-signin" onSubmit={submitHandler}>
        <img
          className="mb-1"
          src="./img/logo.png"
          alt=""
          width="100%"
          height="100%"
        />
        <div className="border-bt">
          <h1 className="h4 mb-3 font-weight-bold text-skillas-secondary">
            همایش استعدادیابی <span className="text-skillas-pink">اسکیلاس</span>
          </h1>
          <h2 className="h3 mb-3 font-weight-normal text-skillas-secondary ">ثبت نام کنید!</h2>
        </div>
        <div className="mt-2">
         
          {/* <input
            type="tel"
            id="inputPhone"
            value={user.phone || ""}
            name="phone"
            onChange={changeHandler}
            className="form-control mb-1"
            placeholder="شماره تلفن "
            required
          /> */}
          <input
            type="email"
            id="inputPhone"
            value={user.email || ""}
            name="email"
            onChange={changeHandler}
            className="form-control mb-1"
            placeholder="ایمیل خود را وارد کنید"
            required
          />

          <input
            type="password"
            id="inputPassword"
            value={user.password || ""}
            name="password"
            onChange={changeHandler}
            className="form-control mb-1"
            placeholder="رمزعبور"
            required
          />
          <input
            type="password"
            name="rePassword"
            id="inputRePassword"
            value={user.rePassword || ""}
            className="form-control mb-1"
            onChange={changeHandler}
            placeholder="تکرار رمز عبور"
            required
          />
          <div className="checkbox mb-3">
            <label className="text-skillas-secondary">
              <input
                type="checkbox"
                value="remember-me"
                onChange={checkboxChecked}
              />{" "}
              به خاطر بسپار
            </label>
          </div>
          <button className="btn btn-lg btn-primary  btn-block" type="submit">
            ورود
          </button>
        </div>
      </form>
    </div>
  );
}
