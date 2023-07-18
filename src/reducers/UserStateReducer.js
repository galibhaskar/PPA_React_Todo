import { v4 } from "uuid";

const initialUserState = [];

const UserStateReducer = (state, action) => {
  let { type, payload } = action;

  switch (type) {
    case "insert":
      return [
        ...state,
        {
          id: v4(),
          Name: payload.name,
          College: payload.college,
        },
      ];

    case "edit":
      let editedUser = state.filter((_user) => _user.id === payload.userID)[0];

      editedUser[payload.propertyName] = payload.value;

      return [...state];

    case "delete":
      return state.filter((_user) => _user.id !== payload.userID);

    default:
      return state;
  }
};

export { UserStateReducer, initialUserState };
