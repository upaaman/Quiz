import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import EditForm from '../Component/EditForm';

const EditPage = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const quizToBeEdited = location?.state?.item;
    const [currEdiQue, setCurrEdiQue] = useState(quizToBeEdited?.quizQuestions[0]);
   
    // console.log(currEdiQue)
    return (
        <div>
            <div>
                <div className='flex gap-10'>
                    <span>Select question to edit </span>
                    {
                        quizToBeEdited?.quizQuestions?.map((item, index) =>
                            <span
                                onClick={() => setCurrEdiQue(item)}
                                key={item?.questionId}>{index + 1}

                            </span>)
                    }
                    <button 
                        onClick={()=>navigate("/")}
                    >Home</button>
                </div>
                    <EditForm quizId={quizToBeEdited?.quizId} currEdiQue={currEdiQue}/>
            </div>

        </div>
    )
}

export default EditPage