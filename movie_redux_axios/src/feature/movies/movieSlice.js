import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { ApiKey } from "../../common/apis/movieApiKey";

// we will fetch all movies with the help of async thunk 
// we create fetchmovies async function for fetching data so we dont wont to fetch movies in home component and then dispatch synchronous action 
// to use code ko hum yaha leke aaye hai 
// this is async action
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (search) => {
     const response = await movieApi
          .get(`?apikey=${ApiKey}&s=${search}&type=movie`);
     return response.data;

})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (search) => {
     const response = await movieApi
          .get(`?apikey=${ApiKey}&s=${search}&type=series`);
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