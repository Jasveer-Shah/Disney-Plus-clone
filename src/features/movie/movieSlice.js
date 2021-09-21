import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movie",    // name of the state
    initialState,
    reducers: {    // takes current state and payload
        setMovies:(state, action) =>{
            state.movies = action.payload;
        }
    }
})

export const { setMovies } = movieSlice.actions;          // exporting action

export const selectMovies = (state) => state.movie.movies; // exporting movie state

export default movieSlice.reducer;                        // exporting reducer