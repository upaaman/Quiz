import {useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addQuiz } from "../redux/QuizSlice";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const QuestionForm = () => {
    const navigate = useNavigate();
    const [questionText, setQuestionText] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [correctOption, setCorrectOption] = useState("");
    const [allQuestion, setAllQuestion] = useState([]);
    const [quizName, setQuizName] = useState("");
    const { quizList } = useSelector((state) => state.quiz);
    const dispatch = useDispatch();



    const notifyQuestion = () => toast.success('Question Added!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const addAllFields = () => toast.error('Please Add All Fields!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const addQuestionsInQuiz = () => toast.error('Add atleast one question in Quiz!!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const duplicateQuestion = () => toast.error('Please Add Unique Options!!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const notifyQuiz = () => toast("Quiz Added!!")

    const handleSubmitQuestion = () => {
        if (option1 == "" || option2 == "" || option3 == "" || option4 == "" || quizName == "" || questionText == "" || correctOption == "") {
            addAllFields();
        }
        else if(option1==option2 || option1==option3 || option1==option4 || option2==option3 || option2==option4 ||option3==option4){
            duplicateQuestion();
        }
        else {
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
    }

    

    const handleQuizAdd = () => {
        if (allQuestion.length === 0) {
            addQuestionsInQuiz();
        }
        else {
            const quizDetails = {
                quizName,
                quizId: quizList?.length,
                quizQuestions: allQuestion,
            }
            // console.log(quizDetails);
            dispatch(addQuiz(quizDetails))
            setAllQuestion([]);
            setQuizName("");
            notifyQuiz();
            navigate('/');
        }
        // console.log(quizList)


    }
    return (
        <div className="flex w-full flex-col items-center justify-center gap-10">
            <div className="bg-purple-600 w-full text-white flex  items-center justify-between px-6 py-2">
                <div className="text-xl font-semibold">Add your questions here</div>
            </div>
            <div className="flex md:flex-row flex-col items-center   gap-10 justify-center   w-full">
                <div className="flex flex-col md:w-[50%] w-[70%]">
                    <label className="flex w-full justify-center gap-5 items-center ">
                        <span className="text-purple-500 font-semibold text-md  md:text-xl" >QuizName</span>
                        <input
                            className="h-[40px] w-3/4  border-purple-500 border-2  p-1 text-lg rounded-md"
                            type="text"
                            placeholder="Your quiz name"
                            onChange={e => setQuizName(e.target.value)} value={quizName}
                        />
                    </label>
                    <form

                        className="flex bg-purple-400 px-5 rounded-lg w-full py-7 flex-col gap-5 mt-10 items-center justify-center">

                        <label className="flex w-full justify-between items-center ">
                            <span className="text-white font-semibold text-md  md:text-xl">Enter Question</span>
                            <input
                                className="h-[40px] w-[70%] p-1 text-lg rounded-md"
                                placeholder="Write question"
                                type="text"
                                value={questionText}
                                onChange={(e) => setQuestionText(e.target.value)}
                            />
                        </label>
                        <label className="flex  justify-center md:w-auto w-[200px] md:justify-around gap-5">
                            <span className="text-white text-lg font-bold">1.</span>
                            <input
                                className="rounded-md p-1 w-full"
                                placeholder="Write Option 1"
                                type="text"
                                value={option1}
                                onChange={(e) => setOption1(e.target.value)}
                            />
                        </label>
                        <label className="flex  justify-center md:w-auto w-[200px] md:justify-around gap-5">
                            <span className="text-white text-lg font-bold">2.</span>
                            <input
                                className="rounded-md p-1 w-full"
                                placeholder="Write Option 2"
                                type="text" value={option2}
                                onChange={(e) => setOption2(e.target.value)}
                            />
                        </label>
                        <label className="flex  justify-center md:w-auto w-[200px] md:justify-around gap-5">
                            <span className="text-white text-lg font-bold">3.</span>
                            <input
                                className="rounded-md p-1 w-full"
                                placeholder="Write Option 3"
                                type="text" value={option3}
                                onChange={(e) => setOption3(e.target.value)}
                            />
                        </label>
                        <label className="flex  justify-center md:w-auto w-[200px] md:justify-around gap-5">
                            <span className="text-white text-lg font-bold">4.</span>
                            <input
                                className="rounded-md p-1 w-full"
                                placeholder="Write Option 4"
                                type="text" value={option4}
                                onChange={(e) => setOption4(e.target.value)}
                            />
                        </label>
                        <label className="flex  justify-around">
                            <span className="text-white font-semibold text-sm md:text-lg">Correct Option:</span>
                            <div
                                onChange={(e) => setCorrectOption(e.target.value)}
                                className="flex gap-5 flex-wrap text-sm md:text-xl text-white">
                                <input type="radio" value={1} name={correctOption} /> 1
                                <input type="radio" value={2} name={correctOption} /> 2
                                <input type="radio" value={3} name={correctOption} /> 3
                                <input type="radio" value={4} name={correctOption} /> 4
                            </div>

                        </label>


                    </form>
                </div>
                <div className="flex md:flex-col flex-row gap-5 ">
                    <button
                        className="bg-purple-500 px-3 py-4 md:w-[200px] w-[100px] md:text-xl font-bold hover:bg-purple-600  text-white rounded-lg "
                        onClick={() => handleSubmitQuestion()}
                    >Add This Question
                    </button>
                    {allQuestion.length > 0 &&
                    <button
                        onClick={() => handleQuizAdd()}
                        className="bg-purple-500 px-3 py-4 md:w-[200px] w-[100px] md:text-xl font-bold hover:bg-purple-600  text-white rounded-lg "
                    >
                        Add This Quiz
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default QuestionForm