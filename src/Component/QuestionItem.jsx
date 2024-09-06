import { useState } from "react"


const QuestionItem = ({ item, setScore, setNoQuesAttempted }) => {
    const [selectedOption, setSelectedOption] = useState(-1);
    const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);


    const handleSubmitAnswer = (selectedOption) => {
        setNoQuesAttempted(prev => prev + 1);
        if (selectedOption == item?.correctOption) {
            setIsAnswerCorrect(true)
            setScore(prev => prev + 1)
        } else {
            setIsAnswerCorrect(false)
        }
        setIsQuestionSubmitted(true);
    }
    return (
        <div className="bg-purple-200 p-5 md:w-[600px] flex flex-col gap-5  items-center justify-center flex-wrap rounded-lg">
            <div className=" w-full  bg-purple-300 text-xl p-4 flex justify-center p h-auto  rounded-md font-semibold">{item?.questionText}</div>
            <div className="flex items-center justify-center flex-wrap gap-5 w-[50%] ">

                {
                    item.options.map((op) => <div
                        className="w-[40%]   text-md  font-semibold"
                        key={op.optionId}>
                        <label className="flex  gap-2 ">
                            <input
                                className=""
                                type="radio"
                                value={op.optionId}
                                onChange={() => setSelectedOption(op.optionId)}
                                name={item.questionId} />
                            <span>{op.optionText}</span>
                        </label>
                    </div>)
                }
            </div>

            {
                !isQuestionSubmitted ? <>
                    {selectedOption != -1
                        &&
                        <button
                            className="bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 px-3 py-2"
                            onClick={() => handleSubmitAnswer(selectedOption)}
                        >
                            Submit
                        </button>}
                </>
                    :
                    <div className="w-full">
                        {
                            isAnswerCorrect == true ?
                                <div className="bg-green-300 w-full flex flex-col rounded-lg items-center py-2 text-lg font-semibold">
                                    Your option is correct
                                </div>
                                :

                                <div className="bg-red-300 w-full flex flex-col rounded-lg items-center py-2 text-lg font-semibold">
                                    <span>Sorry your option is Wrong</span>
                                    <span>Its answer is {item.options[item.correctOption - 1].optionText} </span>
                                </div>
                        }
                    </div>
            }
        </div>
    )
}

export default QuestionItem