import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovies: null,
    trailerVideo: null,
    PopularMovies: null,
    TopRatedMovies: null,
    UpcomingMovies:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.UpcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    resetMovieSlice : (state)=>{
      state.NowPlayingMovies = null;
      state.PopularMovies = null;
      state.TopRatedMovies = null;
      state.UpcomingMovies = null;
      state.trailerVideo = null;
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  resetMovieSlice
} = movieSlice.actions;

export default movieSlice.reducer;
