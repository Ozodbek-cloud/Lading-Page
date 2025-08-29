import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, LinearProgress, Button, Dialog, DialogContent, Typography, CircularProgress, IconButton } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
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

  const [modal, setModal] = useState({
    open: false,
    loading: false,
    success: false,
    error: ""
  })

  useEffect(() => {
    const timer = setTimeout(() => setProgres(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  async function post_Comment(e) {
    e.preventDefault()

    if (!message.trim()) {
      setModal({ open: true, loading: false, success: false, error: "Xabar yozilmadi!" })
      return
    }

    setModal({ open: true, loading: true, success: false, error: "" })

    try {
      await axios.post('https://fn3.fixoo.uz/api/contact', {
        fullName,
        phone,
        message
      })
      setModal({ open: true, loading: false, success: true, error: "" })
      setName("")
      setPhone("")
      setMessage("")
    } catch (err) {
      setModal({
        open: true,
        loading: false,
        success: false,
        error: "Xabar yuborishda xatolik yuz berdi!"
      })
    } finally {
      setTimeout(() => {
        setModal({ open: false, loading: false, success: false, error: "" })
      }, 3000)
    }
  }

  return (
    <div className={`${dark ? "bg-[#101828] text-white" : "bg-white text-black"}`}>
      {/* HEADER */}
      <header className='h-auto pb-20'>
        <section className={`max-w-[1920px] shadow-md fixed top-0 left-0 w-full z-[999] backdrop-blur-[40px] ${dark ? "bg-[#101828] text-white" : "bg-white/70 text-black"}`}>
          {showProgress && (
            <Box sx={{ width: "100%" }} className="absolute">
              <LinearProgress
                sx={{
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#e4b75a",
                  },
                  backgroundColor: "#f5f5f5",
                }}
              />
            </Box>
          )}
          <div className='max-w-[1120px] mx-auto'>
            <nav className='flex justify-between items-center py-5'>
              {/* Logo + Menu */}
              <div className='flex items-center gap-10'>
                <h1 className='text-4xl font-bold text-black'>Edu<span className='text-[#e4b75a] font-bold text-4xl'>Nite</span></h1>
                <ul className='flex gap-5'>
                  <li className='hover:text-[#e4b75a] transition-all duration-300'><Link to="/">Asosiy</Link></li>
                  <li className='hover:text-[#e4b75a] transition-all duration-300'><Link to="/course">Kurslar</Link></li>
                  <li className='hover:text-[#e4b75a] transition-all duration-300'><Link to="/about_us">Biz Haqimizda</Link></li>
                  <li className='border-b-2 text-[#e4b75a] transition-all duration-300'><Link to="/contact">Bog'lanish</Link></li>
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
            </nav>
          </div>
        </section>

        {/* Contact Hero */}
        <section className='relative max-w-[1150px] mx-auto pt-[150px]'>
          <div className="absolute top-[100px] right-[900px] w-[100px] h-[100px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full blur-[100px] bg-[#e4b75a] opacity-15 -z-10"></div>

          <div className='relative z-10'>
            <p className='text-[#e4b75a] font-bold'>Bog'lanish</p>
            <h1 className='text-[40px]'>Savollaringiz bo’lsa murojaat qiling</h1>
          </div>
        </section>

        {/* Contact Form */}
        <section className={`relative z-10 max-w-[1150px] flex flex-col items-center justify-center mx-auto mt-[40px] border h-auto p-6 rounded-lg ${dark ? "bg-[#101828] text-white" : "bg-white text-black"}`}>
          <h1 className='text-3xl font-bold mb-6'>Murojaatlarni shu yerdan jo'nating</h1>
          <form className='flex flex-col gap-4 w-full max-w-[500px]' onSubmit={post_Comment}>
            <label className='font-bold'>To'liq ism</label>
            <input value={fullName} onChange={e => setName(e.target.value)} className='p-3 border rounded w-full bg-transparent text-inherit' type="text" placeholder='F.I.SH' />

            <label className='font-bold'>Telefon</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} className='p-3 border rounded w-full bg-transparent text-inherit' type="tel" placeholder='+998' />

            <label className='font-bold'>Xabar</label>
            <textarea value={message} onChange={e => setMessage(e.target.value)} className='p-3 border rounded w-full h-[120px] bg-transparent text-inherit' />

            <button type='submit' className='h-[50px] rounded bg-[#e4b75a] text-white font-bold hover:opacity-80 transition'>
              Yuborish
            </button>
          </form>
        </section>
      </header>

      {/* MODAL */}
      <Dialog
        open={modal.open}
        onClose={() => setModal({ ...modal, open: false })}
        PaperProps={{
          style: {
            borderRadius: 20,
            padding: "20px",
            textAlign: "center",
            minWidth: "300px",
          },
        }}
      >
        <DialogContent>
          {modal.loading ? (
            <>
              <CircularProgress size={70} sx={{ color: "blue" }} />
              <Typography mt={2} fontWeight="bold" fontSize={20}>
                Yuborilmoqda...
              </Typography>
            </>
          ) : modal.success ? (
            <>
              <CheckCircleIcon sx={{ fontSize: 70, color: "green" }} />
              <Typography mt={2} fontWeight="bold" fontSize={20}>
                Xabar muvaffaqiyatli yuborildi!
              </Typography>
            </>
          ) : (
            modal.error && (
              <>
                <ErrorIcon sx={{ fontSize: 70, color: "red" }} />
                <Typography mt={2} fontWeight="bold" fontSize={20}>
                  {modal.error}
                </Typography>
              </>
            )
          )}
        </DialogContent>
      </Dialog>
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
                  backgroundColor: "#e4b75a",
                  borderRadius: "10px",
                  padding: "8px 32px",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#e4b75a",
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

export default Contact
