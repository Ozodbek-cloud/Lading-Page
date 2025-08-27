import About from './Home/AboutUs/About'
import Contact from './Home/Contact/Contact'
import Course from './Home/Courses/Course'
import Main from './Home/Main/Main'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
export default function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} /> 
          <Route path="/course" element={<Course />} /> 
          <Route path="/about_us" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </Router>
  )
}
