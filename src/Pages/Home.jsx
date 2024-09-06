import {useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import QuizCard from "../Component/QuizCard";



const Home = () => {

    const navigate=useNavigate();
    const { quizList } = useSelector(state => state.quiz);

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
                        quizList?.map((item) =>
                           <QuizCard key={item.quizId} item={item}/>
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