import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import reactLogo from "./assets/react.svg";

const App = () => {
  const name = "Kevin";
  const age = 15;
  const data = {
    address: "Hanoi",
    country: "Vietnam",
  };
  const addNewTodo = (name) => {
    alert(`Hello ${name}`)
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        <TodoData
          name={name}
          age={age}
          data={data}
        />
        <div className="todo-image">
          <img src={reactLogo} className="logo" alt="React Logo" />
        </div>
      </div>
    </>
  );
};

export default App;
