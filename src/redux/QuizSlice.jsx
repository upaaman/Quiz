import { createSlice } from "@reduxjs/toolkit";

export const QuizSlice=createSlice({
    name:"quiz",
    initialState:{
        quizList:[],
        currentPlayingQuiz:[]
    },
    reducers:{
        addQuiz:(state,action)=>{
           state.quizList.push(action.payload)
        },
        setCurrentPlayingQuiz:(state,action)=>{
            state.currentPlayingQuiz=action.payload
        }
    }
})

export const {addQuiz ,setCurrentPlayingQuiz } = QuizSlice.actions;
export default QuizSlice.reducer;