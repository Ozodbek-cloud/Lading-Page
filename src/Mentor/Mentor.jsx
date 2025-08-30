import React, { useEffect, useState } from 'react'
import left_arrow from "../img/left-arrow.png"
import begin from "../img/begin.png"
import learning from "../img/learning.png"
import comment from "../img/chat.png"
import off from "../img/power-on.png"
import tick from "../img/yes.png"
import logo from "../img/ChatGPT Image Aug 29, 2025, 03_50_29 PM.png"
import NotificationsIcon from '@mui/icons-material/Notifications'
import SettingsIcon from '@mui/icons-material/Settings'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import { Badge, Avatar } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'

export default function Mentor() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [notifCount, setNotifCount] = useState(3)
  const [openCourses, setOpenCourses] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem("token")
    if (!token) {
      navigate("/log")
    }
  }, [navigate])

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

            <div className="w-full ">
              <button
                onClick={() => setOpenCourses(false)}
                className="flex items-center gap-4 p-3 rounded-xl border border-[#e4b75a] transition-all duration-200 focus:outline-none w-full hover:bg-[#0b1728]/60 text-white"
              >
                <img src={begin} alt="Asosiy" className="w-6" />
                {!isCollapsed && <span className="font-medium text-[#e4b75a] cursor-pointer">Asosiy</span>}
              </button>
            </div>

            <div className="w-full">
              <button
                onClick={() => setOpenCourses(!openCourses)}
                className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 focus:outline-none w-full hover:bg-[#0b1728]/60 text-white"
              >
                <img src={learning} alt="Kurslar" className="w-6" />
                {!isCollapsed && <span className="font-medium cursor-pointer">Kurslar</span>}
              </button>

              {!isCollapsed && openCourses && (
                <div className="ml-10 mt-2 space-y-2 text-sm text-white flex flex-col transition-all duration-200">
                  <Link to="/category_courses" className="font-semibold hover:underline cursor-pointer p-2">Kategoriya</Link>
                  <Link to="/all_courses" className="font-semibold hover:underline cursor-pointer p-2">Barcha kurslar</Link>
                </div>
              )}
            </div>

            <div className="w-full">
              <button
                onClick={() => setOpenCourses(false)}
                className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 focus:outline-none w-full hover:bg-[#0b1728]/60 text-white"
              >
                <img src={comment} alt="Izohlar" className="w-6" />
                {!isCollapsed && <span className="font-medium cursor-pointer"><Link to="/comments">Izohlar</Link></span>}
              </button>
            </div>

            <div className="w-full">
              <button
                onClick={() => setOpenCourses(false)}
                className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 focus:outline-none w-full hover:bg-[#0b1728]/60 text-white"
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
        <header className="w-full bg-white border-b shadow-sm px-6 py-3 flex items-center justify-between">
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

        <section className="p-6 overflow-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
              <h3 className="text-xl font-bold">Kurslar Statistikasi</h3>
              <p className="text-gray-500">Umumiy kurslar: 12</p>
              <p className="text-gray-500">Aktiv kurslar: 9</p>
              <p className="text-gray-500">Tugallangan kurslar: 3</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
              <h3 className="text-xl font-bold">Foydalanuvchilar Faoliyati</h3>
              <p className="text-gray-500">Yangi registratsiyalar: 15</p>
              <p className="text-gray-500">Aktiv foydalanuvchilar: 42</p>
              <p className="text-gray-500">Bugungi loginlar: 27</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col gap-4">
              <h3 className="text-xl font-bold">So‘nggi Vazifalar</h3>
              <p className="text-gray-500">Foydalanuvchi X registratsiyadan o‘tdi</p>
              <p className="text-gray-500">Kurs Y yakunlandi</p>
              <p className="text-gray-500">Komment Z qo‘shildi</p>
            </div>
          </div>

        </section>
      </main>
    </div>
  )
}
