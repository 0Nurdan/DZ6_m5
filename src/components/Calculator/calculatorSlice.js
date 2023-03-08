import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        result: null,
    },
    reducers: {
        add: (state, action) => {
            state.result = action.payload.num1 + action.payload.num2;
        },
        subtract: (state, action) => {
            state.result = action.payload.num1 - action.payload.num2;
        },
        multiply: (state, action) => {
            state.result = action.payload.num1 * action.payload.num2;
        },
        divide: (state, action) => {
            state.result = action.payload.num1 / action.payload.num2;
        },
    },
});

export const { add, subtract, multiply, divide} = calculatorSlice.actions;

export default calculatorSlice.reducer;
