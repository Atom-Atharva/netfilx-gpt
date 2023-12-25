import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: false,
        movieResults: false,
    },
    reducers: {
        toggleGetSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state, action) => {
            const { movieNames, movieResults } = action.payload;

            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    },
});

export const { toggleGetSearchView, addGptMovieResults } = gptSlice.actions;

export default gptSlice.reducer;
