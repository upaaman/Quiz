
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteQuiz, setCurrentPlayingQuiz } from '../redux/QuizSlice';

const QuizCard = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handlePlayQuiz = (item) => {
        dispatch(setCurrentPlayingQuiz(item));
        navigate('playquiz')
    }
    const handleDeleteQuiz = (item) => {
        dispatch(deleteQuiz(item))
    }

    return (
        <div
            className="flex flex-col gap-5 p-5 w-[300px] h-[200px] items-center 
            justify-center hover:bg-purple-400 transition-all duration-400 
             bg-purple-300 rounded-lg
                hover:scale-[102%]"
        >
            <span className='text-white font-bold text-3xl  '>  {item?.quizName}  </span>
            <span className='text-white font-bold text-lg'>Questions :  {item?.quizQuestions?.length}  </span>
            <div className="flex gap-3">
                {/* <button 
    onClick={()=>handleEdit(item)}
    >Edit</button> */}
                <button
                    className='bg-purple-500 px-3 py-2 rounded-lg text-white hover:bg-purple-600'
                    onClick={() => handlePlayQuiz(item)}
                >Start</button>
                <button
                    className='bg-purple-500 px-3 py-2 rounded-lg text-white hover:bg-purple-600'
                    onClick={() => handleDeleteQuiz(item)}
                >Delete</button>
            </div>
        </div>
    )
}

export default QuizCard