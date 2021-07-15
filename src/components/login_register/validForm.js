import React,{useState} from 'react';


export function ValidForm(props) {
    const [numberValid,setNumberValid] = useState({});
    const [errors,setErrors] = useState({});
  /*--------------------------------- */
  const submitHandler = (event) => {
    event.preventDefault();
    if (formDataIsValid()) {
      props.onUser(numberValid);
      setErrors({})
      setErrors({});
    } else {
      console.log(errors);
    }
  };
    /*--------------------------------- */

    const formDataIsValid = () => {
        const errors = {};
        if (!numberValid) errors.numberValid = "number is requierd";
        setErrors({errors});
        return !(errors.email || errors.password);
      };
        /*--------------------------------- */

  const changeHandler = (event) => {
    console.log(event.target.value);
    // const formData = { [event.target.name]: event.target.value };
    // setNumberValid({ ...numberValid, ...formData });
  };

    return (
        <form className="form-signin" onSubmit={submitHandler}>
        <img
          className="mb-4 mt-5"
          src="./img/logo.png"
          alt=""
          width="100%"
          height="100%"
        />
        <div className="border-bt">
          <h1 className="h3 mb-3 font-weight-normal text-skillas-secondary ">تایید هویت!</h1>
        </div>
        <div className="mt-2">
          <input
            type="number"
            id="inputValidNumber"
            name="numberValid"
            onChange={(e)=>setNumberValid({...numberValid,numberValid:e.target.value})}
            className="form-control"
            value={numberValid.numberValid|| ""}
            placeholder="شماره احراز هویت را وارد کنید !"
            required
            
          />
  
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            اهراز هویت
          </button>
        </div>
      </form>
    )
}