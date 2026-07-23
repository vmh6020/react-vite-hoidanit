import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import reactLogo from "./assets/react.svg";
import { useState } from "react";

const App = () => {
  const name = "Kevin";
  const age = 15;
  const data = {
    address: "Hanoi",
    country: "Vietnam",
  };
  const [todoList, setTodoList] = useState([
    {id : 1, name: "Learning React"},
    {id : 2, name: "Learning HTML"},
  ])
  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const addNewTodo = (name) => {
    const newTodo = {
      id: getRandomInt(1, 10000000000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }
  const setTodoName = (todo) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === 1) {
        return {...item, name: todo}
      }
      return item;
    });
    // for (let aTodo of newTodoList) {
    //   if (aTodo.id === 1) {
    //     aTodo.name = todo;
    //     break;
    //   }
    // }
    setTodoList(newTodoList);
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
          setTodoName={(todo) => setTodoName(todo)}
        />
        <TodoData
          name={name}
          age={age}
          data={data}
          todoList={todoList}
        />
        <div className="todo-image">
          <img src={reactLogo} className="logo" alt="React Logo" />
        </div>
      </div>
    </>
  );
};

export default App;
