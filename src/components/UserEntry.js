import { memo, useContext, useState } from "react";
import { UserStateReducerContext } from "../context/context";

const UserEntry = (props) => {
  let { id, Name, College, deleteUser, editProperty } = props;

  const [editing, setEditing] = useState(false);

  const dispatch = useContext(UserStateReducerContext);

  // console.log("UserEntry rendered for", Name);

  return (
    <div>
      {editing ? (
        <input
          type="text"
          value={Name}
          onChange={(event) =>
            dispatch({
              type: "edit",
              payload: {
                propertyName: "Name",
                userID: id,
                value: event.target.value,
              },
            })
          }
          // onChange={(event) => editProperty("Name", id, event.target.value)}
        />
      ) : (
        <span>{`${Name}`} </span>
      )}
      <span>{`-`}</span>
      {editing ? (
        <input
          type="text"
          value={College}
          onChange={(event) =>
            dispatch({
              type: "edit",
              payload: {
                propertyName: "College",
                userID: id,
                value: event.target.value,
              },
            })
          }
          // onChange={(event) => editProperty("College", id, event.target.value)}
        />
      ) : (
        <span>{`${College}`} </span>
      )}

      <button onClick={() => setEditing(!editing)}>
        {editing ? `save` : `edit`}
      </button>
      {editing === false && (
        <button onClick={() => deleteUser(id)}>{`delete`}</button>
      )}
    </div>
  );
};

export default memo(UserEntry);
