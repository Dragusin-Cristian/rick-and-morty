import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    search: '',
    isLoading: true,
    erroState: false,
    isFirstLoad: true,
    status: ''
}

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        updateSearch: (state, action) => {
            state.search = action.payload
        },
        setCharacters: (state, action) => {
            state.characters = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setErrorState: (state, action) => {
            state.erroState = action.payload
        },
        setIsFirstLoad: (state, action) => {
            state.isFirstLoad = action.payload
        },
        setStatus: (state, action) => {
            state.status = action.payload
        }
    }
})

export const characters_actions = charactersSlice.actions;

export default charactersSlice;