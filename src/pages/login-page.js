import React, { useState } from "react";
import {
  LoginForm,
  TalentRegisterForm,
  TalentCompleteRegistration,
  ValidForm,
  Spinner,
  Login,
  Register,
  Validate,
  ConfrimRegistion,
  LoginButton,
  RegisterButton,
  WellcomForm,
} from "../components/login_register";
import { userLogined, userStore } from "../components/redux";
/*-----------------------------------------------------------------------------------------------*/
export function LoginPage() {
  const [pageMode, setPageMode] = useState({
    login: false,
    register: true,
    validate: false,
    loading: false,
    confrimRegistering: false,
    wellCome : false,
  });
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  /*------------------------------------------*/
  async function submitUser(Data) {
    if (pageMode.login) {
      Login(Data);
    } else if (pageMode.register) {
      setLoading(true);
      setUser(Data);
      console.log(Data);
      Register(Data, (err) => {
        if (err) {
          alert(err.msg);
          setLoading(false);
        } else {
          setLoading(false);
          setPageMode({ ...pageMode, validate: true, register: false });
        }
      });
    } else if (pageMode.validate) {
      setLoading(true);
      const data = { ...user, numberValid: Data.numberValid };
      console.log(data);
      Validate(data, (err) => {
        if (err) {
          console.log(err);
          setLoading(false);
        } else {
          setLoading(false);
          
          setPageMode({
            ...pageMode,
            validate: false,
    
            confrimRegistering: true,
          });
        }
      });
    } else if (pageMode.confrimRegistering) {
      setLoading(true);
      console.log('confrim')
      const userData = { ...user, Data };
      setUser(userData)
      console.log(userData);
      ConfrimRegistion(userData, (err, data) => {
        if (err) console.log(err);
        else {
          handelAddUserToStore(data);
          console.log(Data);
          setLoading(false);
          setPageMode({wellCome:true})
        }
      });
    }
  }
  /*----------------------------------*/

  const handelAddUserToStore = (user) => {
    userStore.dispatch(userLogined(user));
  };

  /*----------------------------------*/
  return (
    <div className="body-sighin mt-5">
      {pageMode.confrimRegistering && (
        <TalentCompleteRegistration onUser={submitUser.bind(this)} />
      )}
      {loading && <Spinner />}
      <div className="text-center">
        {pageMode.login && <LoginForm onUser={submitUser.bind(this)} />}
        {pageMode.register && (
          <TalentRegisterForm onUser={submitUser.bind(this)} />
        )}
        {pageMode.validate && <ValidForm onUser={submitUser.bind(this)} />}
        {pageMode.wellCome && <WellcomForm name={user.Data.name}/>}
      </div>

      <div>
        <div>
          {pageMode.login && (
            <RegisterButton onClick={(e) => setPageMode({ register: true })} />
          )}

          {pageMode.register && (
            <LoginButton onClick={(e) => setPageMode({ login: true })} />
          )}
          
        </div>
      </div>
    </div>
  );
}
