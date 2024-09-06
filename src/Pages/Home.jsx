
import { useNavigate } from "react-router-dom";
import QuizCard from "../Component/QuizCard";
import { useSelector } from "react-redux";



const Home = () => {
    const navigate = useNavigate();
    const { quizList } = useSelector(state => state.quiz);

    return (
        <div className=" flex flex-col">
            <div className="bg-purple-600 text-white flex  items-center justify-between px-6 py-2">
                <div >Quiz Website</div>
            </div>
            {quizList?.length > 0 ?
                <div className="flex  gap-5  w-full items-center justify-center flex-col">
                    <div className="bg-purple-400 font-bold p-3 mt-2 rounded-lg text-xl">Total Quizes : {quizList?.length}</div>
                    <button
                        onClick={() => navigate("/addquiz")}
                        className="bg-purple-300 hover:bg-purple-400 font-bold p-3  rounded-lg text-xl">
                        Add Quiz
                    </button>
                    <div className="flex flex-wrap gap-5 items-center justify-center mt-5">
                        {
                            quizList?.map((item) =>
                                <QuizCard key={item.quizId} item={item} />
                            )
                        }
                    </div>
                </div> :
                <div className="flex w-full items-center flex-col gap-10 mt-10 justify-center">
                    <button
                        onClick={() => navigate("/addquiz")}
                        className="bg-purple-300 hover:bg-purple-400 font-bold p-3  rounded-lg text-xl">
                        Add Quiz
                    </button>
                    <span className="text-2xl font-bold ">Please Add a quiz to play!!!!</span>
                </div>
            }
        </div>
    )
}

export default Home