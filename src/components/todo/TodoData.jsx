const TodoData = props => {
  const { todoList, deleteTodoById } = props;

  // const listItems = todoList.map((todo) => <li key={todo.id}>{todo.name}</li>);
  const handleDeleteItem = id => {
    deleteTodoById(id);
  };
  return (
    <div className="todo-data">
      {todoList.map(todo => (
        <div className="todo-item" key={todo.id}>
          <div>{todo.name}</div>
          <button
            type="button"
            style={{ cursor: 'pointer' }}
            onClick={() => handleDeleteItem(todo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoData;
