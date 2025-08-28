import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, IconButton, LinearProgress, Button } from '@mui/material'
import { Alert, Snackbar } from '@mui/material'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import logo_dark from "../../img/logo-dark.svg"
import logo_white from "../../img/logo (1).svg"
import sun from "../../img/sun.png"
import moon from "../../img/moon.png"
import play from "../../img/play.png"
import axios from 'axios'

function Contact() {
  const [showProgress, setProgres] = useState(true)
  const [dark, setDarkMode] = useState(false)
  const [fullName, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setProgres(false), 1000)
    return () => clearTimeout(timer)
  }, [])


  async function post_Comment(e) {
    e.preventDefault()
    let comment = await axios.post('https://fn3.fixoo.uz/api/contact', {
      fullName: fullName,
      phone: phone,
      message: message
    }).then(true)
    setSuccess(true)
    setError(false)
      .catch(error => {
        setError(true)
        setSuccess(false)
      })
  }


  return (
    <div className={`${dark ? "bg-[#101828] text-white" : "bg-white text-black"}`}>
      {/* HEADER */}
      <header className='h-auto pb-20'>
        <section className={`max-w-[1920px] shadow-md fixed top-0 left-0 w-full z-[999] backdrop-blur-[40px] ${dark ? "bg-[#101828] text-white" : "bg-white/70 text-black"}`}>
          {showProgress && (
            <Box sx={{ width: "100%" }} className="absolute">
              <LinearProgress />
            </Box>
          )}
          <div className='max-w-[1120px] mx-auto'>
            <nav className='flex justify-between items-center py-5'>
              {/* Logo + Menu */}
              <div className='flex items-center gap-10'>
                <img src={dark ? logo_white : logo_dark} alt="logo" />
                <ul className='flex gap-5'>
                  <li className='hover:text-blue-500 transition-all duration-300'><Link to="/">Asosiy</Link></li>
                  <li className='hover:text-blue-500 transition-all duration-300'><Link to="/course">Kurslar</Link></li>
                  <li className='hover:text-blue-500 transition-all duration-300'><Link to="/about_us">Biz Haqimizda</Link></li>
                  <li className='border-b-2 text-blue-500 transition-all duration-300'><Link to="/contact">Bog'lanish</Link></li>
                </ul>
              </div>

              <div className='flex items-center gap-4'>
                <button
                  onClick={() => setDarkMode(!dark)}
                  className={`p-3 rounded-full shadow ${dark ? "bg-black" : "bg-white"}`}
                >
                  <img src={dark ? moon : sun} alt="theme" className='w-[20px] h-[20px]' />
                </button>

                <button className={`p-3 rounded-[10px] px-6 font-bold transition ${dark ? "bg-white text-gray-800" : "bg-black text-white hover:opacity-80"}`}>
                  <Link to="/turn">Examify</Link>
                </button>

                <Button
                  component={Link}
                  to="/log"
                  variant="contained"
                  sx={{
                    backgroundColor: "#3B82F6",
                    borderRadius: "10px",
                    padding: "12px 20px",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#2563EB" }
                  }}
                >
                  Kirish
                </Button>
              </div>
            </nav>
          </div>
        </section>

        {/* Contact Hero */}
        <section className='relative max-w-[1150px] mx-auto pt-[150px]'>
          <div className="absolute top-[100px] right-[900px] w-[100px] h-[100px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full blur-[100px] bg-blue-500 opacity-15 -z-10"></div>

          <div className='relative z-10'>
            <p className='text-blue-500 font-bold'>Bog'lanish</p>
            <h1 className='text-[40px]'>Savollaringiz bo’lsa murojaat qiling</h1>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className='relative z-10 max-w-[1150px] mx-auto mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Telefon */}
          <div className='w-[350px] h-[200px] shadow-2xl flex items-start'>
            <IconButton sx={{ margin: '20px', borderRadius: '10px', backgroundColor: '#4285F4', color: 'white', width: 45, height: 45 }}>
              <PhoneInTalkIcon />
            </IconButton>
            <div className='ml-[20px]'>
              <h1 className='text-[20px] font-bold mb-[10px]'>Telefon</h1>
              <p>+998(91) 129 59 10</p>
            </div>
          </div>

          {/* Email */}
          <div className='w-[350px] h-[200px] shadow-2xl flex items-start'>
            <IconButton sx={{ margin: '20px', borderRadius: '10px', backgroundColor: '#4285F4', color: 'white', width: 45, height: 45 }}>
              <EmailIcon />
            </IconButton>
            <div className='ml-[20px]'>
              <h1 className='text-[20px] font-bold mb-[10px]'>Elektron Pochta</h1>
              <p>umidjonnajot@gmail.com</p>
            </div>
          </div>

          {/* Manzil */}
          <div className='w-[350px] h-[200px] shadow-2xl flex items-start'>
            <IconButton sx={{ margin: '20px', borderRadius: '10px', backgroundColor: '#4285F4', color: 'white', width: 45, height: 45 }}>
              <LocationOnIcon />
            </IconButton>
            <div className='ml-[20px]'>
              <h1 className='text-[20px] font-bold mb-[10px]'>Manzil</h1>
              <p>Farg‘ona shahar, Qirlola ko‘chasi 224-uy, Edu Pro</p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className={`relative z-10 max-w-[1150px] flex flex-col items-center justify-center mx-auto mt-[40px] border h-auto p-6 rounded-lg ${dark ? "bg-[#101828] text-white" : "bg-white text-black"}`}>
          <h1 className='text-3xl font-bold mb-6'>Murojaatlarni shu yerdan jo'nating</h1>
          <form className='flex flex-col gap-4 w-full max-w-[500px]'>
            <label className='font-bold'>To'liq ism</label>
            <input onChange={e => setName(e.target.value)} className='p-3 border rounded w-full bg-transparent text-inherit' type="text" placeholder='F.I.SH' />

            <label className='font-bold'>Telefon</label>
            <input onChange={e => setPhone(e.target.value)} className='p-3 border rounded w-full bg-transparent text-inherit' type="tel" placeholder='+998' />

            <label className='font-bold'>Xabar</label>
            <textarea onChange={e => setMessage(e.target.value)} className='p-3 border rounded w-full h-[120px] bg-transparent text-inherit' />

            <button onClick={post_Comment} type='submit' className='h-[50px] rounded bg-blue-500 text-white font-bold hover:opacity-80 transition'>
              Yuborish
            </button>
          </form>
        </section>

      </header>

      {/* FOOTER */}
      <footer className={`mt-[100px] py-10 ${dark ? "bg-[#0d1726] text-gray-300" : "bg-gray-50 text-black"}`}>
        <div className='max-w-[1120px] mx-auto text-center'>
          <img src={dark ? logo_white : logo_dark} alt="logo" className='mx-auto' />
          <h2 className='text-2xl font-bold mt-4'>Biz bilan muvaffaqiyatga erishing</h2>
          <p className={`${dark ? "text-gray-400" : "text-gray-600"} mt-2`}>
            Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan
          </p>

          <div className='flex justify-center gap-5 mt-6'>
            <button className={`p-2 rounded-[10px] px-8 font-bold flex gap-2 items-center ${dark ? "bg-white text-black" : "bg-white text-black border"} hover:opacity-50`}>
              <img src={play} alt="play" className='w-5' />
              Intro Video
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
                "&:hover": { backgroundColor: "#2563EB" }
              }}
            >
              Bog‘lanish
            </Button>
          </div>

          <div className='mt-10 border-t pt-4 flex justify-between text-sm'>
            <p>© ITLIVE 2024. Barcha huquqlar himoyalangan</p>
            <p>Xavfsizlik</p>
          </div>
        </div>
      </footer>
      {error && (
        <Alert severity="error" onClose={() => setError(false)}>
          Telefon yoki parol xato!
        </Alert>
      )}

      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Xabaringiz yuborildi ✅
        </Alert>
      </Snackbar>
    </div>
  )
}

export default Contact
