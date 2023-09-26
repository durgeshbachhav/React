import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div>
      <h1>redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
