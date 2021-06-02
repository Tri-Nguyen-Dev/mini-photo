import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'photos',
    initialState: {
        photos: JSON.parse(localStorage.getItem('photo'))
    },
    reducers: {
        addPhoto: (state, action) => {
            state.photos.push(action.payload)
            localStorage.setItem('photo', JSON.stringify(state.photos))
        }
    }
})

const { actions, reducer } = todoSlice

export const { addPhoto } = actions

export default reducer