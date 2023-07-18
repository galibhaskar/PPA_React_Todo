import { memo, useState } from "react";

const UserEntry = (props) => {
  let { id, Name, College, deleteUser, editProperty } = props;

  const [editing, setEditing] = useState(false);

  // console.log("UserEntry rendered for", Name);

  return (
    <div>
      {editing ? (
        <input
          type="text"
          value={Name}
          onChange={(event) => editProperty("Name", id, event.target.value)}
        />
      ) : (
        <span>{`${Name}`} </span>
      )}
      <span>{`-`}</span>
      {editing ? (
        <input
          type="text"
          value={College}
          onChange={(event) => editProperty("College", id, event.target.value)}
        />
      ) : (
        <span>{`${College}`} </span>
      )}

      <button onClick={() => setEditing(!editing)}>
        {editing ? `save` : `edit`}
      </button>
      {editing === false && (
        <button onClick={() => deleteUser(Name)}>{`delete`}</button>
      )}
    </div>
  );
};

export default memo(UserEntry);
