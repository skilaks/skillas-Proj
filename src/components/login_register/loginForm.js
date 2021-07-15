import React, { useState } from "react";
import { useFormik, Formik,Form,Field } from "formik";
import * as Yup from "yup";
const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("required"),
});

export function LoginForm(props) {
  const [state, setState] = useState({ user: {}, errors: {} });
  /*-*******************************************************-*/
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema
  //   // validate,

  // });
  /*--------------------------------- */
  const submitHandler = (event) => {
    event.preventDefault();
    if (formDataIsValid()) {
      props.onUser(state.user);
      setState({ user: {}, errors: {} });
    } else {
      console.log(state.errors);
    }
  };
  /*--------------------------------- */

  const formDataIsValid = () => {
    const errors = {};
    if (!state.user.email) errors.email = "email is requierd";
    if (!state.user.password) errors.password = "password is requierd";
    setState({ ...state, errors });
    return !(errors.email || errors.password);
  };
  /*--------------------------------- */

  const changeHandler = (event) => {
    console.log(event.target.name);
    const formData = { [event.target.name]: event.target.value };
    setState({ ...state, user: { ...state.user, ...formData } });
  };
  /*--------------------------------- */
  // console.log('Form errors',formik.errors)
  /*--------------------------------- */
  const onSubmit = (values) => {
    props.onUser(values)
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form-signin" >
        <img
          className="mb-4"
          src="./img/logo.png"
          alt=""
          width="100%"
          height="120%"
        />
        <div className="border-bt">
          <h1 className="h3 mb-3 font-weight-normal ">وارد شوید !</h1>
        </div>
        <div className="mt-2">
          <Field
            type="emial"
            id="inputEmail"
            name="email"
            // onChange={changeHandler}

            className="form-control mb-1"
            // value={state.user.email || ""}
            // value={formik.values.email || ""}
            // onChange={formik.handleChange}
            // {...formik.getFieldProps("email")}
            placeholder="ایمیل خود را وارد کنید"
            // required
            autoFocus
          />

          <Field
            type="password"
            id="inputPassword"
            name="password"
            // onChange={changeHandler}
            // value={state.user.password || ""}
            // onChange={formik.handleChange}
            // value={formik.values.password || ""}
            // {...formik.getFieldProps("password")}
            className="form-control"
            placeholder="رمزعبور"
            // required
          />
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> به خاطر بسپار
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            ورود
          </button>
        </div>
      </Form>
    </Formik>
  );
}
