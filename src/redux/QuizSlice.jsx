import { createSlice, current } from "@reduxjs/toolkit";



export const QuizSlice=createSlice({
    name:"quiz",
    initialState:{
        quizList:JSON.parse(localStorage.getItem("quizData"))?JSON.parse(localStorage.getItem("quizData")):[],
        currentPlayingQuiz:[]
    },
    reducers:{
        addQuiz:(state,action)=>{
           state.quizList.push(action.payload)
           const items=JSON.stringify(current(state.quizList));
           localStorage.setItem("quizData",items);
        },
        setCurrentPlayingQuiz:(state,action)=>{
            state.currentPlayingQuiz=action.payload
        }
    }
})
export const {addQuiz ,setCurrentPlayingQuiz } = QuizSlice.actions;
export default QuizSlice.reducer;