import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addQuiz } from "../redux/QuizSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const QuestionForm = () => {
    const navigate=useNavigate();
    const [questionText, setQuestionText] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [correctOption, setCorrectOption] = useState("");
    const [allQuestion, setAllQuestion] = useState([]);
    const [quizName,setQuizName]=useState("");
    const { quizList } = useSelector((state) => state.quiz);
    const dispatch=useDispatch();
    const notifyQuestion=()=>toast.success('Question Added!', {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    const notifyQuiz=()=>toast("Quiz Added!!")

    const handleSubmitQuestion = (e) => {
        e.preventDefault();
        const questionDetails = {
            questionId: allQuestion.length,
            questionText,
            correctOption,
            options: [
                {
                    optionId: 1,
                    optionText: option1
                },
                {
                    optionId: 2,
                    optionText: option2
                },
                {
                    optionId: 3,
                    optionText: option3
                },
                {
                    optionId: 4,
                    optionText: option4
                },

            ],
        }
        // console.log(questionDetails)
        setAllQuestion(prev => [...prev, questionDetails]);
        notifyQuestion();
            


        setOption1("");
        setOption2("");
        setOption3("");
        setOption4("");
        setQuestionText("");
    }


    const handleQuizAdd=()=>{
        const quizDetails={
            quizName,
            quizId:quizList?.length,
            quizQuestions:allQuestion,
        }
        // console.log(quizDetails);
        dispatch(addQuiz(quizDetails))
        setAllQuestion([]);
        setQuizName("");
        notifyQuiz();
        navigate('/');
        // console.log(quizList)


    }
    return (
        <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex w-full justify-around">
                <div>Add your questions here</div>
                <button
                    onClick={()=>handleQuizAdd()}
                >
                    Done
                </button>
            </div>
                <label > <span>QuizName</span> <input type="text" placeholder="Your quiz name"  onChange={e=>setQuizName(e.target.value)} value={quizName} /> </label>
            <form
                onSubmit={(e) => handleSubmitQuestion(e)}
                className="flex flex-col gap-5 mt-10 items-center justify-center">
                <label>
                    <span>Enter Question</span>
                    <input placeholder="Write question" type="text" value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
                </label>
                <label>
                    <span>Option 1</span>
                    <input placeholder="Write Option 1" type="text" value={option1} onChange={(e) => setOption1(e.target.value)} />
                </label>
                <label>
                    <span>Option 2</span>
                    <input placeholder="Write Option 2" type="text" value={option2} onChange={(e) => setOption2(e.target.value)} />
                </label>
                <label>
                    <span>Option 3</span>
                    <input placeholder="Write Option 3" type="text" value={option3} onChange={(e) => setOption3(e.target.value)} />
                </label>
                <label>
                    <span>Option 4</span>
                    <input placeholder="Write Option 4" type="text" value={option4} onChange={(e) => setOption4(e.target.value)} />
                </label>
                <label>
                    <span>Correct Option</span>
                    <div
                        onChange={(e) => setCorrectOption(e.target.value)}
                        className="flex gap-5">
                        <input type="radio" value={1} name={correctOption} /> 1
                        <input type="radio" value={2} name={correctOption} /> 2
                        <input type="radio" value={3} name={correctOption} /> 3
                        <input type="radio" value={4} name={correctOption} /> 4
                    </div>

                </label>
                <button
                    type="submit"
                >ADD
                </button>

            </form>
        </div>
    )
}

export default QuestionForm