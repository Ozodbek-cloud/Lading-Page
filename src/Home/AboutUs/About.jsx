import React from 'react'
import { Link } from 'react-router-dom'
import logo_dark from "../../img/logo-dark.svg"
import { Button } from '@mui/material'
import logo_white from "../../img/logo (1).svg"
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import moon from "../../img/moon.png"
import sun from "../../img/sun.png"
import play from "../../img/play.png"
import img1 from "../../img/img1.png"
import img2 from "../../img/img2.png"
import img3 from "../../img/img3.png"
import img4 from "../../img/img4.png"
import img5 from "../../img/img5.png"
import profile from "../../img/ronaldo-wallpaper-3.jpg"
import img6 from "../../img/0004.jpg"
import img7 from "../../img/0006.jpg"
import img8 from "../../img/027.jpg"
import axios from 'axios'

export default function About() {
  const [showProgress, setProgres] = useState(true)
  const [mentor, setMentors] = useState([])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgres(false)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    axios.get('http://18.199.221.227:1709/users/mentors')
      .then(res => {
        setMentors(res.data.data)
      })
  }, [])
  console.log(mentor)

  const [dark, setDarkMode] = useState(false)
  return (
    <div className={dark ? "bg-[#0f172a] text-white" : "bg-white text-black"}>
      <header>
        {/* Navbar Section */}
        <section className={`max-w-[1920px] shadow-md fixed top-0 left-0 w-full z-[999] backdrop-blur-[40px] ${dark ? "bg-[#101828] text-white" : "bg-white/70 text-black"}`}>
          {showProgress && (
            <Box sx={{ width: "100%" }} className="absolute">
              <LinearProgress />
            </Box>
          )}
          <div className='max-w-[1120px] mx-auto'>
            <nav className='flex justify-between items-center py-5 mx-auto'>
              <div className='flex items-center gap-10'>
                <img src={dark ? logo_white : logo_dark} alt="" />
                <ul className='flex gap-5'>
                  <li className=' hover:text-blue-500 transition-all duration-300'>
                    <Link to="/">Asosiy</Link>
                  </li>
                  <li className=' hover:text-blue-500 transition-all duration-300'>
                    <Link to="/course">Kurslar</Link>
                  </li>
                  <li className='border-b-2 text-blue-500 hover:text-blue-500 transition-all duration-300'>
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
                  to="/log"
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

      <main className='pt-20'>
        <div className='max-w-[1120px] mx-auto mt-[50px] '>
          <section>
            <div className='flex flex-col gap-6'>
              <h1 className='text-[40px] font-bold'>Biz Haqimizda</h1>
              <ul className='flex flex-col gap-2'>
                <li className='text-[14px]'>IT LIVE ACADEMY - 08.09.2022 yil tashkil etilgan va hozirgacha faoliyat olib kelmoqda. IT LIVE ACADEMY kompaniyasining asosiy faoliyat turi ikkiga bo'linadi,-Kelajak</li>
                <li className='text-[14px]'>kasblariga o'qitish -IT sohasida xizmatlarini yetkazib berish dan iborat. Bizning akademiyamiz axborot texnologiyalarining barcha tendensiyalari bilan yaqindan</li>
                <li className='text-[14px]'> tanishtiradi. Shinam o‘quv binosi va zamonaviy texnologiyalarga asoslangan kurslar dasturi bilan yurtimizning eng yirik, xalqaro kompaniyalarida IT karyerangizni</li>
                <li className='text-[14px]'> boshlaysiz.</li>
              </ul>
            </div>
          </section>
          <section className='mt-15 flex flex-col gap-10'>
            <div>
              <h1 className='text-3xl font-bold'>Media Galereya</h1>
            </div>
            <div className='grid grid-cols-3 gap-5'>
              <div className='h-60 '><img src={img1} alt="" /></div>
              <div className='h-60 '><img src={img2} alt="" /></div>
              <div className='h-60 '><img src={img3} alt="" /></div>
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <div className='h-80'><img src={img4} alt="" /></div>
              <div className='h-80'><img src={img5} alt="" /></div>

            </div>
          </section>
          <section className='max-w-[1300px]  mt-[120px] mx-auto '>
            <h1 className='text-5xl'>
              Sertifikat va guvohnomalar
            </h1>
            <div className='grid grid-cols-3 mt-[50px]'>
              <div className='w-[300px] bg-gray-200  h-[300px]  rounded-2xl'>
                <img className='w-[220px] mt-[50px] ml-[40px]' src={img6} alt="" />
              </div>
              <div className='w-[300px] bg-gray-200  h-[300px]  rounded-2xl'>
                <img className='w-[220px] mt-[40px] ml-[40px]' src={img7} alt="" />
              </div>
              <div className='w-[300px] bg-gray-200  h-[300px]  rounded-2xl'>
                <img className='w-[220px] mt-[40px] ml-[40px]' src={img8} alt="" />
              </div>
            </div>
          </section>


          <section className='mt-[120px] max-w-[1120px] mx-auto flex flex-col gap-5 items-center text-center'>
            <h1 className='text-5xl font-bold'>Tajribali Mentorlar</h1>
            <p className='mt-2 text-[20px]'>Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan</p>
            <div className='flex gap-5 flex-wrap justify-center'>
              {mentor.length > 0 ? (
                mentor.map((el, i) => (
                  <div key={i} className="relative h-[400px] w-[250px] rounded-3xl overflow-hidden group">
                    <img src={el.image} alt={el.fullName} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all"></div>
                    <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[90%] py-4 bg-gray-800/90 rounded-xl text-white text-center transition-all duration-500 group-hover:bottom-6">
                      <h2 className="font-bold text-lg">{el.fullName}</h2>
                      <p className="text-sm">{el.role}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Mentorlar hozircha mavjud emas</p>
              )}
            </div>

          </section>
        </div>

      </main>

      {/* Footer */}

      <footer className={`max-w-[1950px]  py-5 mt-[100px]  text-center ${dark ? "text-gray-300" : "text-black"}`}>
        <section className='max-w-[1120px] mx-auto '>
          <div className='flex flex-col gap-2 items-center'>
            <img src={dark ? logo_white : logo_dark} alt="" />
            <h2 className='text-2xl font-bold'>Biz bilan muvaffaqiyatga erishing</h2>
            <p className={`${dark ? "text-gray-400" : "text-gray-500"}`}>Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan</p>
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
      {/* Footer */}
    </div>
  )
}
