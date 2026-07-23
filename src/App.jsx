import './components/todo/todo.css';
import { useState } from 'react';
import TodoNew from './components/todo/TodoNew';
import TodoData from './components/todo/TodoData';
import reactLogo from './assets/react.svg';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'Learning React' },
    { id: 2, name: 'Learning HTML' },
  ]);
  const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const addNewTodo = name => {
    const newTodo = {
      id: getRandomInt(1, 10000000000),
      name,
    };
    setTodoList([...todoList, newTodo]);
  };
  const setTodoName = todo => {
    const newTodoList = todoList.map(item => {
      if (item.id === 1) {
        return { ...item, name: todo };
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
  };
  const deleteTodoById = id => {
    const newTodoList = todoList.filter(value => value.id !== id);
    setTodoList(newTodoList);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
        setTodoName={todo => setTodoName(todo)}
      />
      {/* {todoList.length > 0 &&
          <TodoData
            todoList={todoList}
          />
        }
        {todoList.length === 0 &&
          <div className="todo-image">
            <img src={reactLogo} className="logo" alt="React Logo" />
          </div>
        } */}
      {todoList.length > 0 ? (
        <TodoData todoList={todoList} deleteTodoById={deleteTodoById} />
      ) : (
        <div className="todo-image">
          <img src={reactLogo} className="logo" alt="React Logo" />
        </div>
      )}
    </div>
  );
};

export default App;
