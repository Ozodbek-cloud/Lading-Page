import React from 'react'
import login from "../../img/login.png"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import logo_dark from "../../img/logo-dark.svg"

export default function Parol() {
    return (
        <div className="flex h-screen">
            <div className="flex-1 bg-[#eff8fe] flex justify-center items-center">
                <img src={login} alt="Login" className="max-w-[650px]" />
            </div>

            <div className="flex-1 flex justify-center items-center">
                <div className='absolute top-5 right-10 '>
                    <Link to="/">              <h1 className='text-4xl font-bold text-black'>Edu<span className='text-[#e4b75a] font-bold text-4xl'>Nite</span></h1>
</Link>
                </div>
                <div className="w-[300px] flex flex-col gap-3">
                    <h1 className='font-bold text-2xl text-center'>Parolni Qayta Ornatish</h1>
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">Telefon</h2>
                        <input
                            type="text"
                            className="w-full border px-3 py-2 rounded-md outline-none focus:border-blue-500"
                            placeholder="+998"
                        />
                    </div>
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">Yangi Parol</h2>
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
                            placeholder="tasdiqlash"
                        />
                    </div>
                    <Button
                        component={Link}
                        to="/turn"
                        variant="contained"
                        sx={{
                            backgroundColor: "#3B82F6", borderRadius: "50px", padding: "12px 20px", fontWeight: "bold", textTransform: "none", "&:hover": {
                                backgroundColor: "#2563EB",
                            }
                        }} >
                        Kirish
                    </Button>
                    <div className='flex justify-end items-center'>
                        <p className='text-blue-600 font-bold cursor-pointer'><Link to="/log">Ortga Qaytish</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
