import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("")

  const { addNewTodo, setTodoName} = props;

  const handleClickMe = () => {
    console.log(`>>> handle click button, print valueInput: ${valueInput}`)
    // setTodoName(valueInput);
    addNewTodo(valueInput);
  }

  const handleOnChange = (name) => {
    console.log(`>>>> handleOnChange set valueInput to ${name}`);
    setValueInput(name);
  }

  return (
    <div className="todo-new">
      <input type="text"
      onChange={() => handleOnChange(event.target.value)}/>
      <button
      style={{cursor:"pointer"}}
      onClick={handleClickMe}>Add</button>
      <div>
        My text input is = {valueInput}
      </div>
    </div>
  );
};

export default TodoNew;
