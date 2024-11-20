import { configureStore } from "@reduxjs/toolkit";

import inputFieldReducer from "../features/inputfields/inputfieldsSlice";
import loginAuthReducer from "../features/loginauth/loginauthSlice";

export const store = configureStore({
  reducer: {
    inputField: inputFieldReducer,
    loginAuth: loginAuthReducer,
  },
});
