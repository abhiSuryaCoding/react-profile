import Banner from "./components/Banner";
import './App.css'
import Timeline from "./components/Timeline/Timeline";
import { Navigate, Route, Routes } from "react-router-dom";
import CoverLetter from "./components/CoverLetter/CoverLetter";

function App() {
  return (
    <Routes>
        <Route path="*" element={<Navigate to ="/react-profile/" />}/>
        <Route path="/react-profile/" element={<Banner/>}/>
        <Route path="/react-profile/cover-letter" element={<CoverLetter/>}/>
    </Routes>
    
  )
}

export default App;