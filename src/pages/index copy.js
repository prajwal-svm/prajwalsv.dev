import React, { useEffect, useState } from "react"
import AboutImg from '../images/about_me.svg'

const HomeIcon = ({ stroke = '#333' }) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
</svg>

const AboutIcon = ({ stroke = '#333' }) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>

const CalendarIcon = ({ stroke = '#333' }) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>

const WorkIcon = ({ stroke = '#333' }) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>

const BulbIcon = ({ stroke = '#333' }) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
</svg>

const MessageIcon = ({ stroke = '#333' }) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
</svg>

const ProjectsIcon = ({ stroke = '#333' }) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
</svg>

const LightIcon = ({ stroke = '#333' }) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>

const DarkIcon = ({ stroke = '#333' }) => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={stroke}>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>

const LocationIcon = ({ stroke = '#333' }) => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke={stroke}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

const NavItem = (props) => (
  <div className="
    my-4 p-4 
    border-2 rounded-full border-gray-700 
    cursor-pointer 
    hover:border-dashed hover:bg-gray-100
    dark:border-gray-600 dark:hover:bg-gray-800
  ">
    {props.children}
  </div>)

const Work = [
  {
    company: 'GoGaurdian',
    logo: 'https://assets-global.website-files.com/60db82d1be38ad3341c2ff23/60e512dfc456960e0d670a4e_full-logo-2c.svg',
    from: 'Aug 21',
    to: 'Present',
    designation: 'Sr. Fullstack Developer',
    location: 'Bengaluru, India (Remote)',
    specialization: ['ReactJS', 'ExpressJs', 'NodeJS', 'MongoDB']
  },
  {
    company: 'Snapwiz Inc.',
    logo: 'https://i1.wp.com/edulastic.com/wp-content/uploads/sites/2/2015/05/Edulastic-logo-470x113.png?ssl=1',
    from: 'Aug 20',
    to: 'Aug 21',
    designation: 'Fullstack Developer (Remote)',
    location: 'Bengaluru, India',
    specialization: ['ReactJS', 'ExpressJs', 'NodeJS', 'MongoDB', 'Firebase', 'AWS']
  },
  {
    company: 'Snapwiz Inc.',
    logo: 'https://i1.wp.com/edulastic.com/wp-content/uploads/sites/2/2015/05/Edulastic-logo-470x113.png?ssl=1',
    from: 'Aug 19',
    to: 'Aug 20',
    designation: 'Jr. Fullstack Developer',
    location: 'Bengaluru, India',
    specialization: ['ReactJS', 'ExpressJs', 'NodeJS', 'MongoDB']
  },
  {
    company: 'Vibranium Healthcare',
    logo: 'https://scontent.fblr24-1.fna.fbcdn.net/v/t1.6435-1/p720x720/50523413_760691954304430_4382705197160333312_n.png?_nc_cat=109&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=CsLfaq2J6rQAX_im5rE&_nc_ht=scontent.fblr24-1.fna&oh=04b522b6dc59c94abd051dba29cb6ab4&oe=616CB6AB',
    from: 'Jan 19',
    to: 'Feb 19',
    designation: 'React Native Developer Intern',
    location: 'Bengaluru, India',
    specialization: ['React Native', 'UI/UX', 'Graphics Designer']
  },
  {
    company: 'Lycan 3D',
    logo: 'http://lycan3d.com/image/Logo%20@%20Lycan%20Partners/Lycan%203D%20with%20base%20text%20(SVG).svg',
    from: 'Jan 19',
    to: 'Feb 19',
    designation: 'Fullstack Developer Intern',
    location: 'Bengaluru, India',
    specialization: ['PHP', 'Apache', 'SQL', 'MariaDB']
  },
  {
    company: 'Netchronix',
    logo: 'https://media-exp1.licdn.com/dms/image/C5603AQHDEMyv5Y40RQ/profile-displayphoto-shrink_200_200/0/1517044723683?e=1637798400&v=beta&t=HikbxdULWw0WxRlYBtqICeYqIORJgTFVOti-2oseffA',
    from: 'Jan 19',
    to: 'Feb 19',
    designation: 'Frontend Developer Intern',
    location: 'Bengaluru, India',
    specialization: ['HTML', 'CSS', 'BootStrap']
  }
]

const Education = [
  {
    institution: 'JSSATE Bangalore',
    logo: 'https://jssateb.ac.in/assets/images/logo/jssate.png',
    from: '2015',
    to: '2019',
    major: `Bachelor's Degree in Information Science & Engineering`,
  },
  {
    institution: 'Narayana PU College',
    logo: 'https://www.narayanagroup.com/images/logo.png',
    from: '2013',
    to: '2015',
    major: 'JEE Mains | PCM (C)',
  },
  {
    institution: 'Samved School (AVES)',
    logo: 'https://samvedschool.com/wp-content/uploads/2019/11/logo.jpg',
    from: '2003',
    to: '2013',
    major: 'Elemantary, Primary & High School | State',
  }
]

const Skills = {
  "Programming Languages": ["C++", "Javascript", "Python", "GO"],
  "Problem Solving": ["Data Structures", "Algorithms"],
  "Web Design & Development": ["HTML", "CSS", "Javascript"],
  "Front End FrameWorks": ["ReactJS", "Redux", "VueJS", "Tailwind", "NextJS", "Gatsby"],
  "Back End FrameWorks": ["NodeJS", "NestJS", "FastAPI", "ExpressJS", "NextJS", "Gatsby"],
  "Databases": ["PostgreSQL", "MongoDB"],
  "Version Control Tools": ["Git & Github"],
  "Container | CI/CD Tools": ["Docker", "Jenkins"],
  "Cloud & Deployments": ["AWS", "Firebase"],
  "Testing (TDD) Tools": ["Jest + Enzyme", "Cypress"],
  "Machine Learning": ["Tensorflow"]
}

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
        onClick={() => setDarkMode(x => !x) && $window.localStorage.setItem('theme', darkMode ? 'light' : 'dark')}>
        {
          darkMode ? <DarkIcon stroke={darkMode ? '#9ca3af' : '#333333'} /> : <LightIcon stroke={darkMode ? '#9ca3af' : '#333333'} />
        }
      </button>
      <div className="w-[60px] min-h-screen flex flex-col items-center justify-evenly fixed dark:bg-gray-900">
        <nav>
          <NavItem>
            <HomeIcon stroke={darkMode ? '#9ca3af' : '#333333'} />
          </NavItem>
          <NavItem>
            <AboutIcon stroke={darkMode ? '#9ca3af' : '#333333'} />
          </NavItem>
          <NavItem>
            <WorkIcon stroke={darkMode ? '#9ca3af' : '#333333'} />
          </NavItem>
          <NavItem>
            <BulbIcon stroke={darkMode ? '#9ca3af' : '#333333'} />
          </NavItem>
          <NavItem>
            <ProjectsIcon stroke={darkMode ? '#9ca3af' : '#333333'} />
          </NavItem>
          <NavItem>
            <MessageIcon stroke={darkMode ? '#9ca3af' : '#333333'} />
          </NavItem>
        </nav>
      </div>
      <div className="w-[100%] pl-[80px] pr-[20px]">
        <section className="min-h-screen my-2 dark:bg-gray-900">
          <div className="min-h-screen py-10 flex flex-col items-center justify-center text-center">
            <div className='text-7xl flex items-center justify-center w-[200px] h-[200px] border-gray-700 border-2 rounded-full dark:border-gray-600 dark:text-gray-400'>
              PS
            </div>
            <h1 className="uppercase text-4xl font-medium my-10 dark:text-gray-400">My Name is Prajwal SV</h1>
            <hr className="w-[20%] border-1 border-black mb-10 dark:border-gray-600" />
            <p className="text-2xl leading-10 dark:text-gray-400">I am a Web Designer</p>
            <p className="text-2xl leading-10 dark:text-gray-400">I am a Fullstack Web Developer</p>
            <p className="text-2xl leading-10 dark:text-gray-400">I am a Creative Problem Solver &amp; a Competitive Software Engineer</p>
          </div>
        </section>


        <section className="min-h-[500px] flex items-start justify-center py-16 mt-4 mb-16 dark:bg-gray-900">
          <div className="self-center">
            <img className='hidden xl:max-w-lg lg:max-w-md lg:block mr-10' width='500' height='500' src={AboutImg} />
          </div>
          <div className='md:max-w-xl lg:max-w-xl xl:max-w-xl pl-4'>
            <h1 className='text-4xl font-bold mb-4 uppercase'>A Little bit about myself ...</h1>
            <hr className="w-[50%] border-2 rounded-full bg-gray-600 border-black mb-10 dark:border-gray-600" />
            <p className="text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <br />
            <p className="text-lg">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </section>


        <section className="
          min-h-[500px] 
          flex items-start 
          my-2 
          dark:bg-gray-900

          flex-col
          justify-evenly
          
          lg:flex-row
          lg:justify-evenly 
          xl:flex-row
          xl:justify-evenly 
          2xl:flex-row
          2xl:justify-evenly 
          
          xs:flex-col
          xs:justify-center
          sm:flex-col
          sm:justify-center
          md:flex-col
          md:justify-center

        ">

          <div className="p-4 mt-4">
            <h1 className="text-4xl text-left ml-4 font-semibold mb-6">Experience</h1>
            <div className="container">
              <div className="flex flex-col md:grid grid-cols-12 text-gray-800 dark:text-gray-300">
                {
                  Work.map(e => (
                    <div key={e.from} className="flex md:contents">
                      <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                          <div className="h-full w-1 bg-gray-500 pointer-events-none"></div>
                        </div>
                        <span className="w-4 h-4 absolute top-1/3 -mt-3 ml-1 rounded-full bg-gray-500 shadow text-center" />
                      </div>
                      <div className="col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full">
                        <img className="mb-3 max-w-[140px] max-h-[40px]" src={e.logo} />
                        <h3 className="font-bold text-lg mb-1">{e.company} &nbsp;<span className="text-xs font-normal">( {e.from} - {e.to} )</span></h3>
                        <p className="text-md font-semibold mb-2">{e.designation}</p>
                        <p className="text-sm mb-2 flex -ml-1">
                          <LocationIcon stroke={darkMode ? '#d1d5db' : '#333333'} />
                          &nbsp;
                          {e.location}
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold">Specialized in:</span> {e.specialization.join(', ')}
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="p-4 mt-4 -ml-8">
            <h1 className="text-4xl text-left ml-4 font-semibold mb-6">Education</h1>
            <div className="container">
              <div className="flex flex-col md:grid grid-cols-12 text-gray-800 dark:text-gray-300">
                {
                  Education.map(e => (
                    <div key={e.from} className="flex md:contents">
                      <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                        <div className="h-full w-6 flex items-center justify-center">
                          <div className="h-full w-1 bg-gray-500 pointer-events-none"></div>
                        </div>
                        <span className="w-4 h-4 absolute top-1/3 -mt-3 ml-1 rounded-full bg-gray-500 shadow text-center" />
                      </div>
                      <div className="col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full">
                        <img className="mb-3 max-w-[140px] max-h-[40px]" src={e.logo} />
                        <h3 className="font-bold text-lg mb-1">{e.institution}</h3>
                        <p className="text-md font-normal mb-2">{e.major}</p>
                        <p className="text-sm font-normal">
                          ( {e.from} - {e.to} )
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

        </section>


        <section className="min-h-[500px] my-16 px-[10%] py-16 dark:bg-gray-900">
          <h1 className="text-4xl text-left font-semibold mb-6">Skills</h1>
          <hr className="w-[60px] border-2 rounded-full bg-gray-600 border-black mb-10 dark:border-gray-600" />


          <div className="flex flex-wrap">
            {
              Object.keys(Skills).map(s => (
                <div class="bg-blue-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-xl shadow-lg w-62 m-6 flex-auto">
                  <div class="p-4">
                    <p class="text-white font-semibold text-2xl">{s}</p>
                    {
                      Skills[s].map(x => (
                        <div class="flex justify-between mt-2">
                          <p class="text-white text-lg" > - {x}</p>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>


        </section>
        <footer className="min-h-[80px] flex items-center justify-center my-2 dark:bg-gray-900">
          <h5 className="text-center hover:text-gray-300">
            <a href='LICENSE.txt' target='_blank'>Copyright &copy; 2021 Prajwal S Venkatesh <br /> MIT License </a></h5>
        </footer>
      </div>
    </main>
  )
}

export default Root
