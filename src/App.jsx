import About from './Home/AboutUs/About'
import Contact from './Home/Contact/Contact'
import Course from './Home/Courses/Course'
import Main from './Home/Main/Main'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './Home/Student/Regsiter'
import Parol from './Home/Student/Parol'
import Log from './Home/Student/Student'
import Mentor from './Mentor/Mentor'
import Category_courses from './Mentor/Category_Courses/Category_courses'
import All_Courses from './Mentor/All_courses/All_courses'
import Comment from './Mentor/Comment/Comment'
import Log_out from './Mentor/Log_Out/log_out'
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
          <Route path="/mentor" element={<Mentor />} />
          <Route path="/category_courses" element={<Category_courses />} />
          <Route path="/all_courses" element={<All_Courses />} />
          <Route path="/comments" element={<Comment />} />
          <Route path="/log_out" element={<Log_out />} />

        </Routes>
      </Router>
  )
}
