import { USER_LOGINED, USER_LOGOUT,SIDEBARE_TOGGLE } from "./actions";
export function userReducer(state = [], action) {
  switch (action.type) {
    case USER_LOGINED:
      {
        return [...state, action.payload]
      }
     
    case USER_LOGOUT:
      {
        return state.filter((item) => item.id !== action.payload.id);
      }
   

    default:
      return state;
  }
}

export function modeReducer(state=[],action) {
  switch (action.type){
    case SIDEBARE_TOGGLE :{
      return [action.payload]
    }
  }
}
