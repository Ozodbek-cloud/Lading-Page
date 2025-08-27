import React, { useEffect, useState } from 'react'
import logo_dark from "../../img/logo-dark.svg"
import sun from "../../img/sun.png"
import hero_img from "../../img/home.png"
import brain from "../../img/3d-img.webp"
import profile from "../../img/ronaldo-wallpaper-3.jpg"
import amir_temur from "../../img/pbf_404c0fe0-c20e-4ae4-b3ef-75c6c30f79f6.png"
import quato from "../../img/quote.png"
import play from "../../img/play.png"
import { Link } from 'react-router-dom'
import moon from "../../img/moon.png"
import logo_white from "../../img/logo (1).svg"
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import python from "../../img/pbf_fd37e99b-5b08-4e7f-b4af-595bb64707bf.png"
import foundation from "../../img/pbf_e6f6d199-accf-4f46-bb94-449c4997686e.png"
import user from "../../img/avatar-3.webp"
import user2 from "../../img/avatar-5.webp"
export default function Main() {
    const [showProgress, setProgres] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgres(false)
        }, 1000)
        return () => clearInterval(timer)
    }, [])


    const [dark, setDarkMode] = useState(false)
    //  async function getCourses() {
    //     let courses = await 
    //  }
    return (
        <div className={dark ? "bg-[#0f172a] text-white" : " bg-white text-black"}>
            {/* Header */}
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
                                    <li className='text-blue-500 border-b-2 hover:text-blue-500 transition-all duration-300'>
                                        <Link to="/">Asosiy</Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all duration-300'>
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
                {/* Navbar Section */}

                {/* Hero Section */}
                <section className={`mt-[80px]  ${dark ? "bg-[#0f172a] text-white" : "bg-white text-black"}`}>
                    <div className='max-w-[1120px]  mx-auto flex justify-between'>
                        <div className='mt-40 flex flex-col items-start gap-8'>
                            <ul className='flex flex-col gap-4'>
                                <li className='text-5xl font-bold'>
                                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#615DFF] to-[#F11]'>Kelajak kasblarni</span> biz
                                </li>
                                <li className='text-5xl font-bold'>bilan o'rganing!</li>
                                <li className={`font-bold mt-5 ${dark ? "text-gray-300" : "text-[#505167]"}`}>
                                    Dasturlashni arzon va sifatle o'qib, o'z karyerangizni quring.
                                </li>
                            </ul>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#3B82F6",
                                    borderRadius: "9999px",
                                    padding: "10px 20px",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    "&:hover": {
                                        opacity: 0.8,
                                        backgroundColor: "#3B82F6",
                                    },
                                    transition: "all 0.3s ease"
                                }}
                            >
                                Kurslar Bilan tanishish
                            </Button>
                        </div>
                        <div>
                            <img src={hero_img} alt="" />
                        </div>
                    </div>
                </section>
                {/* Hero Section */}
            </header>
            {/* Header */}

            {/* Main */}
            <main >
                {/* Courses Section */}
                <section className='max-w-[1120px] mx-auto mt-[60px] text-center'>
                    <h1 className='text-5xl font-bold'>Ommabop Kurslar</h1>
                    <p className={`mt-3 text-[17px] font-bold ${dark ? "text-gray-300" : "text-gray-400"}`}>
                        Kasbga yo'naltirilgan amaliy mashg'ulotlar yordamida tez va samarali ravishda mutaxassis bo'ling.
                    </p>
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

                {/* Contact Section */}
                <section className='mt-[50px] max-w-[1120px] mx-auto flex flex-col gap-7'>
                    <div>
                        <h1 className='text-5xl font-bold'>Bizga Qoshiling</h1>
                        <p className={`text-[20px] mt-5 ${dark ? "text-gray-300" : "text-gray-400"}`}>

                            Bizning safimizga nafaqat o’rganuvchi balki yetarlicha tajribangiz bo’lsa mentor sifatida ham qo’shilishingiz mumkin.
                        </p>
                    </div>
                    <div className='flex justify-between  '>
                        <div className='flex flex-col gap-10 justify-start items-start'>
                            <ul className='flex flex-col gap-5'>
                                <li className='text-3xl font-bold'>O'quvchimisiz?</li>
                                <li>Agarda o’quvchi bo’lsangiz bizning xalqaro darajadagi tajribali<br />mentorlarimizga shogird bo’ling</li>

                            </ul>
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
                                Boshlash
                            </Button>
                        </div>
                        <div className='flex flex-col gap-10 justify-start items-start'>
                            <ul className='flex flex-col gap-5'>
                                <li className='text-3xl font-bold'>Mentormisiz?</li>
                                <li>Bizning mualliflar jamoamizga qo’shilib, o’z tajribangizni boshqalar<br />bilan oson va qulay platforma orqali ulashing</li>
                            </ul>
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
                                Boshlash
                            </Button>
                        </div>
                    </div>
                </section>
                {/* Contact Section */}

                {/* Intro Section */}
                <section className={`max-w-[1920px] mt-[50px] py-10 ${dark ? "bg-blue-500" : "bg-blue-500"}`}>
                    <div className='max-w-[1120px] mx-auto flex justify-between'>
                        <div>
                            <h1 className='text-5xl font-bold text-white'>Istalgan nuqtadan onlayn<br />o’qish imkoniyati</h1>
                            <p className='font-bold text-white mt-2'>Biz sizga bu imkoniyatni taqdim qilamiz</p>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#FFFFFF",
                                    color: "#3B82F6",
                                    borderRadius: "5px",
                                    marginTop: "48px",
                                    padding: "10px 20px",
                                    fontWeight: "bold",
                                    textTransform: "none",
                                    "&:hover": {
                                        opacity: 0.8,
                                        backgroundColor: "#FFFFFF",
                                    },
                                    transition: "all 0.3s ease"
                                }}
                            >
                                Ro'yxatdan O'tish
                            </Button>
                        </div>
                        <img src={brain} alt="" className='w-80' />
                    </div>
                </section>
                {/* Intro Section */}

                {/* Mentor Section */}
                <section className='mt-[50px] max-w-[1120px] mx-auto flex flex-col gap-5 items-center text-center'>
                    <h1 className='text-5xl font-bold'>Tajribali Mentorlar</h1>
                    <p className='mt-2 text-[20px]'>Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan</p>
                    <div className='flex gap-5'>
                        {[1, 2, 3, 4].map((_, i) => (
                            <div key={i} className="relative h-[400px] w-[250px] rounded-3xl overflow-hidden group">
                                <img src={profile} alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all"></div>
                                <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[90%] py-4 bg-gray-800/90 rounded-xl text-white text-center transition-all duration-500 group-hover:bottom-6">
                                    <h2 className="font-bold text-lg">Mentor Name</h2>
                                    <p className="text-sm">Developer</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* Mentor Section */}

                {/* Comment Section */}
                <section className='max-w-[1120px] mx-auto mt-[50px] text-center'>
                    <h1 className='text-5xl font-bold'>Izohlar</h1>
                    <p className='text-[20px] mt-[20px]'>O’quvchilarimiz tomonidan qoldirilgan izohlar</p>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {["Eldorbek Baxronov", "Tursunqulov Islom", "Umrzqov Davron"].map((name, i) => (
                            <div key={i} className={`rounded-xl p-5 flex flex-col  justify-start items-start gap-3 shadow transition ${dark ? "bg-[#1f2937] text-white" : "bg-white text-black"}`}>
                                <img src={quato} alt="" className='w-10' />
                                <p>Judaxam Zo'r</p>
                                <div className="flex items-center gap-3 mt-2">
                                    <img src={amir_temur} alt="user" className="w-12 h-12 rounded-full border" />
                                    <div>
                                        <h3 className="font-semibold">{name}</h3>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <span className="text-yellow-500 text-lg">★★★★★</span>
                                            <span className="ml-2">7 oy oldin</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm">HTML CSS kursi o‘quvchisi</p>
                            </div>
                        ))}
                    </div>
                </section>
                {/* Comment Section */}
            </main>
            {/* Main */}

            {/* Footer */}
            <footer className={`max-w-[1750px]  mx-auto mt-[100px] text-center p-15 ${dark ? "text-gray-300" : "text-black"}`}>
                <section className='max-w-[1120px] mx-auto'>
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
