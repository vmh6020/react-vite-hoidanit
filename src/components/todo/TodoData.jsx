// import PropTypes from 'prop-types';

const TodoData = (props) => {
  const { name, age, data, todoList } = props;

  const listItems = todoList.map(todo =>
    <li key={todo.id}>{todo.name}</li>
  )
  return (
    <div className="todo-data">
      <div>My name is {name}</div>
      <div>My age is {age}</div>
      <div>My data is {JSON.stringify(data)}</div>
      <ul>
        {todoList.map((todo, index) => {
          console.log(index);
            return (
              <div className="todo-item" key={todo.id}>
                <div >{todo.name}</div>
                <button>Delete</button>
              </div>
            )
          })
        }
      </ul>
    </div>
  );
};

export default TodoData;
