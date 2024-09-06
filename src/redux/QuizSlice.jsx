import { createSlice, current } from "@reduxjs/toolkit";



export const QuizSlice = createSlice({
    name: "quiz",
    initialState: {
        quizList: JSON.parse(localStorage.getItem("quizData")) ? JSON.parse(localStorage.getItem("quizData")) : [],
        currentPlayingQuiz: []
    },
    reducers: {
        addQuiz: (state, action) => {
            state.quizList.push(action.payload)
            const items = JSON.stringify(current(state.quizList));
            localStorage.setItem("quizData", items);
            // console.log(current(state.quizList))
        },
        deleteQuiz: (state, action) => {
            state.quizList = state.quizList.filter(item => item.quizId !== action.payload.quizId)
            localStorage.setItem("quizData", JSON.stringify(state.quizList));
        },
        editQuizQuestion: (state, action) => {
            // console.log(current(state.quizList))
            console.log(action.payload)
            state.quizList = state.quizList.map((item) => {
                if (item?.quizId == action.payload.quizId) {
                    item.quizQuestions.map((i) => {
                        if (i.questionId == action.payload.newValues.questionId) {
                            console.log(current(i))
                            return action.payload.newValues
                        }
                        else return i
                    })
                } else return item
            })
            // const items = JSON.stringify(current(state.quizList));
            // localStorage.setItem("quizData", items);
        },
        setCurrentPlayingQuiz: (state, action) => {
            state.currentPlayingQuiz = action.payload
        }
    }
})
export const { addQuiz, setCurrentPlayingQuiz, editQuizQuestion, deleteQuiz } = QuizSlice.actions;
export default QuizSlice.reducer;