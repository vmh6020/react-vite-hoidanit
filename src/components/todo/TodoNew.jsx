import { useState } from 'react';

const TodoNew = props => {
  const [valueInput, setValueInput] = useState('');

  const { addNewTodo } = props;

  const handleClickMe = () => {
    addNewTodo(valueInput);
    setValueInput('');
  };

  const handleOnChange = name => {
    setValueInput(name);
  };

  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={event => handleOnChange(event.target.value)}
        value={valueInput}
      />
      <button
        type="button"
        style={{ cursor: 'pointer' }}
        onClick={handleClickMe}
      >
        Add
      </button>
      <div>My text input is = {valueInput}</div>
    </div>
  );
};

export default TodoNew;
