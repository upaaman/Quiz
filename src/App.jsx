import { Route, Routes } from "react-router-dom"

import Home from "./Pages/Home"
import QuizPlay from "./Pages/QuizPlay"
import QuestionForm from "./Pages/QuestionForm"
import TotalScore from "./Pages/TotalScore"
import EditPage from "./Pages/EditPage"


const App = () => {



    
      
      

  
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/addquiz" element={<QuestionForm />} />
        <Route path="/playquiz" element={<QuizPlay />} />
        <Route path="/scorepage" element={<TotalScore />} />
        <Route path="/editpage" element={<EditPage />} />
      </Routes>
    </div>
  )
}

export default App