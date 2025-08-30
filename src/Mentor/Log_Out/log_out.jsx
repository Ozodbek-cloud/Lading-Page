import React, { useEffect, useState } from 'react'
import left_arrow from "../../img/left-arrow.png"
import begin from "../../img/begin.png"
import learning from "../../img/learning.png"
import comment from "../../img/chat.png"
import off from "../../img/power-on.png"
import tick from "../../img/yes.png"
import logo from "../../img/ChatGPT Image Aug 29, 2025, 03_50_29 PM.png"
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import { Badge, Avatar, Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

export default function Log_Out() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [notifCount, setNotifCount] = useState(3)
    const [openCourses, setOpenCourses] = useState(false)
    const [pos, setPos] = useState({ top: "50%", left: "50%" })
    const navigate = useNavigate()

    function moveButton() {
        const randomTop = Math.floor(Math.random() * 80) + 10
        const randomLeft = Math.floor(Math.random() * 80) + 10
        setPos({ top: `${randomTop}%`, left: `${randomLeft}%` })
    }

    function log_out() {
        localStorage.removeItem("token")
        navigate("/log")
    }

    return (
        <div className={`${darkMode ? "bg-[#101828]" : ""} h-screen flex bg-gray-50`}>
            {/* Sidebar */}
            <aside className={`${isCollapsed ? "w-[80px]" : "w-[300px]"} transition-all duration-300`}>
                <div className="bg-[#0f172a] text-white flex flex-col gap-6 p-4 h-full shadow-lg">
                    <div className="flex items-center justify-between">
                        {!isCollapsed && (
                            <div className="flex items-center gap-2">
                                <img src={tick} alt="tick" className="w-7" />
                                <h1 className="text-2xl font-bold">Edu<span className="text-[#e4b75a]">Nite</span></h1>
                            </div>
                        )}
                        <img
                            src={left_arrow}
                            alt="toggle"
                            className={`w-7 cursor-pointer transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`}
                            onClick={() => setIsCollapsed(!isCollapsed)}
                        />
                    </div>

                    {!isCollapsed && (
                        <div className="p-2 border rounded-2xl text-center bg-[#0b1220]/30">
                            <h2 className="text-sm tracking-wider">BOSHQARUV PANELI</h2>
                        </div>
                    )}

                    <nav className="flex flex-col gap-2 mt-2">
                        <div className="w-full">
                            <button
                                onClick={() => setOpenCourses(false)}
                                className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 w-full hover:bg-[#0b1728]/60 text-white"
                            >
                                <img src={begin} alt="Asosiy" className="w-6" />
                                {!isCollapsed && <span className="font-medium cursor-pointer"><Link to="/mentor">Asosiy</Link></span>}
                            </button>
                        </div>

                        <div className="w-full">
                            <button
                                onClick={() => setOpenCourses(!openCourses)}
                                className="flex items-center gap-4 p-3 rounded-xl  transition-all duration-200 w-full hover:bg-[#0b1728]/60 text-white"
                            >
                                <img src={learning} alt="Kurslar" className="w-6" />
                                {!isCollapsed && <span className="font-medium  cursor-pointer">Kurslar</span>}
                            </button>
                            {!isCollapsed && openCourses && (
                                <div className="ml-10 mt-2 space-y-2 text-sm text-white flex flex-col">
                                    <h1 className="font-semibold  cursor-pointer p-2 ">
                                        <Link to="/category_courses">Kategoriya</Link>
                                    </h1>
                                    <h1 className="font-semibold cursor-pointer p-2 ">
                                        <Link to="/all_courses">Barcha kurslar</Link>
                                    </h1>
                                </div>
                            )}
                        </div>

                        <div className="w-full">
                            <button
                                onClick={() => setOpenCourses(false)}
                                className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 w-full hover:bg-[#0b1728]/60 text-white"
                            >
                                <img src={comment} alt="Izohlar" className="w-6" />
                                {!isCollapsed && <span className="font-medium cursor-pointer"><Link to="/comments">Izohlar</Link></span>}
                            </button>
                        </div>

                        <div className="w-full">
                            <button
                                onClick={() => setOpenCourses(false)}
                                className="flex items-center gap-4 p-3 rounded-xl border border-[#e4b75a] transition-all duration-200 w-full hover:bg-[#0b1728]/60 text-white"
                            >
                                <img src={off} alt="Chiqish" className="w-6" />
                                {!isCollapsed && <span className="font-medium text-[#e4b75a] cursor-pointer"><Link to="/log_out">Chiqish</Link></span>}
                            </button>
                        </div>
                    </nav>

                    <div className="mt-auto">
                        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#0b1728]/60 transition cursor-pointer">
                            <PhoneInTalkIcon />
                            {!isCollapsed && <div>
                                <div className="text-sm font-semibold">Support</div>
                                <div className="text-xs text-gray-300">+998 90 000 00 00</div>
                            </div>}
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main */}
            <main className="flex-1 flex flex-col">
                <header className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={tick} alt="logo" className="w-7" />
                        <h1 className="text-lg font-semibold text-gray-800">Mentor</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition flex items-center" onClick={() => setNotifCount(0)}>
                            <Badge badgeContent={notifCount} color="error">
                                <NotificationsIcon fontSize="medium" />
                            </Badge>
                        </div>
                        <div className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition">
                            <SettingsIcon fontSize="medium" />
                        </div>
                        <div className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition flex items-center" onClick={() => setDarkMode((s) => !s)}>
                            <DarkModeIcon fontSize="medium" />
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 px-3 py-1 rounded-xl hover:shadow-md transition cursor-pointer">
                            <Avatar src={logo} alt="avatar" />
                            <div className="hidden sm:flex flex-col">
                                <span className="font-semibold text-sm">Ozodbek Nasriddinov</span>
                                <span className="text-xs text-gray-500">MENTOR</span>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="p-6 mt-5 flex justify-center">
                    <div className='justify-center flex flex-col'>
                        <h1 className="text-5xl font-bold text-red-700 mb-6 animate-blink">
                            Chiqish
                        </h1>

                        <Button
                            onClick={log_out}
                            variant="contained"
                            onMouseEnter={moveButton}
                            sx={{
                                position: "absolute",
                                top: pos.top,
                                left: pos.left,
                                backgroundColor: "red",
                                borderRadius: "10px",
                                padding: "12px 40px",
                                fontWeight: "bold",
                                textTransform: "none",
                                transition: "top 0.3s, left 0.3s",
                            }}
                        >
                            Log Out
                        </Button>
                    </div>
                </section>
            </main>
        </div>
    )
}
