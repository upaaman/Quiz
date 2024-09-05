import { useDispatch, useSelector } from "react-redux"
import { setCurrentPlayingQuiz } from "../redux/QuizSlice";
import { useNavigate } from "react-router-dom";



const Home = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { quizList } = useSelector(state => state.quiz);


    const handlePlayQuiz=(item)=>{
        dispatch(setCurrentPlayingQuiz(item));
        navigate('playquiz')
    }

    return (
        <div className=" flex flex-col">
            <div className="bg-purple-600 text-white flex  items-center justify-between px-6 py-2">
                <div >Quiz Website</div>
                <button
                onClick={()=>navigate('/addquiz')}
                >Add Quiz</button>
            </div>
            {quizList?.length>0 ?
            <div className="flex   w-full items-center justify-center flex-col">
                <div>Total Quizes : {quizList?.length}</div>
                <div className="flex flex-wrap gap-5 items-center justify-center mt-10">
                    {
                        quizList.map((item) =>
                            <div
                                className="flex flex-col gap-5 p-5 w-[300px] h-[200px] bg-purple-200"
                                key={item.quizId}
                            >
                                <span>Quiz Name :  {item?.quizName}  </span>
                                <span>Number of Questions :  {item?.quizQuestions?.length}  </span>
                                <div className="flex gap-3">
                                <button>Edit</button>
                                <button
                                onClick={()=>handlePlayQuiz(item)}
                                >Start</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div> : 
            <div>Please add a quiz to play!!!!!</div>
            }
        </div>
    )
}

export default Home