import { UserService } from "../";
import { PageService } from "../../../pages";

export function ConfrimRegistion(userData, callback) {
  UserService.confrimRegister(userData).then((res) => {
    if (userData.rememberMe) PageService.saveUserDataLocal(res.data);
    else PageService.saveUserDataSession(res.data);
    callback(null, res.data);
  })
 .catch((err) => {
     callback(err)
 })
}
