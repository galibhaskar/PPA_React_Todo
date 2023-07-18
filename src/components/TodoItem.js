const TodoItem = (props) => {
  let { id, title, status, deleteTodo, updateTodo } = props;

  return (
    <div>
      <span>{`${title}-${status}`}</span>
      {/* <button onClick={() => updateTodo(id, )}>{`edit`}</button> */}
      <button onClick={() => deleteTodo(id)}>{`delete`}</button>
    </div>
  );
};

export default TodoItem;
