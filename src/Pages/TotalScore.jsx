import { useLocation, useNavigate } from "react-router-dom"

const TotalScore = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='w-full h-screen flex font-bold text-2xl items-center justify-center flex-col'>
      <div >Your Score is {location.state.score} out of {location.state.totalScore}</div>
      <button
        className="bg-purple-300 hover:bg-purple-400 font-bold p-3 mt-5  rounded-lg text-xl"
        onClick={() => navigate("/")}>Back to Home</button>
    </div>
  )
}

export default TotalScore