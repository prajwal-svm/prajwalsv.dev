import React, { useEffect, useState } from "react"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Header from "./components/Header"
import WorkExp from "./components/WorkExp"

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
  }, [darkMode])

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} $window={window} />
      <AboutMe />
      <WorkExp darkMode={darkMode} />
      <Footer />
    </>
  )
}

export default Root
