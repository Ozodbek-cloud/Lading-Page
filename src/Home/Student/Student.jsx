import React, { useState } from 'react'
import login from "../../img/login.png"
import { Alert, Button, Snackbar } from '@mui/material'
import { Link } from 'react-router-dom'
import logo_dark from "../../img/logo-dark.svg"
import axios from 'axios'

export default function Log() {
  const [phone, setPhone] = useState("")
  const [pass, setPass] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  async function post() {
    try {
      let res = await axios.post('https://edora-backend.onrender.com/auth/login', {
        phone: phone,
        password: pass
      })
      console.log(res.data)
      setSuccess(true)   
      setError(false)
    } catch (err) {
      console.error(err)
      setError(true)    
      setSuccess(false)
    }
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-[#eff8fe] flex justify-center items-center">
        <img src={login} alt="Login" className="max-w-[650px]" />
      </div>

      <div className="flex-1 flex justify-center items-center">
        <div className='absolute top-5 right-10 '>
          <Link to="/"><img src={logo_dark} alt="" /></Link>
        </div>

        <div className="w-[300px] flex flex-col gap-5">
          <h1 className='font-bold text-2xl text-center'>Kirish</h1>

          
          {error && (
            <Alert severity="error" onClose={() => setError(false)}>
              Telefon yoki parol xato!
            </Alert>
          )}

          <div>
            <h2 className="mb-2 text-lg font-semibold">Telefon</h2>
            <input
              onChange={e => setPhone(e.target.value)}
              type="text"
              className="w-full border px-3 py-2 rounded-md outline-none focus:border-blue-500"
              placeholder="+998"
            />
          </div>
          <div>
            <h2 className="mb-2 text-lg font-semibold">Parol</h2>
            <input
              onChange={e => setPass(e.target.value)}
              type="password"
              className="w-full border px-3 py-2 rounded-md outline-none focus:border-blue-500"
              placeholder="Parol"
            />
          </div>
          <div className='flex justify-end items-end'>
            <h1 className='text-blue-600 font-bold cursor-pointer'><Link to="/pass">Parolni Unutdingizmi ?</Link></h1>
          </div>
          <Button
            onClick={post}
            variant="contained"
            sx={{
              backgroundColor: "#3B82F6", borderRadius: "50px", padding: "12px 20px", fontWeight: "bold", textTransform: "none", "&:hover": {
                backgroundColor: "#2563EB",
              }
            }}
          >
            Kirish
          </Button>
          <div className='flex justify-between items-center'>
            <p className='font-bold'>Hisobingiz yoqmi ? </p> 
            <p className='text-blue-600 font-bold cursor-pointer'><Link to="/reg">Ro'yxatdan O'tish</Link></p>
          </div>
        </div>
      </div>

      
      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
      >
        <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
          Muvaffaqiyatli kirdingiz!
        </Alert>
      </Snackbar>
    </div>
  )
}
