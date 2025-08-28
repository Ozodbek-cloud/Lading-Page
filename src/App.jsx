import About from './Home/AboutUs/About'
import Contact from './Home/Contact/Contact'
import Course from './Home/Courses/Course'
import Main from './Home/Main/Main'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './Home/Student/Regsiter'
import Parol from './Home/Student/Parol'
import Log from './Home/Student/Student'
export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} /> 
          <Route path="/course" element={<Course />} /> 
          <Route path="/about_us" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/log" element={<Log />} /> 
          <Route path="/reg" element={<Register />} /> 
          <Route path="/pass" element={<Parol />} /> 
        </Routes>
      </Router>
  )
}
