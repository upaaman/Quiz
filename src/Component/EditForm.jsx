import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { editQuizQuestion } from '../redux/QuizSlice';

const EditForm = ({ currEdiQue,quizId }) => {
    const dispatch=useDispatch();
    const [questionText, setQuestionText] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [correctOption, setCorrectOption] = useState("");
    useEffect(() => {
        setQuestionText(currEdiQue.questionText)
        setOption1(currEdiQue.options[0].optionText)
        setOption2(currEdiQue.options[1].optionText)
        setOption3(currEdiQue.options[2].optionText)
        setOption4(currEdiQue.options[3].optionText)
        setCorrectOption(currEdiQue.correctOption);
    }, [currEdiQue])
    const handleEdit = (e) => {
e.preventDefault();
        const newQuestion={
            correctOption,
            options:[
                {
                    optionText:option1,
                    optionId:1,
                },
                {
                    optionText:option2,
                    optionId:2,
                },
                {
                    optionText:option3,
                    optionId:3,
                },
                {
                    optionText:option4,
                    optionId:4,
                },
            ],
            questionId:currEdiQue?.questionId,
            questionText,
        }
        const payload={
            quizId,
            newValues:newQuestion
        }
            dispatch(editQuizQuestion(payload));
    }
    return (
        <div>
            <form
                onSubmit={(e) => handleEdit(e)}
                className="flex flex-col gap-5 mt-10 items-center justify-center">
                <label>
                    <span>Enter Question</span>
                    <input
                        className='w-full'
                        placeholder="Write question"
                        type="text"
                        value={questionText}
                        onChange={(e) => setQuestionText(e.target.value)}
                    />
                </label>
                <label>
                    <span>Option 1</span>
                    <input
                        placeholder="Write Option 1"
                        type="text"
                        value={option1}
                        onChange={(e) => setOption1(e.target.value)}
                    />
                </label>
                <label>
                    <span>Option 2</span>
                    <input
                        placeholder="Write Option 2"
                        type="text" value={option2}
                        onChange={(e) => setOption2(e.target.value)}
                    />
                </label>
                <label>
                    <span>Option 3</span>
                    <input
                        placeholder="Write Option 3"
                        type="text" value={option3}
                        onChange={(e) => setOption3(e.target.value)}
                    />
                </label>
                <label>
                    <span>Option 4</span>
                    <input
                        placeholder="Write Option 4"
                        type="text" value={option4}
                        onChange={(e) => setOption4(e.target.value)}
                    />
                </label>
                <label>
                    <span>Correct Option</span>
                    <div

                        className="flex gap-5">
                        <input type="radio" value={1} checked={correctOption == 1}
                            onChange={(e) => setCorrectOption(e.target.value)}
                            name={correctOption} /> 1
                        <input type="radio" value={2} checked={correctOption == 2}
                            onChange={(e) => setCorrectOption(e.target.value)}
                            name={correctOption} /> 2
                        <input type="radio" value={3} checked={correctOption == 3}
                            onChange={(e) => setCorrectOption(e.target.value)}
                            name={correctOption} /> 3
                        <input type="radio" value={4} checked={correctOption == 4}
                            onChange={(e) => setCorrectOption(e.target.value)}
                            name={correctOption} /> 4
                    </div>

                </label>
                <button
                    type="submit">
                    EDIT
                </button>

            </form>
        </div>
    )
}

export default EditForm