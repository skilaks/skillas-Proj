import { UserService } from "../";
import { PageService } from "../../../pages";
export function Login(userData) {
  UserService.loginUser(userData)
    .then((res) => {
      if (userData.rememberMe) PageService.saveUserDataLocal(res.data);
      else PageService.saveUserDataSession(res.data);
      console.log(res.data);
      window.location.href = "/dashbord";
    })
    .catch((err) => {
      console.log(err);
    });
}
