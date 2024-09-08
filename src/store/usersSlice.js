import { createSlice } from "@reduxjs/toolkit";
import usersData from '../utils/data.json';

const initialState = {
    users: usersData,
    searchedUsers: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        fetchUsers: (state, action) => {
            let searchedUsers = state.users.filter(user => {
                let fullName = `${user.first} ${user.last}`;
                if ((action.payload.searchTxt.length === 0) || fullName.toLowerCase().includes(action.payload.searchTxt.toLowerCase())) return true;
                return false;
            })
            state.searchedUsers = searchedUsers;
        },
        deleteUser: (state, action) => {
            let filteredUsers = state.users.filter(user => user.id !== action.payload.userId);
            let filteredSearchUsers = state.searchedUsers.filter(user => user.id !== action.payload.userId);
            state.users = filteredUsers;
            state.searchedUsers = filteredSearchUsers;
        },
        updateUser: (state, action) => {
            let updatedUsers = state.users.map(user => (user.id === action.payload.id) ? { ...user, ...action.payload } : { ...user });
            let updatedSearchUsers = state.searchedUsers.map(user => (user.id === action.payload.id) ? { ...user, ...action.payload } : { ...user });
            state.users = updatedUsers;
            state.searchedUsers = updatedSearchUsers;
        }
    }
})

export const { fetchUsers, deleteUser, updateUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;