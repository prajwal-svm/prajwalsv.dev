import React from "react"
import { DarkIcon, LightIcon } from "./Icons"

const profileImgURI = 'https://media-exp1.licdn.com/dms/image/C5603AQGToDuonvh9IA/profile-displayphoto-shrink_200_200/0/1632905008936?e=1641427200&v=beta&t=q2ePdrzIr-02Xf1oA-UTK3HYC_kbMZwLrkF6LsG1Pkc'

const Header = ({ darkMode, setDarkMode, $window }) => {

    return (
        <header className="w-full min-h-full relative dark:text-gray-400 text-gray-800 mb-[300px]">
            <button
                title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="outline-none absolute border-4 border-gray-500 w-[60px] h-[60px] rounded-full z-10 w-[40px] h-[40px] ml-0 flex items-center justify-center top-6 right-10"
                onClick={() => setDarkMode(x => !x) && $window.localStorage.setItem('theme', darkMode ? 'light' : 'dark')}>
                {
                    darkMode ? <DarkIcon stroke='#60A5FA' /> : <LightIcon stroke='#FBBF24' />
                }
            </button>

            <div className="min-w-full h-screen max-h-auto">
                <div className="min-w-full h-[400px] bg-header bg-no-repeat"
                    style={{ backgroundImage: "url('https://coolwallpapers.me/picsup/3049226-clouds_high-tatras_lake_mountain_mountains_nature_rocks_slovakia_stones_tarn.jpg')" }} >
                </div>

                <div className="
                    w-[400px] 
                    h-[400px] 
                    bg-white 
                    dark:bg-gray-900 
                    rounded-full 
                    mx-auto 
                    mt-[-250px]  
                    flex items-center justify-center">

                    <div className="w-[380px] h-[380px] bg-[#5861E577] rounded-full flex items-center justify-center">
                        <img className="w-[350px] h-[350px] bg-[#5861E577] rounded-full" src={profileImgURI} />
                    </div>

                </div>

                <div className="text-center my-10">
                    <h1 className="text-7xl font-bold font-mono text-[#5861E5]">Prajwal S Venkatesh</h1>
                    <hr className="w-[340px] mx-auto mt-10 border-gray-400 bg-gray-400 border-2 rounded-full" />
                    <h3 className="
                    xl:text-4xl 
                    lg:text-3xl 
                    md:text-3xl 
                    sm:text-2xl 
                    xs:text-2xl 
                    
                    font-sans mt-12 px-[100px] leading-[3.3rem] lg:max-w-[80%] sm:max-w-full mx-auto">Hey there! I am a Software Engineer with 2+ years of experience in building scalable applications currently based out of Bengaluru, India. Feel free to download my resume or simply get in touch with me directly!</h3>
                    <div className="flex items-center justify-evenly sm:flex-col lg:flex-row flex-wrap mt-20 outline-none border-0 min-w-[600px] max-w-[1000px] mx-auto">
                        <a href="mailto:hire@prajwalsv.dev" target="_blank" className="text-3xl my-4 font-sans w-[240px] bg-[#5861E5] text-gray-100 rounded-full py-3 shadow-xl hover:bg-[#5861E5EE]">
                            Hire me!
                        </a>
                        <a href="https://firebasestorage.googleapis.com/v0/b/prajwalsv-dev.appspot.com/o/Prajwal_SVenkatesh_CV_2.pdf?alt=media" target="_blank" className="text-3xl my-4 font-sans w-[240px] bg-[#5861E5] text-gray-100 rounded-full py-3 shadow-xl hover:bg-[#5861E5EE]">
                            My Resume
                        </a>
                        <a href="mailto:contact@prajwalsv.dev" target="_blank" className="text-3xl my-4 font-sans w-[240px] bg-[#5861E5] text-gray-100 rounded-full py-3 shadow-xl hover:bg-[#5861E5EE]">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
