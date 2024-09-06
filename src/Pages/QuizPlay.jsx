import { useSelector } from "react-redux"
import QuestionItem from "../Component/QuestionItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




const QuizPlay = () => {
    const navigate=useNavigate();
    const { currentPlayingQuiz } = useSelector(state => state.quiz);
    const [score, setScore] = useState(0);
    const [noQuesAttempted, setNoQuesAttempted] = useState(0);

    const attempAllQuestions=()=>toast.success('Please Submit All Questions!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        });

    const handleFinishQuiz=()=>{
        if(noQuesAttempted < currentPlayingQuiz?.quizQuestions?.length){
            attempAllQuestions();
        }
        else navigate("/scorepage",{state:{score:score,totalScore:currentPlayingQuiz?.quizQuestions?.length}})
    }
    return (
        <div className="flex justify-around">
            <div>
                <div>Your Score is {score} out of {currentPlayingQuiz?.quizQuestions?.length} </div>
                <div>Quiz Name: {currentPlayingQuiz?.quizName}</div>

                {currentPlayingQuiz?.quizQuestions?.map((item) =>
                    <QuestionItem key={item.questionId} item={item} setScore={setScore} setNoQuesAttempted={setNoQuesAttempted} />
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