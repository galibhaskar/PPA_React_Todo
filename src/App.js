import React, { useState, Fragment, useCallback, useReducer } from "react";
import UserEntry from "./components/UserEntry";
import { v4 } from "uuid";
import {
  UserStateReducer,
  initialUserState,
} from "./reducers/UserStateReducer";

const App = () => {
  // const [users, setUsers] = useState([
  //   {
  //     id: v4(),
  //     Name: "Bhaskar",
  //     College: "NAU",
  //   },
  //   {
  //     id: v4(),
  //     Name: "Jaadhu",
  //     College: "NAU",
  //   },
  //   {
  //     id: v4(),
  //     Name: "Buffalo",
  //     College: "NAU",
  //   },
  // ]);

  const [users, dispatch] = useReducer(UserStateReducer, initialUserState);

  const onSubmit = (e) => {
    e.preventDefault();
    let { name, college } = e.target.elements;

    dispatch({
      type: "insert",
      payload: {
        name: name.value,
        college: college.value,
      },
    });
    // setUsers([...users]);
  };

  const getAddUserForm = () => {
    return (
      <form onSubmit={onSubmit}>
        <label>{`Name`}</label>
        <input type={`text`} name={`name`} />
        <label>{`College`}</label>
        <input type={`text`} name={`college`} />

        <button>{`Add`}</button>
      </form>
    );
  };

  const onDelete = (id) => {
    // setUsers(users.filter((_user) => _user.Name !== userName));

    // console.log(users);

    dispatch({
      type: "delete",
      payload: {
        userID: id,
      },
    });
  };

  const handlePropertyEdit = (propertyName, userID, value) => {
    // let editedUser = users.filter((_user) => _user.id === userID)[0];

    // editedUser[propertyName] = value;

    // setUsers([...users]);

    dispatch({
      type: "edit",
      payload: {
        propertyName: propertyName,
        userID: userID,
        value: value,
      },
    });
  };

  const renderUsersList = () => {
    return users.map((_user) => (
      <UserEntry
        key={_user.id}
        {..._user}
        deleteUser={onDelete}
        editProperty={handlePropertyEdit}
      />
    ));
  };

  return (
    <Fragment>
      {getAddUserForm()}
      {renderUsersList()}
    </Fragment>
  );
};

export default App;
