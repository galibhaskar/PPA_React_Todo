import { createContext, useReducer } from "react";
import {
  userStateReducer,
  initialUserState,
} from "../reducers/UserStateReducer";

const UserStateContext = createContext(null);

const UserStateReducerContext = createContext(null);

const UserProvider = ({ children }) => {
  const [users, dispatch] = useReducer(userStateReducer, initialUserState);

  return (
    <UserStateContext.Provider value={users}>
      <UserStateReducerContext.Provider value={dispatch}>
        {children}
      </UserStateReducerContext.Provider>
    </UserStateContext.Provider>
  );
};

export { UserStateContext, UserStateReducerContext, UserProvider };
