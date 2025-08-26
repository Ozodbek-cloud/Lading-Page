import React from 'react'
import logo_dark from "../../img/logo-dark.svg"
import sun from "../../img/sun.png"
import hero_img from "../../img/home.png"
import brain from "../../img/3d-img.webp"
import profile from "../../img/ronaldo-wallpaper-3.jpg"
import amir_temur from "../../img/pbf_404c0fe0-c20e-4ae4-b3ef-75c6c30f79f6.png"
import quato from "../../img/quote.png"
import play from "../../img/play.png"
import { Link } from 'react-router-dom'

export default function Main() {
    return (
        <div>
            {/* Header */}
            <header >
                {/* Navbar Section */}
                <section className='max-w-[1920px] shadow-[0px_5px_6px_0px_rgba(0,_0,_0,_0.1)] fixed top-0 left-0 w-full z-[999] bg-transparent backdrop-blur-[40px]'>
                    <div className='max-w-[1120px] mx-auto'>
                        <nav className='flex justify-between items-center py-5 mx-auto md:flex '>
                            <div class="absolute bottom-[-500px] right-[1100px] w-[80px] h-[80px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full blur-[100px] bg-blue-500 opacity-25"></div>
                            <div className='flex items-center gap-10'>
                                <img src={logo_dark} alt="" />
                                <ul className='flex gap-5'>
                                    <li className='text-blue-500 border-b-2 hover:text-blue-500 transition-all duration-300'>
                                        <Link to="/turn">Asosiy</Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all duration-300'>
                                        <Link to="/turn">Kurslar</Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all duration-300'>
                                        <Link to="/turn">Biz Haqimizda</Link>
                                    </li>
                                    <li className='hover:text-blue-500 transition-all duration-300'>
                                        <Link to="/turn">Bog'lanish</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex items-center gap-4'>
                                <button className='p-3 rounded-[50%] shadow-[0px_0px_6px_4px_rgba(0,_0,_0,_0.1)]'>
                                    <img src={sun} alt="" className='w-[20px] h-[20px]' />
                                </button>
                                <button className='p-3 bg-black rounded-[10px] px-6 hover:shadow-[0px_8px_7px_6px_rgba(0,_0,_0,_0.1)] hover:opacity-[0.8] transition-all duration-300 text-white font-bold'>
                                    <Link to="/turn">Examify</Link>
                                </button>
                                <button className='p-3 bg-blue-500 rounded-[10px] px-5 text-white font-bold'>
                                    <Link to="/turn">Kirish</Link>
                                </button>
                            </div>
                        </nav>
                    </div>
                </section>

                {/* Navbar Section */}


                {/* Hero Section */}
                <section className='mt-[60px]'>
                    <div className='max-w-[1120px] mx-auto  flex justify-between md:mx-auto'>
                        <div className='mt-40 flex flex-col items-start justify-start gap-8'>
                            <ul className='flex flex-col gap-4'>
                                <li className='text-5xl font-bold'>
                                    <span className='text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#615DFF] to-[#F11]'>Kelajak kasblarni</span> biz
                                </li>
                                <li className='text-5xl font-bold'>bilan o'rganing!</li>
                                <li className='font-bold text-[#505167] mt-5'>Dasturlashni arzon va sifatle o'qib, o'z karyerangizni quring.</li>
                            </ul>
                            <button className='p-[10px] px-5 font-bold text-white rounded-4xl hover:shadow-[0px_8px_8px_0px_rgba(0,_0,_0,_0.1)] transition-all duration-200 bg-blue-500'>Kurslar Bilan tanishish</button>
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
            <main>
                {/* Courses Section */}
                <section>
                    <div className='max-w-[1120px] mx-auto  mt-[20px] flex flex-col items-center justify-center text-center gap-4'>
                        <h1 className='text-5xl font-bold'>Ommabop Kurslar</h1>
                        <ul className='flex flex-col gap-0.5'>
                            <li className='text-[17px] font-bold text-gray-400'>Kasbga yo'naltirilgan amaliy mashg'ulotlar yordamida tez va samarali ravishda mutaxassislar safiga qo'shiling. Har bir mashg'ulot</li>
                            <li className='text-[17px] font-bold text-gray-400'>sohaning yetakchi mutaxassislari tomonidan eng zamonaviy o'quv dasturi asosida tayyorlangan.</li>
                        </ul>
                    </div>
                </section>

                <section className='max-w-[1120px] mx-auto  mt-[30px]'>
                    <div className='flex gap-5 ml-20'>
                        <button className='px-4 bg-blue-500 text-white border border-blue-500 text-center py-2 rounded-[10px]'>Barcha Kurslar</button>
                        <button className='px-4 border text-center border-blue-500 text-blue-500 py-2 rounded-[10px]'>Backend</button>
                        <button className='px-4 border text-center border-blue-500 text-blue-500 py-2 rounded-[10px]'>Fronted</button>
                        <button className='px-4 border text-center border-blue-500 text-blue-500 py-2 rounded-[10px]'>Foundation</button>
                        <button className='px-4 border text-center border-blue-500 text-blue-500 py-2 rounded-[10px]'>Mobil</button>
                        <button className='px-4 border text-center border-blue-500 text-blue-500 py-2 rounded-[10px]'>IT Matematika</button>
                        <button className='px-4 border text-center border-blue-500 text-blue-500 py-2 rounded-[10px]'>Buxgalteriya</button>
                    </div>
                </section>
                <section className='mt-[30px] max-w-[1120px] mx-auto border'>
                    <div className='flex justify-start items-start'>
                        <div>
                            <div className='border'>

                            </div>
                            <div></div>
                        </div>

                        <button className='px-4 bg-blue-500 text-white border border-blue-500 text-center py-2 rounded-[10px]'>Koproq Korish</button>
                    </div>
                </section>
                {/* Courses Section */}

                {/* Contact Section */}
                <section className='mt-[50px] max-w-[1120px] mx-auto  flex flex-col gap-7'>
                    <div>
                        <h1 className='text-5xl font-bold'>Bizga Qoshiling</h1>
                        <p className='text-[20px] mt-5 text-gray-400'>Bizning safimizga nafaqat o’rganuvchi balki yetarlicha tajribangiz bo’lsa mentor sifatida ham qo’shilishingiz mumkin.</p>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex flex-col  justify-start items-start gap-10'>
                            <ul className='flex flex-col gap-5'>
                                <li className='text-3xl font-bold'>O'quvchimisiz?</li>
                                <li>Agarda o’quvchi bo’lsangiz bizning xalqaro darajadagi tajribali<br />mentorlarimizga shogird bo’ling</li>
                            </ul>
                            <button className='p-2 bg-blue-500 rounded-[10px] px-8 text-white font-bold'>
                                <Link to="/turn">Boshlash</Link>
                            </button>
                        </div>
                        <div className='flex flex-col  justify-start items-start gap-10'>
                            <ul className='flex flex-col gap-5'>
                                <li className='text-3xl font-bold'>Mentormisiz?</li>
                                <li>Bizning mualliflar jamoamizga qo’shilib, o’z tajribangizni boshqalar<br />bilan oson va qulay platforma orqali ulashing</li>
                            </ul>
                            <button className='p-2 bg-blue-500 rounded-[10px] px-8 text-white font-bold'>
                                <Link to="/turn">Boshlash</Link>
                            </button>
                        </div>
                    </div>
                </section>
                {/* Contact Section */}

                {/* Intro Section */}
                <section className='max-w-[1910px] mt-[50px]  bg-blue-500 py-10'>
                    <div className='max-w-[1120px] mx-auto  flex justify-between '>
                        <div className='mt-17  '>
                            <h1 className='text-5xl font-bold text-white'>Istalgan nuqtadan onlayn<br />o’qish imkoniyati</h1>
                            <p className='font-bold text-white mt-2'>Biz sizga bu imkoniyatni taqdim qilamiz</p>
                            <button className='p-[10px] mt-12 px-5 font-bold text-blue-500 rounded-[5px] hover:shadow-[0px_8px_8px_0px_rgba(0,_0,_0,_0.1)] transition-all duration-200 bg-white'>Ro'yxatdan O'tish</button>
                        </div>
                        <img src={brain} alt="" className='w-80' />
                    </div>
                </section>
                {/* Intro Section */}

                {/* Mentor Section */}
                <section className='mt-[50px] max-w-[1120px] mx-auto flex justify-center flex-col gap-5 items-center text-center'>
                    <div>
                        <h1 className='text-5xl font-bold'>Tajribali Mentorlar</h1>
                        <p className='mt-2 text-[23px]'>Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan</p>
                    </div>

                    <div className='flex gap-5'>
                        <div className="relative h-[400px] w-[250px] rounded-3xl overflow-hidden group">
                            <img src={profile} alt="" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[90%] py-4 bg-gray-800/90 rounded-xl text-white text-center transition-all duration-500 group-hover:bottom-6">
                                <h2 className="font-bold text-lg">Mentor Name</h2>
                                <p className="text-sm">Frontend Developer</p>
                            </div>
                        </div>

                        <div className="relative h-[400px] w-[250px] rounded-3xl overflow-hidden group">
                            <img src={profile} alt="" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[90%] py-4 bg-gray-800/90 rounded-xl text-white text-center transition-all duration-500 group-hover:bottom-6">
                                <h2 className="font-bold text-lg">Mentor Name</h2>
                                <p className="text-sm">Frontend Developer</p>
                            </div>
                        </div>


                        <div className="relative h-[400px] w-[250px] rounded-3xl overflow-hidden group">
                            <img src={profile} alt="" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[90%] py-4 bg-gray-800/90 rounded-xl text-white text-center transition-all duration-500 group-hover:bottom-6">
                                <h2 className="font-bold text-lg">Mentor Name</h2>
                                <p className="text-sm">Frontend Developer</p>
                            </div>
                        </div>

                        <div className="relative h-[400px] w-[250px] rounded-3xl overflow-hidden group">
                            <img src={profile} alt="" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                            <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[90%] py-4 bg-gray-800/90 rounded-xl text-white text-center transition-all duration-500 group-hover:bottom-6">
                                <h2 className="font-bold text-lg">Mentor Name</h2>
                                <p className="text-sm">Backend Developer</p>
                            </div>
                        </div>

                    </div>
                </section>
                {/* Mentor Section */}

                {/* Comment Section */}
                <section className='max-w-[1120px] mx-auto mt-[50px] flex justify-center flex-col items-center text-center'>
                    <h1 className='text-5xl font-bold'>Izohlar</h1>
                    <p className='text-[25px] mt-[20px]'>O’quvchilarimiz tomonidan qoldirilgan izohlar</p>

                    <div className="max-w-[1200px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl  p-3 flex shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)] justify-start items-start px-5 w-[350px] flex-col gap-3 hover:shadow-lg transition">
                            <img src={quato} alt="" className='w-15' />
                            <p className="text-gray-700 text-lg">Judaxam Zo'r</p>
                            <div className="flex items-center gap-3 mt-2">
                                <img
                                    src={amir_temur}
                                    alt="user"
                                    className="w-12 h-12 rounded-full object-cover border"
                                />
                                <div>
                                    <h3 className="font-semibold">Eldorbek Baxronov</h3>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span className="text-yellow-500 text-lg">★★★★★</span>
                                        <span className="ml-2">7 oy oldin</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm">HTML CSS kursi o‘quvchisi</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)]  justify-start items-start p-3 flex  px-5 flex-col gap-3 hover:shadow-lg transition">
                            <img src={quato} alt="" className='w-15' />
                            <p className="text-gray-700 text-lg">Zo'r</p>
                            <div className="flex items-start gap-3 mt-2">
                                <img
                                    src={amir_temur}
                                    alt="user"
                                    className="w-12 h-12 rounded-full object-cover border"
                                />
                                <div>
                                    <h3 className="font-semibold">Tursunqulov Islom</h3>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span className="text-yellow-500 text-lg">★★★★★</span>
                                        <span className="ml-2">7 oy oldin</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm">HTML CSS kursi o‘quvchisi</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-[0px_4px_6px_10px_rgba(0,_0,_0,_0.1)]  justify-start items-start p-3 flex px-5 flex-col gap-3 hover:shadow-lg transition">
                            <img src={quato} alt="" className='w-15' />
                            <p className="text-gray-700 text-lg">Zo'r</p>
                            <div className="flex items-center gap-3 mt-2">
                                <img
                                    src={amir_temur}
                                    alt="user"
                                    className="w-12 h-12 rounded-full object-cover border"
                                />
                                <div>
                                    <h3 className="font-semibold">Umrzqov Davron</h3>
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span className="text-yellow-500 text-lg">★★★★★</span>
                                        <span className="ml-2">7 oy oldin</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm">HTML CSS kursi o‘quvchisi</p>
                        </div>
                    </div>
                </section>
                {/* Comment Section */}

            </main>
            {/* Main */}


            {/* Footer */}

            <footer className='max-w-[1120px] mx-auto mt-[100px] flex justify-center items-center text-center '>
                <section>
                    <div className='flex justify-center items-center flex-col gap-2' >
                        <img src={logo_dark} alt="" />
                        <h2 className='text-2xl font-bold'>Biz bilan muvaffaqiyatga erishing</h2>
                        <p className='text-gray-400'>Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan</p>
                        <div className='flex gap-5 mt-2'>

                            <button className='p-2 bg-white rounded-[10px] px-8 text-black border font-bold flex justify-center items-center gap-2'>
                                <img src={play} alt="" className='w-5' />
                                <Link to="/turn">Intro Video</Link>
                            </button>

                            <button className='p-2 bg-blue-500 rounded-[10px] px-8 text-white font-bold'>
                                <Link to="/turn">Boglanish</Link>
                            </button>
                        </div>
                    </div>
                    <div className='mt-15 '>
                        <hr className='w-6xl '/>
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
