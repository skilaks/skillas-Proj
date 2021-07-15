import React, { useState } from "react";

export function LoginButton(props) {
  return (
    <button className="btn " name="login" onClick={props.onClick}>
      میخوام وارد بشم!
    </button>
  );
}

export function RegisterButton(props) {
    return (
        <button
        className="btn  bg-skillas-pink"
        name="register"
        onClick={props.onClick}
      >
        میخوام ثبت نام کنم
      </button>
    )
}
