import React, { useState } from "react";

export function RegisterForm(props) {
  const [state, setState] = useState({ user: {}, error: {} });
  /*------------------------------------------------ */
  const submitHandler = (event) => {
    event.preventDefault();
    if (formDataIsValid()) {
      props.onUser(state.user);
      setState({ user: {}, errors: {} });
    } else {
      console.log(state.errors);
      if(state.errors.matchPassword)
       alert('کلمه عبور یکسان نیست!');
    }
  };
  /*------------------------------------------------ */

  const formDataIsValid = () => {
    const errors = {};
    if (!state.user.email) errors.email = "email is requierd";
    if (!state.user.password) errors.password = "password is requierd";
    if (!state.user.rePassword) errors.rePassword = "repassword is requierd";
    if (state.user.password !== state.user.rePassword)
      errors.matchPassword = "passwords is not match";
    setState({ ...state, errors });
    if(
      errors.email ||
      errors.password ||
      errors.matchPassword ||
      errors.rePassword
    )
    return false;
    else return true;
  };
  /*------------------------------------------------ */

  const changeHandler = (event) => {
    console.log(event.target.name);
    const formData = { [event.target.name]: event.target.value };
    setState({ ...state, user: { ...state.user, ...formData } });
  };
  /*--------------------------------------*/
  const checkboxChecked = (event) => {
   let checked = event.target.checked;
   setState({ ...state,user:{...state.user,rememberMe:checked}})
  }
  /*------------------------------------------------ */

  return (
    <form className="form-signin" onSubmit={submitHandler}>
      <img
        className="mb-4"
        src="./img/logo.png"
        alt=""
        width="100%"
        height="100%"
      />
      <div className="border-bt">
        <h1 className="h3 mb-3 font-weight-normal ">ثبت نام کنید!</h1>
      </div>
      <div className="mt-2">
        <input
          type="email"
          id="inputEmail"
          onChange={changeHandler}
          value={state.user.email || ""}
          name="email"
          className="form-control"
          placeholder="آدرس ایمیل"
          required
        />
        <input
          type="tel"
          id="inputPhone"
          value={state.user.phone || ""}
          name="phone"
          onChange={changeHandler}
          className="form-control"
          placeholder="شماره تلفن "
          required
        />

        <input
          type="password"
          id="inputPassword"
          value={state.user.password || ""}
          name="password"
          onChange={changeHandler}
          className="form-control"
          placeholder="رمزعبور"
          required
        />
        <input
          type="password"
          name="rePassword"
          id="inputRePassword"
          value={state.user.rePassword || ""}
          className="form-control"
          onChange={changeHandler}
          placeholder="تکرار رمز عبور"
          required
        />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" onChange={checkboxChecked}  /> به خاطر بسپار
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          ورود
        </button>
      </div>
    </form>
  );
}
