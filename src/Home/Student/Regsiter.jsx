import React from 'react'
import login from "../../img/login.png"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import logo_dark from "../../img/logo-dark.svg"

export default function Register() {
    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-[#eff8fe] flex justify-center items-center">
                <img src={login} alt="Login" className="max-w-[650px]" />
            </div>

            <div className="flex-1 flex justify-center items-center">
                <div className='absolute top-5 right-10 '>
                         <Link to="/"><img src={logo_dark} alt="" /></Link>
                      </div>
                <div className="w-[300px] flex flex-col gap-3">
                    <h1 className='font-bold text-3xl text-center'>Ro'yxatdan o'tish</h1>
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">F.I.SH</h2>
                        <input
                            type="text"
                            className="w-full border px-3 py-2 rounded-md outline-none focus:border-blue-500"
                            placeholder="kirish"
                        />
                    </div>
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">Telefon</h2>
                        <input
                            type="text"
                            className="w-full border px-3 py-2 rounded-md outline-none focus:border-blue-500"
                            placeholder="+998"
                        />
                    </div>
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">Parol</h2>
                        <input
                            type="password"
                            className="w-full border px-3 py-2 rounded-md outline-none focus:border-blue-500"
                            placeholder="Parol"
                        />
                    </div>
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">Parolni Tasdiqlash</h2>
                        <input
                            type="password"
                            className="w-full border px-3 py-2 rounded-md outline-none focus:border-blue-500"
                            placeholder="Tasdiqlash"
                        />
                    </div>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#3B82F6", borderRadius: "50px", padding: "12px 20px", fontWeight: "bold", textTransform: "none", "&:hover": {
                                backgroundColor: "#2563EB",
                            }
                        }}
                    >
                        Kirish
                    </Button>
                    <div className='flex justify-center gap-1 items-center'>
                        <p className='font-bold'>Menda Hisob Mavjud </p> <p className='text-blue-600 font-bold cursor-pointer'><Link to="/log" >Kirish</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
