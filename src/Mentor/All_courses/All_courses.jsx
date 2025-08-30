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
import axios from 'axios'

export default function All_Courses() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [notifCount, setNotifCount] = useState(3)
    const [openCourses, setOpenCourses] = useState(false)
    const [search, setSearch] = useState("")
    const [filtered, setFiltered] = useState([])
    const [category, setCategory] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('https://fn3.fixoo.uz/courses').then(data => {
            setCategory(data.data)
            setFiltered(data.data.data)
        })
    }, [])

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token) {
            navigate("/log")
        }
    }, [navigate])

    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [page, setPage] = useState(1)

    const totalPages = Math.ceil(category.length / rowsPerPage)
    const startIndex = (page - 1) * rowsPerPage
    const paginatedData = filtered.slice(startIndex, startIndex + rowsPerPage)

    function Search(e) {
        e.preventDefault()
        const result = filtered.filter(el =>
            el.name.toLowerCase().includes(search.toLowerCase())
        )
        setFiltered(result)
    }

    return (
        <div className={`${darkMode ? "bg-[#101828]" : ""} h-screen flex bg-gray-50`}>
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
                                className="flex items-center gap-4 p-3 border border-[#e4b75a] rounded-xl transition-all duration-200 w-full hover:bg-[#0b1728]/60 text-white"
                            >
                                <img src={learning} alt="Kurslar" className="w-6" />
                                {!isCollapsed && <span className="font-medium text-[#e4b75a] cursor-pointer">Kurslar</span>}
                            </button>

                            {!isCollapsed && openCourses && (
                                <div className="ml-10 mt-2 space-y-2 text-sm text-white flex flex-col transition-all duration-200 justify-start items-start ">
                                    <h1 className="font-semibold hover:underline cursor-pointer p-2">
                                        <Link to="/category_courses">Kategoriya</Link>
                                    </h1>
                                    <h1 className="font-semibold hover:underline text-[#e4b75a] cursor-pointer p-2">
                                        <Link to="/all_courses">Barcha kurslar</Link>
                                    </h1>
                                </div>
                            )}
                        </div>

                        <div className="w-full ">
                            <button
                                onClick={() => setOpenCourses(false)}
                                className="flex items-center gap-4 p-3  rounded-xl transition-all duration-200 w-full hover:bg-[#0b1728]/60 text-white"
                            >
                                <img src={comment} alt="Izohlar" className="w-6" />
                                {!isCollapsed && <span className="font-medium cursor-pointer"><Link to="/comments">Izohlar</Link></span>}
                            </button>
                        </div>

                        <div className="w-full">
                            <button
                                onClick={() => setOpenCourses(false)}
                                className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 w-full hover:bg-[#0b1728]/60 text-white"
                            >
                                <img src={off} alt="Chiqish" className="w-6" />
                                {!isCollapsed && <span className="font-medium cursor-pointer"><Link to="/log_out">Chiqish</Link></span>}
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

            <main className="flex-1 flex flex-col">
                <header className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={tick} alt="logo" className="w-7" />
                        <h1 className="text-lg font-semibold text-gray-800">Mentor</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <div
                            className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition flex items-center"
                            title="Notifications"
                            onClick={() => setNotifCount(0)}
                        >
                            <Badge badgeContent={notifCount} color="error">
                                <NotificationsIcon fontSize="medium" />
                            </Badge>
                        </div>
                        <div className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition" title="Settings">
                            <SettingsIcon fontSize="medium" />
                        </div>
                        <div
                            className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition flex items-center"
                            title="Toggle dark mode"
                            onClick={() => setDarkMode((s) => !s)}
                        >
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

                <section className="p-6 mt-5 overflow-auto">
                    <div className='flex justify-between items-center'>
                        <h1 className='text-3xl font-bold'>Kurslar</h1>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: "#e4b75a",
                                borderRadius: "10px",
                                padding: "12px 20px",
                                fontWeight: "bold",
                                textTransform: "none",
                                "&:hover": { backgroundColor: "#e4b75a" }
                            }}
                        >
                            + Qoshish
                        </Button>
                    </div>
                    <h1 className='text-2xl'>Kurslar <span>🟢</span></h1>

                    <div className='flex gap-5 mt-8'>
                        <input
                            onChange={e => setSearch(e.target.value)}
                            type="text"
                            placeholder='izlash'
                            className='border-2 border-[#e4b75a] py-3 px-3 rounded-2xl max-w-[500px] w-full'
                        />
                        <Button
                            onClick={Search}
                            variant="contained"
                            sx={{
                                backgroundColor: "#e4b75a",
                                borderRadius: "10px",
                                padding: "12px 20px",
                                fontWeight: "bold",
                                textTransform: "none",
                                "&:hover": { backgroundColor: "#e4b75a" }
                            }}
                        >
                            Kirish
                        </Button>
                    </div>

                    <table className="w-full border-collapse text-xl mt-10">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="text-left py-4 px-8 border-b">TR</th>
                                <th className="text-left py-4 px-8 border-b">Banner</th>
                                <th className="text-left py-4 px-8 border-b">Kurs nomi</th>
                                <th className="text-left py-4 px-8 border-b">Narxi</th>
                                <th className="text-left py-4 px-8 border-b">Bo‘limlar</th>
                                <th className="text-left py-4 px-8 border-b">Vazifalar</th>
                                <th className="text-left py-4 px-8 border-b">Savol Javoblar</th>
                                <th className="text-left py-4 px-8 border-b">Sotib Olishlar</th>
                                <th className="text-left py-4 px-8 border-b">Faol</th>
                                <th className="text-left py-4 px-8 border-b">Amallar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((item, idx) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="py-4 px-8 border-b">{idx + 1}</td>
                                    <td className="py-4 px-8 border-b">
                                        <img src={`https://fn3.fixoo.uz/uploads/banner/${item.banner}`} alt="banner" className="w-16 h-10 object-contain" />
                                    </td>
                                    <td className="py-4 px-8 border-b">{item.name}</td>
                                    <td className="py-4 px-8 border-b">{item.price}</td>
                                    <td className="py-4 px-8 border-b">
                                        <span className="bg-yellow-400 text-white px-3 py-1 rounded">bo‘lim</span>
                                    </td>
                                    <td className="py-4 px-8 border-b">
                                        <span className="bg-green-500 text-white px-3 py-1 rounded">vazifalar</span>
                                    </td>
                                    <td className="py-4 px-8 border-b">
                                        <span className="bg-blue-500 text-white px-3 py-1 rounded">savol javob</span>
                                    </td>
                                    <td className="py-4 px-8 border-b">{item._count.purchased}</td>
                                    <td className="py-4 px-8 border-b">
                                        <input type="checkbox" checked={item.published} className="form-checkbox w-5 h-5" />
                                    </td>
                                    <td className="py-4 px-8 border-b">
                                        <div className="flex space-x-2">
                                            <button className="text-blue-500 hover:underline">---</button>
                                            <button className="text-yellow-500 hover:underline">---</button>
                                            <button className="text-red-500 hover:underline">---</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-between items-center mt-8 text-gray-600 text-lg">
                        <div className="flex items-center gap-4">
                            <span>Rows per page:</span>
                            <select
                                value={rowsPerPage}
                                onChange={(e) => {
                                    setRowsPerPage(Number(e.target.value))
                                    setPage(1)
                                }}
                                className="border rounded px-4 py-2"
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                            </select>
                            <span>
                                {startIndex + 1}–
                                {Math.min(startIndex + rowsPerPage, filtered.length)} of {filtered.length}
                            </span>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                                disabled={page === 1}
                                className="px-4 py-2 border rounded disabled:opacity-50"
                            >
                                {"<"}
                            </button>
                            <button
                                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                                disabled={page === totalPages}
                                className="px-4 py-2 border rounded disabled:opacity-50"
                            >
                                {">"}
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
