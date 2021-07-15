export const USER_LOGINED = "[USER] USER_LOGINED";
export const USER_LOGOUT = "[USER] USER_LOGOUT";
export const SIDEBARE_TOGGLE = "SIDEBARE_TOGGLE";

export function userLogined(user) {
  return { type: USER_LOGINED, payload: user };
}
export function userLogout(user) {
  return { type: USER_LOGOUT, payload: user };
}

export function sidebarToggeled(toggled) {
  return { type:SIDEBARE_TOGGLE,payload:toggled };
}
