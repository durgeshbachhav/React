# synchronous action 

```jsx
const movietext = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${ApiKey}&s=${movietext}&type=movie`)
        .catch((error) => {
          console.log(error);
        });
        // console.log('response ', response);
        // reducer ke under jo action banaya hai use dispatch yaha se kar raha hai with response taki movies ka data store mein add ho jaye
      dispatch(addMovies(response.data));
    };

    fetchMovies();
  }, []);
```
## summery of this synchronous action
### movieApi ke alag function mein banake raki ha (baseurl) add kiya hai 
- This code is a React hook that, on component mount, makes an API call to the MovieDB API using our predefined `movieApi`

```
Iss callback ka kaam hai ek movie search query (`movietext`) ke based mein API se movies fetch karna. Jab component mount hota hai (`useEffect` ka use karke), `fetchMovies` naam ka ek async function call hota hai, jo `movieApi` ke through API request bhejkar movies ka data lekar aata hai.

Agar request mein koi error aata hai toh, woh error console mein print ho jata hai.

Agar request successful hoti hai, toh `response` variable mein aaye data ko ek reducer function (`addMovies`) ke through dispatch kiya jata hai. Isse Redux store mein movies ka data update hota hai.

Overall, yeh callback hai jo component ke mount hone par ek API request bhejkar movies ka data fetch karta hai aur usse Redux store mein store karta hai.
```

# code diff of sync and async action creator

```jsx
// Asynchronous Action Creator using thunk middleware
const fetchMovies = (movietext) => {
  return async (dispatch) => {
    try {
      const response = await movieApi.get(`?apikey=${ApiKey}&s=${movietext}&type=movie`);
      dispatch(addMovies(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

// Dispatching the Asynchronous Action
dispatch(fetchMovies("Harry Potter"));



// Synchronous Action Creator
const addMovie = (movie) => {
  return {
    type: "ADD_MOVIE",
    payload: movie,
  };
};

// Dispatching the Synchronous Action
dispatch(addMovie({ title: "Inception", year: 2010 }));

```
# entire code of synchronous action creator
```jsx
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
     movies:{},
};


export const movieSlice = createSlice({
     name:'movies',
     initialState,
     reducers:{
          // this is action 
          addMovies:(state,action)=>{
               state.movies = action.payload
          }
     }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state)=> state.movies.movies;
export default movieSlice.reducer;
```

# movieSlice.js

```jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
     movies: {},
};


export const movieSlice = createSlice({
     name: 'movies',
     initialState,
     reducers: {
          // this is action 
          addMovies: (state, action) => {
               state.movies = action.payload
          }
     }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
```

# synchronous action ko async karne ke baad ka code

### movieSlice.jsx
``` jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/movieApiKey";

// we will fetch all movies with the help of async thunk 
// we create fetchmovies async function for fetching data so we dont wont to fetch movies in home component and then dispatch synchronous action 
// to use code ko hum yaha leke aaye hai 
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
     const movietext = "Harry";
     const response = await movieApi
          .get(`?apikey=${ApiKey}&s=${movietext}&type=movie`);
     return response.data;

})
const initialState = {
     movies: {},
};


export const movieSlice = createSlice({
     name: 'movies',
     initialState,
     reducers: {
          // this is action 
          addMovies: (state, action) => {
               state.movies = action.payload
          }
     },
     extraReducers:{
          [fetchAsyncMovies.pending]:()=>{
               console.log('pending');
          },
          [fetchAsyncMovies.fulfilled]:(state, action)=>{
               console.log('fetch successfully');
               return {...state, movies:action.payload}
          },
          [fetchAsyncMovies.rejected]:()=>{
               console.log('rejected');
          }
     }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
```

### home component

```jsx
import React, { useEffect } from "react";
import MovieList from "../movieListing/MovieList";
import "./Home";
import { useDispatch } from "react-redux";
import {  fetchAsyncMovies } from "../../feature/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies())
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieList />
    </div>
  );
};

export default Home;


```

# error = The object notation for `createSlice.extraReducers` is deprecated, and will be removed in RTK 2.0. Please use the 'builder callback' notation instead

## to solve this use builder

# before
```jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/movieApiKey";

// we will fetch all movies with the help of async thunk 
// we create fetchmovies async function for fetching data so we dont wont to fetch movies in home component and then dispatch synchronous action 
// to use code ko hum yaha leke aaye hai 
// this is async action
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
     const movietext = "Harry";
     const response = await movieApi
          .get(`?apikey=${ApiKey}&s=${movietext}&type=movie`);
     return response.data;

})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
     const seriestext = "friends";
     const response = await movieApi
          .get(`?apikey=${ApiKey}&s=${seriestext}&type=series`);
     return response.data;

})
export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
     const response = await movieApi
          .get(`?apikey=${ApiKey}&i=${id}&Plot=full`);
     return response.data;

})
const initialState = {
     movies: {},
     shows:{},
     selectedMovieOrShow:{}
};


export const movieSlice = createSlice({
     name: 'movies',
     initialState,
     reducers: {
          // this is action 
          addMovies: (state, action) => {
               state.movies = action.payload
          },
          // cleanup function
          removeSelectedMovieOrShow:(state)=>{
               state.selectedMovieOrShow = {}
          }
     },
     extraReducers:{
          [fetchAsyncMovies.pending]:()=>{
               console.log('pending');
          },
          [fetchAsyncMovies.fulfilled]:(state, action)=>{
               console.log('fetch successfully');
               return {...state, movies:action.payload}
          },
          [fetchAsyncMovies.rejected]:()=>{
               console.log('rejected');
          },
          [fetchAsyncShows.fulfilled]:(state, action)=>{
               console.log('fetch successfully');
               return {...state, shows:action.payload}
          },
          [fetchAsyncMovieOrShowDetail.fulfilled]:(state, action)=>{
               console.log('fetch successfully');
               return {...state, selectedMovieOrShow:action.payload}
          },
     }
})

export const { addMovies , removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state)=> state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
```

# after (use builder)

```jsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const movietext = "Harry";
  const response = await movieApi.get(`?apikey=${ApiKey}&s=${movietext}&type=movie`);
  return response.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
  const seriestext = "friends";
  const response = await movieApi.get(`?apikey=${ApiKey}&s=${seriestext}&type=series`);
  return response.data;
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
  const response = await movieApi.get(`?apikey=${ApiKey}&i=${id}&Plot=full`);
  return response.data;
})

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log('pending');
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
        console.log('fetch successfully');
        state.movies = action.payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        console.log('rejected');
      })
      .addCase(fetchAsyncShows.fulfilled, (state, action) => {
        console.log('fetch successfully');
        state.shows = action.payload;
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
        console.log('fetch successfully');
        state.selectedMovieOrShow = action.payload;
      });
  },
});

export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;

```
# its working properly