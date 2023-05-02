import Banner from "./components/Banner";
import './App.css'
import Timeline from "./components/Timeline/Timeline";
import { Route, Routes } from "react-router-dom";
import CoverLetter from "./components/CoverLetter/CoverLetter";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Banner/>}/>
        <Route path="/cover-letter" element={<CoverLetter/>}/>
    </Routes>
    
  )
}

export default App;