import { useSelector } from "react-redux"
import QuestionItem from "../Component/QuestionItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const QuizPlay = () => {
    const navigate=useNavigate();
    const { quizList,currentPlayingQuiz } = useSelector(state => state.quiz);
    const [score, setScore] = useState(0);
    const handleFinishQuiz=()=>{
        navigate("/scorepage",{state:{score:score,totalScore:currentPlayingQuiz?.quizQuestions?.length}})
    }
    return (
        <div className="flex justify-around">
            <div>
                <div>Your Score is {score} out of {currentPlayingQuiz?.quizQuestions?.length} </div>
                <div>Quiz Name: {quizList[0]?.quizName}</div>
                {quizList[0]?.quizQuestions?.map((item) =>
                    <QuestionItem key={item.questionId} item={item} setScore={setScore} />
                )}
            </div>
                <div>
                    <button 
                    onClick={()=>handleFinishQuiz()}
                    className="bg-purple-300">Finish</button>
                </div>
        </div>
    )
}

export default QuizPlay