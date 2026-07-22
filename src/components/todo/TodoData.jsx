const TodoData = (props) => {
  //   console.log(props);
  // object destructuring : create an object same structure with props object to get all value
  // props is object
  const { name, age, data } = props;
  return (
    <div className="todo-data">
      <div>My name is {props.name}</div>
      <div>My age is {age}</div>
      <div>My data is {JSON.stringify(data)}</div>
      <div>Learning React</div>
      <div>Learning HTML</div>
    </div>
  );
};
export default TodoData;
