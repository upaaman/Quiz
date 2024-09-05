import { configureStore } from "@reduxjs/toolkit";
import QuizSlice from "./QuizSlice";

export default configureStore({
    reducer:{
        quiz:QuizSlice
    },
});