import { useSelector } from "react-redux"
import QuestionItem from "../Component/QuestionItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";




const QuizPlay = () => {
    const navigate = useNavigate();
    const { currentPlayingQuiz } = useSelector(state => state.quiz);
    const [score, setScore] = useState(0);
    const [noQuesAttempted, setNoQuesAttempted] = useState(0);

    const attempAllQuestions = () => toast.success('Please Submit All Questions!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
    });

    const handleFinishQuiz = () => {
        if (noQuesAttempted < currentPlayingQuiz?.quizQuestions?.length) {
            attempAllQuestions();
        }
        else navigate("/scorepage", { state: { score: score, totalScore: currentPlayingQuiz?.quizQuestions?.length } })
    }
    return (
        <div className="flex justify-around">
            <div className="w-full" >
                <div className="bg-purple-400 fixed w-full py-2 justify-between px-10 flex items-center text-white font-semibold text-xl">
                    <div>Your Score is {score} out of {currentPlayingQuiz?.quizQuestions?.length} </div>
                    <div>
                        <button
                            onClick={() => handleFinishQuiz()}
                            className="bg-purple-500 rounded-lg hover:bg-purple-600 px-3 py-2">
                            Finish
                        </button>
                    </div>
                </div>
                <div className="pt-[70px] flex flex-col gap-10 items-center">
                    <div className="text-xl font-semibold bg-purple-400 text-white rounded-md px-2 py-2 "
                    >Quiz Name: {currentPlayingQuiz?.quizName}
                        </div>
                    <div className=" flex flex-col w-full items-center gap-5">
                        {currentPlayingQuiz?.quizQuestions?.map((item) =>
                            <QuestionItem key={item.questionId} item={item} setScore={setScore} setNoQuesAttempted={setNoQuesAttempted} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizPlay