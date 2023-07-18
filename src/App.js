import React, { useState, Fragment, useCallback } from "react";
import UserEntry from "./components/UserEntry";
import { v4 } from "uuid";

const App = () => {
  const [users, setUsers] = useState([
    {
      id: v4(),
      Name: "Bhaskar",
      College: "NAU",
    },
    {
      id: v4(),
      Name: "Jaadhu",
      College: "NAU",
    },
    {
      id: v4(),
      Name: "Buffalo",
      College: "NAU",
    },
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    let { name, college } = e.target.elements;
    setUsers([
      ...users,
      {
        id: v4(),
        Name: name.value,
        College: college.value,
      },
    ]);
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

  const onDelete = (userName) => {
    setUsers(users.filter((_user) => _user.Name !== userName));

    console.log(users);
  };

  const handlePropertyEdit = (propertyName, userID, value) => {
    let editedUser = users.filter((_user) => _user.id === userID)[0];

    editedUser[propertyName] = value;

    setUsers([...users]);
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
