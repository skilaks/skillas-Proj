import { createStore } from "redux";
import { userReducer,modeReducer } from "./reducer";

export const userStore = createStore(userReducer);

export const  modeStore = createStore(modeReducer);
