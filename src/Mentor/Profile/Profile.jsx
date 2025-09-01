import React, { useEffect, useState, useRef } from 'react'
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
import { Badge, Avatar, Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

export default function Profile() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [notifCount, setNotifCount] = useState(3)
    const [openCourses, setOpenCourses] = useState(false)
    const [active, setActive] = useState("shaxsiy");
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)
    const navigate = useNavigate()

    const buttonStyle = {
        backgroundColor: "#ffffff",
        color: "#e4b75a",
        border: "2px solid #e4b75a",
        borderRadius: "16px",
        padding: "12px 24px",
        fontWeight: "bold",
        textTransform: "none",
        "&:hover": {
            backgroundColor: "#fdf7ec",
        },
    }

    function moveButton() {
        const randomTop = Math.floor(Math.random() * 80) + 10
        const randomLeft = Math.floor(Math.random() * 80) + 10
        setPos({ top: `${randomTop}%`, left: `${randomLeft}%` })
    }

    function log_out() {
        localStorage.removeItem("token")
        navigate("/log")
    }

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className={`bg-[#f0f1f3] ${darkMode ? "bg-[#101828]" : ""} h-screen flex bg-gray-50`}>
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
                                {!isCollapsed && <span className="font-medium cursor-pointer">Kurslar</span>}
                            </button>
                            {!isCollapsed && openCourses && (
                                <div className="ml-10 mt-2 space-y-2 text-sm text-white flex flex-col">
                                    <h1 className="font-semibold cursor-pointer p-2 ">
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
                                className="flex items-center gap-4 p-3 rounded-xl  transition-all duration-200 w-full hover:bg-[#0b1728]/60 text-white"
                            >
                                <img src={off} alt="Chiqish" className="w-6" />
                                {!isCollapsed && <span className="font-medium  cursor-pointer"><Link to="/log_out">Chiqish</Link></span>}
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
                    <div className="flex items-center gap-4 relative" ref={dropdownRef}>
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
                        <div
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center gap-3 bg-gray-50 px-3 py-1 rounded-xl hover:shadow-md transition cursor-pointer"
                        >
                            <Avatar src={logo} alt="avatar" />
                            <div className="hidden sm:flex flex-col">
                                <span className="font-semibold text-sm">Ozodbek Nasriddinov</span>
                                <span className="text-xs text-gray-500">MENTOR</span>
                            </div>
                        </div>
                        {dropdownOpen && (
                            <div className="absolute right-0 top-14 w-40 bg-white rounded-xl shadow-lg border py-2 z-50">
                                <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    Profil
                                </Link>
                                <button
                                    onClick={log_out}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Chiqish
                                </button>
                            </div>
                        )}
                    </div>
                </header>

                <section className="p-6 mt-5 flex justify-start flex-col gap-10">
                    <div>
                        <h1 className='font-bold text-3xl'>Shaxshiy Ma'lumotlar</h1>
                    </div>
                    <div className='flex'>
                        <div className="flex flex-col md:flex-row gap-8">
                            {/* Chap panel tugmalar */}
                            <div className="flex flex-col text-center gap-5 justify-start">
                                <Button sx={buttonStyle} onClick={() => setActive("shaxsiy")}>
                                    Shaxsiy Ma'lumotlar
                                </Button>
                                <Button sx={buttonStyle} onClick={() => setActive("profil")}>
                                    Profilni o'zgartirish
                                </Button>
                                <Button sx={buttonStyle} onClick={() => setActive("parol")}>
                                    Parolni o'zgartirish
                                </Button>
                                <Button sx={buttonStyle} onClick={() => setActive("telefon")}>
                                    Telefonni o'zgartirish
                                </Button>
                                <Button sx={buttonStyle} onClick={() => setActive("qurilmalar")}>
                                    Qurilmalar
                                </Button>
                            </div>

                            {/* O‘ng panel content */}
                            <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                                {active === "shaxsiy" && (
                                    <div>
                                        <h3 className="text-lg font-bold mb-4">Shaxsiy Ma'lumotlar</h3>
                                        <p>Ism: Azizbek</p>
                                        <p>Email: azizbek@example.com</p>
                                    </div>
                                )}

                                {active === "profil" && (
                                    <div>
                                        <h3 className="text-lg font-bold mb-4">Profilni o‘zgartirish</h3>
                                        <TextField label="Ism" fullWidth className="mb-4" />
                                        <TextField label="Familiya" fullWidth className="mb-4" />
                                        <Button variant="contained" sx={{ mt: 2, background: "#e4b75a" }}>
                                            Saqlash
                                        </Button>
                                    </div>
                                )}

                                {active === "parol" && (
                                    <div>
                                        <h3 className="text-lg font-bold mb-4">Parolni o‘zgartirish</h3>
                                        <TextField label="Eski Parol" type="password" fullWidth className="mb-4" />
                                        <TextField label="Yangi Parol" type="password" fullWidth className="mb-4" />
                                        <TextField label="Parolni Tasdiqlash" type="password" fullWidth className="mb-4" />
                                        <Button variant="contained" sx={{ mt: 2, background: "#e4b75a" }}>
                                            Yangilash
                                        </Button>
                                    </div>
                                )}

                                {active === "telefon" && (
                                    <div>
                                        <h3 className="text-lg font-bold mb-4">Telefonni o‘zgartirish</h3>
                                        <TextField label="Eski Telefon Raqam" fullWidth className="mb-4" />
                                        <TextField label="Yangi Telefon Raqam" fullWidth className="mb-4" />
                                        <Button variant="contained" sx={{ mt: 2, background: "#e4b75a" }}>
                                            Yangilash
                                        </Button>
                                    </div>
                                )}

                                {active === "qurilmalar" && (
                                    <div>
                                        <h3 className="text-lg font-bold mb-4">Qurilmalar</h3>
                                        <p>Oxirgi kirilgan qurilmalar ro‘yxati shu yerda chiqadi.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div></div>
                    </div>
                </section>
            </main>
        </div>
    )
}
