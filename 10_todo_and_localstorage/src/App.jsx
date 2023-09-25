
import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos,setTodos]=useState([])

  // values and function name should be same otherwise functionality usme nhi jayegi
  const addTodo=(todo)=>{
    setTodos((oldtodo)=>[{id:Date.now(),...todo}, ...oldtodo])
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=>{
     return  prevTodo.id === id ? todo: prevTodo
    }))

    // it also work
    // prev.map((eachVal)=>{
    //   if(eachVal.id === id){
    //     todo
    //   }
    // })
  }

  const deleteTodo =(id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }

  const toggleComplete =(id)=>{
    // settodos ek array hai to previous state ka access chahiye
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    //jab tak aap sirf react ke project (frontend) karte ho to localstorage direct access kar sakte ho
    // if you have backend then server se lena padega
    // localStorage.getItem('todos') //this data is in string form and i need json
    // let make this into json
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])
  
  useEffect(()=>{
    // stringify convert all data into string
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">10D05 WEBApp</h1>
                    <div className="mb-4">
                       <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((todo)=> (
                            <div key={todo.id} className="w-full">
                              <TodoItem todo={todo}/>
                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
    </TodoProvider>
  );
}

export default App;
