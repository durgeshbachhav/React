import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    username:"durgesh",
    email:"abc@gmail.com"
  }
  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className="bg-green-400 text-black rounded p-6">tailwind test</h1>
      <Card username="durgesh" passObj={newArr} btnText="click Me"/>
      <Card username="nikhil" passObj={myObj} />
    </>
  );
}

export default App;
