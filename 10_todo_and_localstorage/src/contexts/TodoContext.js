import { createContext, useContext } from "react";

export const TodoContext = createContext({
     // properties
     todos: [
          {
               id: 1,
               todo: "todo msg",
               completed: false,
          }
     ],
     // functionaliy ke under defination nhi likte sirf name likte hai
     addTodo: () => { },
     updateTodo: (id, todo) => { },
     deleteTodo: (id) => { },
     toggleComplete: (id) => { }
})

export const useTodo = () => {
     // usecontext jab bhi use ho tab use context dena padata taki use pata chale ki hum kis baare mein baat kar rahe hai
     return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider