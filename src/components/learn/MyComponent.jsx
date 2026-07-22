import "./style.css";
const MyComponent = () => {
  const myName = "hoang";
  const numb = 10;
  const boo = true;
  const numbers = [1, 2, 3, 4];
  const student = {
    name: "hoang",
    age: 20,
  };
  return (
    <>
      <div class="name">Kevin & KOL update</div>
      <div>{JSON.stringify(numb)} KOL update</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        Kevin
      </div>
    </>
  );
};

export default MyComponent;
