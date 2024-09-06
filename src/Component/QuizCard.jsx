
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteQuiz, setCurrentPlayingQuiz } from '../redux/QuizSlice';

const QuizCard = ({ item }) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handlePlayQuiz = (item) => {
        dispatch(setCurrentPlayingQuiz(item));
        navigate('playquiz')
    }
    const handleDeleteQuiz = (item) => {
        dispatch(deleteQuiz(item))
    }

    return (
        <div
            className="flex flex-col gap-5 p-5 w-[300px] h-[200px] bg-purple-200"

        >
            <span>Quiz Name :  {item?.quizName}  </span>
            <span>Number of Questions :  {item?.quizQuestions?.length}  </span>
            <div className="flex gap-3">
                {/* <button 
    onClick={()=>handleEdit(item)}
    >Edit</button> */}
                <button
                    onClick={() => handlePlayQuiz(item)}
                >Start</button>
                <button
                    onClick={() => handleDeleteQuiz(item)}
                >Delete</button>
            </div>
        </div>
    )
}

export default QuizCard