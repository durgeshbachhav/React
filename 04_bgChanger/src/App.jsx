import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  // const [color, setColor] = useState("grey");
  const [color, setColor] = useState(localStorage.getItem("backgroundColor") || "grey");

  // useEffect to save the color to localStorage whenever it changes.
  useEffect(() => {
    localStorage.setItem("backgroundColor", color);
  }, [color]);
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
        <h2 className="font-bold text-4xl grid place-content-center py-10">click on btn and change backgroundColor</h2>
      <div className="fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded  cursor-pointer">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={()=>setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={()=>setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={()=>setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}
            onClick={()=>setColor("violet")}
          >
            Violet
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={()=>setColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={()=>setColor("yellow")}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
