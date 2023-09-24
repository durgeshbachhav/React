// let make store
// you need to configureStore from redux-toolkit (it is from core redux)


import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../feature/todo/todoSlice'


// for use this store we need to store this into store  aur ye ek object hi leta hai
export const store = configureStore({
     // ab hum ise reducer bhi keh sakte hai reducer: todoReducer
     reducer: todoSlice,
})

//ab mein kisi bhi component mein store ka access le sakta hoon

