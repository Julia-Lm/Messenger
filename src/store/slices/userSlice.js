import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
    email: null,
    photoURL: null,
    token: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.photoURL = action.payload.photoURL;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.username = null;
            state.email = null;
            state.photoURL = null;
            state.token = null;
            state.id = null;
        },
    },
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;