import { useLocation, useNavigate } from "react-router-dom"

const TotalScore = () => {
    const navigate=useNavigate();
    const location=useLocation();

  return (
   <div className='w-full h-screen flex items-center justify-center flex-col'>
     <div >Your Score is {location.state.score} out of {location.state.totalScore}</div>
     <button onClick={()=>navigate("/")}>Back to Home</button>
   </div>
  )
}

export default TotalScore