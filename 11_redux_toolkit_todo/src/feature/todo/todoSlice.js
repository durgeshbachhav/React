// ek hi method se slice ban jati hai but we use two reason
// nanoid => it is method for generate unique id



import { createSlice, nanoid } from "@reduxjs/toolkit";

// iniatial state

const initialState = {
     todos: [{ id: 1, text: "hello world!" }]
}


// let create slice (almost ek reducer ka bada version hai )(reducer ek functionality hai)

// createSlice

export const todoSlice = createSlice({
     name: "todo",
     initialState,
     reducers: {//
          // isme aathe hai properties and functions
          addTodo: (state, action) => {
               // action se hume todo milega
               const todo = {
                    id: nanoid(),
                    // input ka text kaise access karoge text:"hello world"
                    // look below
                    text: action.payload
                    // payload ek object hai
               }
               // par ye todo state mein toh gaya nhi toh is state ko update toh karna padega
               state.todos.push(todo);
               // todos ko  initial state mein store kiya hai upper
          },//isme hume state, action milega aur iska access humesha hi rahega, id hume action me se milti hai

          // action ke under hum jo bhi data pass ho raha hai woh milta hai
          // state ke under data ki current state milti hai
          // 
          removeTodo: (state, action) => {
               state.todos = state.todos.filter((todo) => todo.id !== action.payload)

          },
     }
})
// functionality ko export karo kyunki ye component mein kaam aayenge
export const { addTodo, removeTodo } = todoSlice.actions;
// ye store to akela hai 

export default todoSlice.reducer