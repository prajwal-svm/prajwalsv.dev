import React, { useEffect, useState } from "react"

const HomeIcon = ({stroke = '#333'}) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>

const AboutIcon = ({stroke = '#333'}) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>

const CalendarIcon = ({stroke = '#333'}) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>

const WorkIcon = ({stroke = '#333'}) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>

const BulbIcon = ({stroke = '#333'}) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
</svg>

const MessageIcon = ({stroke = '#333'}) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
</svg>

const ProjectsIcon = ({stroke = '#333'}) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>

const LightIcon = ({stroke = '#333'}) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>

const DarkIcon = ({stroke = '#333'}) => <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>

const NavItem = (props) => (
<div className="
my-4 p-4 
border-2 rounded-full border-gray-700 
cursor-pointer 
hover:border-dashed hover:bg-gray-100
dark:border-gray-600 dark:hover:bg-gray-800">
  {props.children}
</div>)

const $window = typeof window !== 'undefined' ? window : { localStorage: { getItem: () => null, setItem: () => null } }

const Root = () => {

  const [darkMode, setDarkMode] = useState($window.localStorage.theme === 'dark' || (!('theme' in $window.localStorage) && $window.matchMedia?.('(prefers-color-scheme: dark)').matches))

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark:bg-gray-900')
      $window.localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark:bg-gray-900')
      $window.localStorage.removeItem('theme')
    }
  },[darkMode])

  return (
    <main className="
    dark:bg-gray-900
    mx-4
    min-w-screen
    min-h-screen
    dark:text-gray-400
    text-gray-800
  "
    >
      <button
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
       className="fixed z-10 w-[40px] h-[40px] ml-0 flex items-center justify-center top-4 right-10"
       onClick={() => setDarkMode(x => !x) && $window.localStorage.setItem('theme', darkMode ? 'light': 'dark')}>
        {
          darkMode ? <DarkIcon stroke={darkMode ? '#9ca3af' : '#333333'}/> : <LightIcon stroke={darkMode ? '#9ca3af' : '#333333'}/>
        }
      </button>
      <div className="w-[60px] min-h-screen flex flex-col items-center justify-evenly fixed dark:bg-gray-900">
        <nav>
        <NavItem>
          <HomeIcon stroke={darkMode ? '#9ca3af' : '#333333'}/>
        </NavItem>
        <NavItem>
          <AboutIcon stroke={darkMode ? '#9ca3af' : '#333333'}/>
        </NavItem>
        <NavItem>
          <WorkIcon stroke={darkMode ? '#9ca3af' : '#333333'}/>
        </NavItem>
        <NavItem>
          <BulbIcon stroke={darkMode ? '#9ca3af' : '#333333'}/>
        </NavItem>
        <NavItem>
          <ProjectsIcon stroke={darkMode ? '#9ca3af' : '#333333'}/>
        </NavItem>
        <NavItem>
          <MessageIcon stroke={darkMode ? '#9ca3af' : '#333333'}/>
        </NavItem>
        </nav>
      </div>
      <div class="w-[100%] pl-[80px] pr-[20px]">
        <section className="min-h-screen bg-green-100 my-2 dark:bg-gray-900">
          <div className="min-h-screen py-10 flex flex-col items-center justify-center text-center">
            <div className='text-7xl flex items-center justify-center w-[200px] h-[200px] border-gray-700 border-2 rounded-full dark:border-gray-600 dark:text-gray-400'>
                PS
            </div>
            <h1 className="uppercase text-4xl font-medium my-10 dark:text-gray-400">My Name is Prajwal SV</h1>
            <hr className="w-[20%] border-1 border-black mb-10 dark:border-gray-600"/>
            <p className="text-2xl leading-10 dark:text-gray-400">I am a Web Designer</p>
            <p className="text-2xl leading-10 dark:text-gray-400">I am a Fullstack Web Developer</p>
            <p className="text-2xl leading-10 dark:text-gray-400">I am a Creative Problem Solver &amp; a Competitive Software Engineer</p>
          </div>
        </section>
        <section className="min-h-[500px] flex items-center justify-center bg-yellow-100 my-2 dark:bg-gray-900">
          <h1 className="mx-auto w-max p-10">Coming Soon ... Development In Progress</h1>
        </section>
        <section className="min-h-[500px] flex items-center justify-center bg-pink-100 my-2 dark:bg-gray-900">
          <h1 className="mx-auto w-max p-10">Coming Soon ... Development In Progress</h1>
        </section>
        <section className="min-h-[500px] flex items-center justify-center bg-indigo-100 my-2 dark:bg-gray-900">
          <h1 className="mx-auto w-max p-10">Coming Soon ... Development In Progress</h1>
        </section>
        <footer className="min-h-[80px] flex items-center justify-center my-2 dark:bg-gray-900">
          <h5 className="text-center hover:text-gray-300">
            <a href='LICENSE.txt' target='_blank'>Copyright &copy; 2021 Prajwal S Venkatesh <br/> MIT License </a></h5>
        </footer>
      </div>
    </main>
  )
}

export default Root

