import React, { useState } from 'react'
import logo_white from "../img/logo (1).svg"
import left_arrow from "../img/left-arrow.png"
import begin from "../img/begin.png"
import learning from "../img/learning.png"
import comment from "../img/chat.png"
import off from "../img/power-on.png"
import logo from "../img/ChatGPT Image Aug 29, 2025, 03_50_29 PM.png" 
import tick from "../img/yes.png"

import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Badge } from '@mui/material'

export default function Mentor() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <section className={`${isCollapsed ? "w-[80px]" : "w-[300px]"} transition-all duration-300`}>
        <div className="bg-[#0f172a] flex flex-col gap-10 p-5 h-full">
          
          {/* Top bar */}
          <nav className="flex justify-between items-center w-full">
            {!isCollapsed && (
              <h1 className='text-4xl font-bold text-white'>Edu<span className='text-[#e4b75a] font-bold text-4xl'>Nite</span></h1>
            )}
            <img 
              src={left_arrow} 
              alt="Back" 
              className={`w-8 cursor-pointer transition-transform duration-300 ${isCollapsed ? "rotate-180" : ""}`} 
              onClick={() => setIsCollapsed(!isCollapsed)} 
            />
          </nav>

          {/* Title */}
          {!isCollapsed && (
            <div className='p-2 border rounded-3xl text-center'>
              <h1 className='text-white'>BOSHQARUV PANELI</h1>
            </div>
          )}

          {/* Menu */}
          <div className='w-full flex flex-col  gap-5'>
            <div className='flex gap-5 items-center p-2 rounded-2xl bg-blue-600'>
              <img src={begin} alt="" className='w-8' />
              {!isCollapsed && <h1 className='text-white transition-all duration-200 font-bold hover:text-[#e4b75a] cursor-pointer'>Asosiy</h1>}
            </div>
            <div className='flex gap-5 items-center p-2 rounded-2xl'>
              <img src={learning} alt="" className='w-8' />
              {!isCollapsed && <h1 className='text-white transition-all duration-200 hover:text-[#e4b75a] font-bold cursor-pointer'>Kurslar</h1>}
            </div>
            <div className='flex gap-5 items-center p-2 rounded-2xl'>
              <img src={comment} alt="" className='w-8' />
              {!isCollapsed && <h1 className='text-white font-bold transition-all duration-200 hover:text-[#e4b75a] cursor-pointer'>Izohlar</h1>}
            </div>
            <div className='flex gap-5 items-center p-2 rounded-2xl'>
              <img src={off} alt="" className='w-8' />
              {!isCollapsed && <h1 className='text-white font-bold transition-all duration-200 hover:text-[#e4b75a] cursor-pointer'>Chiqish</h1>}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1">
        <div className="p-5 w-full max-w-[1650px] border flex items-center justify-between">
          <div className='flex gap-3 items-center'>
            <img src={tick} alt="" className='w-8'/>
            <h1 className="text-2xl font-bold">Mentor</h1>
          </div>

          {/* Actions: qo‘ng‘iroq + notification */}
          <div className='flex items-center gap-6'>
            {/* Qo‘ng‘iroq */}
            <div className='flex items-center gap-2 cursor-pointer hover:text-[#e4b75a]'>
              <PhoneInTalkIcon fontSize="large" />
              <span className='hidden sm:block font-bold'>Qo‘ng‘iroq</span>
            </div>

            {/* Notification */}
            <div className='cursor-pointer hover:text-[#e4b75a]'>
              <Badge badgeContent={3} color="error">
                <NotificationsIcon fontSize="large" />
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
