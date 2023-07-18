import { useState } from "react";
import { v4 } from "uuid";
import TodoItem from "./components/TodoItem.js";
import Timer from "./components/Timer.js";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();

    setTodos([
      ...todos,
      {
        id: v4(),
        title: event.target.elements.title.value,
        status: "Active",
      },
    ]);
  };

  const deleteTodo = (id) => {
    console.log(id);

    let todo_item = todos.filter((_todo) => _todo.id === id)[0];

    todo_item.status = "Deleted";

    console.log(todo_item);

    console.log(todos);

    setTodos([...todos]);

    // setTodos([...todos, ...todo_item]);
  };

  const updateTodo = (id, title) => {
    let todo_item = todos.filter((_todo) => _todo.id === id);

    todo_item.title = title;

    setTodos([...todos]);
  };

  const renderTodoList = () => {
    return todos.map((_todo) => (
      <TodoItem
        key={_todo.id}
        {..._todo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    ));
  };

  const renderTodoForm = () => {
    return (
      <form onSubmit={addTodo}>
        <label>{`Title`}</label>
        <input type="text" name={`title`} />
        <button>{`Add todo`}</button>
      </form>
    );
  };

  return (
    <div>
      {/* <Timer /> */}
      {renderTodoForm()}
      {renderTodoList()}
    </div>
  );
};

export default Todo;
