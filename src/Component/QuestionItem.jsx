import { useState } from "react"


const QuestionItem = ({ item ,setScore,setNoQuesAttempted}) => {
    const [selectedOption, setSelectedOption] = useState(-1);
    const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);


    const handleSubmitAnswer = (selectedOption) => {
        setNoQuesAttempted(prev=>prev+1);
        if (selectedOption == item?.correctOption) {
            setIsAnswerCorrect(true)
            setScore(prev=>prev+1)
        } else {
            setIsAnswerCorrect(false)
        }
        setIsQuestionSubmitted(true);
    }
    return (
        <div>
            <div><span>Question : {item?.questionText}</span></div>
            <div>
                <span>Please select an options : </span>
                {
                    item.options.map((op) => <div
                    className=""
                    key={op.optionId}>
                        <label>
                            <span>{op.optionId}</span>
                            <input type="radio" value={op.optionId}  onChange={()=>setSelectedOption(op.optionId)} name={item.questionId} />
                            <span>{op.optionText}</span>
                        </label>
                    </div>)
                }
            </div>
           
            {
                !isQuestionSubmitted ? 
                <button
                onClick={() => handleSubmitAnswer(selectedOption)}
            >Submit</button>
                    :
                <div>
                    {
                        isAnswerCorrect==true ? 
                        <div className="bg-green-300">Your option is correct </div>
                        :
                    
                        <div className="bg-red-300 flex flex-col">
                            <span>Sorry your option is Wrong</span>
                            <span>Its answer is option  {item.correctOption} : {item.options[item.correctOption-1].optionText} </span>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default QuestionItem