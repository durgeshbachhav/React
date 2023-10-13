
import MovieReducer from './movies/movieSlice'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
     reducer:{
          movies: MovieReducer
     }

})
export default store;
