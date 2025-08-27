import { Link } from 'react-router-dom'
import logo_dark from "../../img/logo-dark.svg"
import { Button } from '@mui/material'
import logo_white from "../../img/logo (1).svg"
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import moon from "../../img/moon.png"
import sun from "../../img/sun.png"
import play from "../../img/play.png"
import python from "../../img/pbf_fd37e99b-5b08-4e7f-b4af-595bb64707bf.png"
import foundation from "../../img/pbf_e6f6d199-accf-4f46-bb94-449c4997686e.png"
import user from "../../img/avatar-3.webp"
import user2 from "../../img/avatar-5.webp"

export default function Course() {
    const [showProgress, setProgres] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgres(false)
        }, 1000)
        return () => clearInterval(timer)
    }, [])


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
                                    <li className='border-b-2 text-blue-500  transition-all duration-300'>
                                        <Link to="/course">Kurslar</Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all duration-300'>
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
                                    to="/turn"
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
                <section className='max-w-[1120px] mx-auto mt-[60px] text-center gap-5 flex flex-col'>
                    <div className='flex justify-between'>
                        <h1 className='text-5xl font-bold '>Kurslar</h1>
                    </div>
                    <div className='flex gap-4 mt-5 justify-center'>
                        <Button

                            to="/turn"
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
                            Barcha Kurslar
                        </Button>
                        <Button

                            to="/turn"
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
                            Fronted
                        </Button>
                        <Button

                            to="/turn"
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
                            Backend
                        </Button>
                        <Button

                            to="/turn"
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
                            Foundation
                        </Button>
                        <Button

                            to="/turn"
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
                            Mobil
                        </Button>
                        <Button

                            to="/turn"
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
                            IT Matematika
                        </Button>

                    </div>
                    <div className='mt-[30px] flex-col justify-start items-start md:flex-row  flex gap-10'>
                        <div className='shadow-[0px_0px_6px_5px_rgba(0,_0,_0,_0.1)] rounded-[5px]'>
                            <img src={python} alt="" className='w-88 rounded-[5px]' />
                            <div className='flex  items-center px-3 py-3 gap-2'>
                                <img src={user} alt="" className='rounded-[50%] w-9' />
                                <p className='font-bold'>Ergashev Abdulla</p>
                            </div>
                            <div className='flex justify-start px-3 flex-col items-start gap-2'>
                                <h1 className='text-2xl font-serif font-bold'>PHP LARAVEL</h1>
                                <div className='flex justify-between items-center  w-82'>
                                    <p className='text-gray-600 font-bold'>Chegirma:</p>
                                    <p className='text-[18px] font-bold'>60%</p>
                                </div>
                                <div className='flex justify-start items-start flex-col gap-2'>
                                    <p className='text-gray-600 font-bold'>Kurs Narxi:</p>
                                    <div className='flex justify-between items-center w-82 pb-8'>
                                        <del className='text-[18px] text-gray-600 font-bold'>997500<sub>uzs</sub> </del>

                                        <p className='text-[22px] font-bold'>399000 <sub>uzs</sub></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-[0px_0px_6px_5px_rgba(0,_0,_0,_0.1)] rounded-[5px]'>
                            <img src={foundation} alt="" className='w-88 rounded-[5px]' />
                            <div className='flex  items-center px-3 py-3 gap-2'>
                                <img src={user2} alt="" className='rounded-[50%] w-9' />
                                <p className='font-bold'>Safarov Oybek</p>
                            </div>
                            <div className='flex justify-start px-3 flex-col items-start gap-2'>
                                <h1 className='text-2xl font-serif font-bold'>FOUNDATION</h1>
                                <div className='flex justify-between items-center  w-82'>
                                    <p className='text-gray-600 font-bold'>Chegirma:</p>
                                    <p className='text-[18px] font-bold'>60%</p>
                                </div>
                                <div className='flex justify-start items-start flex-col gap-2'>
                                    <p className='text-gray-600 font-bold'>Kurs Narxi:</p>
                                    <div className='flex justify-between items-center w-82 pb-8'>
                                        <del className='text-[18px] text-gray-600 font-bold'>747500<sub>uzs</sub> </del>

                                        <p className='text-[22px] font-bold'>299000 <sub>uzs</sub></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center mt-[30px]'>
                        <Button
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
                            Ko'proq Ko'rish
                        </Button>
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className={`max-w-[1120px] mx-auto mt-[100px] text-center ${dark ? "text-gray-300" : "text-black"}`}>
                <section>
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
                                to="/turn"
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
