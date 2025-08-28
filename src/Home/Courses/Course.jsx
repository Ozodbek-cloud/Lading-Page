import { Link } from 'react-router-dom'
import logo_dark from "../../img/logo-dark.svg"
import logo_white from "../../img/logo (1).svg"
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import moon from "../../img/moon.png"
import sun from "../../img/sun.png"
import play from "../../img/play.png"
import axios from 'axios'

export default function Course() {
    const [showProgress, setProgres] = useState(true)
    const [courses, setCourses] = useState([])
    const [category, setCategory] = useState("all")
    const [categorys, setCategorys] = useState([])
    const [filteredCourses, setFilteredCourses] = useState([])
    const [dark, setDarkMode] = useState(false)  

    useEffect(() => {
        const timer = setInterval(() => {
            setProgres(false)
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        axios.get('https://edora-backend.onrender.com/courses')
            .then(data => setCourses(data.data.data))
        axios.get('https://edora-backend.onrender.com/course-category/getAll')
            .then(data => setCategorys(data.data))
    }, [category])


    function search(categoryId) {
        if (categoryId === "all") {
            setFilteredCourses(courses);
        } else {
            let filteredCourse = courses.filter(el => el.category.id === categoryId);
            setFilteredCourses(filteredCourse);
        }
    }

    return (
        <div className={dark ? "bg-[#0f172a] text-white" : "bg-white text-black"}>
            {/* Navbar */}
            <header>
                <section className={`max-w-[1920px] shadow-md fixed top-0 left-0 w-full z-[999] backdrop-blur-[40px] ${dark ? "bg-[#101828] text-white" : "bg-white/70 text-black"}`}>
                    {showProgress && (
                        <Box sx={{ width: "100%" }} className="absolute">
                            <LinearProgress />
                        </Box>
                    )}
                    <div className='max-w-[1120px] mx-auto'>
                        <nav className='flex justify-between items-center py-5 mx-auto'>
                            <div className='flex items-center gap-10'>
                                <img src={dark ? logo_white : logo_dark} alt="logo" />
                                <ul className='flex gap-5'>
                                    <li className=' hover:text-blue-500 transition-all duration-300'>
                                        <Link to="/">Asosiy</Link>
                                    </li>
                                    <li className='border-b-2 text-blue-500  transition-all duration-300'>
                                        <Link to="/course">Kurslar</Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all duration-300'>
                                        <Link to="/about_us">Biz Haqimizda</Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all duration-300'>
                                        <Link to="/contact">Bog'lanish</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button
                                    onClick={() => setDarkMode(!dark)}
                                    className={`p-3 rounded-[50%] shadow ${dark ? 'bg-black' : 'bg-white'}`}
                                >
                                    <img src={dark ? moon : sun} alt="" className='w-[20px] h-[20px]' />
                                </button>
                                <button className={`p-3 bg-black rounded-[10px] px-6 hover:opacity-[0.8] transition-all duration-300 text-white font-bold ${dark ? "bg-white" : ""}`}>
                                    <Link to="/turn" className={`${dark ? "text-gray-800" : ""}`}>Examify</Link>
                                </button>
                                <Button
                                    component={Link}
                                    to="/student"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#3B82F6", borderRadius: "10px", padding: "12px 20px", fontWeight: "bold", textTransform: "none", "&:hover": {
                                            backgroundColor: "#2563EB",
                                        }
                                    }}
                                >
                                    Kirish
                                </Button>
                            </div>
                        </nav>
                    </div>
                </section>
            </header>

            {/* Main */}
            <main className='pt-20'>
                <section className='max-w-[1120px] mx-auto mt-[60px] text-center gap-5 flex flex-col'>
                    <div className='flex justify-between'>
                        <h1 className='text-5xl font-bold '>Kurslar</h1>
                    </div>

                    {/* Category filter */}
                    <div className='flex gap-4 mt-5 justify-center'>
                        {categorys.map(el => (
                            <Button
                                key={el.id}
                                onClick={() => search(el.id)}
                                variant="contained"
                                sx={{
                                    backgroundColor: "#3B82F6",
                                    borderRadius: "10px",
                                    color: "white",
                                    padding: "8px 32px",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "#2563EB",
                                    }
                                }}
                            >
                                {el.name}
                            </Button>
                        ))}
                    </div>

                    {/* Courses */}
                    <div className="mt-[30px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {(filteredCourses.length > 0 ? filteredCourses : courses).map(el => (
                            <div key={el._id} className="shadow-[0px_0px_6px_5px_rgba(0,_0,_0,_0.1)] rounded-[5px]">
                                <div>
                                    <img
                                        src={`https://edora-backend.onrender.com/uploads/banner/${el.banner}`}
                                        alt={el.name}
                                        className="w-full h-[200px] object-contain rounded-[5px]"
                                    />
                                </div>
                                <div className="flex items-center px-3 py-3 gap-2">
                                    <img
                                        src={`https://edora-backend.onrender.com/uploads/mentors/${el.mentor.image}`}
                                        alt={el.mentor.fullName}
                                        className="rounded-full w-9 h-9 object-cover"
                                    />
                                    <p className="font-bold">{el.mentor.fullName}</p>
                                </div>
                                <div className="flex justify-start px-3 flex-col items-start gap-2">
                                    <h1 className="text-2xl font-serif font-bold">{el.name}</h1>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-gray-600 font-bold">Chegirma:</p>
                                        <p className="text-[18px] font-bold">60%</p>
                                    </div>
                                    <div className="flex justify-start items-start flex-col gap-2">
                                        <p className="text-gray-600 font-bold">Kurs Narxi:</p>
                                        <div className="flex justify-between items-center w-[335px] pb-8">
                                            <del className="text-[18px] text-gray-600 font-bold">
                                                997500<sub>uzs</sub>
                                            </del>
                                            <p className="text-[22px] font-bold">
                                                {el.price} <sub>uzs</sub>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load more */}
                    <div className='flex justify-center mt-[30px]'>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#3B82F6",
                                borderRadius: "10px",
                                padding: "8px 32px",
                                fontWeight: "bold",
                                textTransform: "none",
                                "&:hover": {
                                    backgroundColor: "#2563EB",
                                }
                            }}
                        >
                            Ko'proq Ko'rish
                        </Button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className={`max-w-[1120px] mx-auto mt-[100px] text-center ${dark ? "text-gray-300" : "text-black"}`}>
                <section>
                    <div className='flex flex-col gap-2 items-center'>
                        <img src={dark ? logo_white : logo_dark} alt="" />
                        <h2 className='text-2xl font-bold'>Biz bilan muvaffaqiyatga erishing</h2>
                        <p className={`${dark ? "text-gray-400" : "text-gray-500"}`}>
                            Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan
                        </p>
                        <div className='flex gap-5 mt-2'>
                            <button className={`p-2 rounded-[10px] px-8 font-bold flex gap-2 items-center ${dark ? "bg-white text-black" : "bg-white text-black border"} hover:opacity-50 transition-all duration-200`}>
                                <img src={play} alt="" className='w-5' />
                                <Link to="/turn">Intro Video</Link>
                            </button>
                            <Button
                                component={Link}
                                to="/contact"
                                variant="contained"
                                sx={{
                                    backgroundColor: "#3B82F6",
                                    borderRadius: "10px",
                                    padding: "8px 32px",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    "&:hover": {
                                        backgroundColor: "#2563EB",
                                    }
                                }}
                            >
                                Bog'lanish
                            </Button>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <hr />
                        <div className='flex justify-between items-center p-4'>
                            <p>© ITLIVE 2024. Barcha huquqlar himoyalangan</p>
                            <p>Xavfsizlik</p>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    )
}
