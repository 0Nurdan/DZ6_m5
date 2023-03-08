import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./components/Calculator/calculatorSlice"; // поправить путь

export default configureStore({
    reducer: {
        calculator: calculatorReducer,
    },
});
