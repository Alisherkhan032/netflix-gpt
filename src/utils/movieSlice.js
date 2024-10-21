import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name : "movies",
    initialState: {
        NowPlayingMovies : null,
        trailerVideo : null
    },
    reducers :{
        addNowPlayingMovies : (state , action) =>{
            state.NowPlayingMovies = action.payload
        },
        addTrailerVideo : (state, action)=>{
            state.trailerVideo = action.payload
        }
    }
});

export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions

export default movieSlice.reducer