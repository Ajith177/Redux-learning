import { createSlice } from '@reduxjs/toolkit';

export const Counterslice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value = state.value - 1;
        },
        incrementation: (state, action) => {
            state.value = state.value + action.payload
        },
    },

})

export const { increment, decrement, incrementation } = Counterslice.actions
export default Counterslice.reducer