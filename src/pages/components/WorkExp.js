import React from "react"
import { LocationIcon } from "./Icons"


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
        logo: 'data:image/jpeg;base64,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',
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

const WorkExp = ({ darkMode }) => {

    return (
        <section className="
        min-h-[500px] 
        flex items-start 
        my-2 mt-28
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
                <h1 className="text-4xl text-left ml-4 font-semibold mb-6 dark:text-gray-300">Experience</h1>
                <div className="container">
                    <div className="flex flex-col md:grid grid-cols-12 text-gray-800 dark:text-gray-300">
                        {
                            Work.map((e, i) => (
                                <div key={i} className="flex md:contents">
                                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                        <div className="h-full w-6 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-500 pointer-events-none"></div>
                                        </div>
                                        <span className={`w-4 h-4 absolute top-1/3 -mt-3 ml-1 rounded-full ${i === 0 ? "bg-[#2BB673]" : "bg-gray-600"} shadow text-center`} />
                                        <span className={`w-6 h-6 absolute top-1/3 -mt-4 ml-0 rounded-full ${i === 0 ? "bg-[#2BB67344]" : "bg-[#5861E555]"} shadow text-center`} />
                                    </div>
                                    <div className="col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full">
                                        <img className="mb-3 max-w-[140px] max-h-[40px]" src={e.logo} />
                                        <h3 className="font-bold text-2xl mb-1">{e.company} &nbsp;<span className="text-xs font-normal">( {e.from} - {e.to} )</span></h3>
                                        <p className="text-xl font-semibold mb-2">{e.designation}</p>
                                        <p className="text-lg mb-2 flex -ml-1">
                                            <LocationIcon stroke={darkMode ? '#d1d5db' : '#333333'} />
                                            &nbsp;
                                            {e.location}
                                        </p>
                                        <p className="text-smd">
                                            <span className="font-semibold">Specialized in:</span> {e.specialization.join(', ')}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="p-4 mt-4 ">
                <h1 className="text-4xl text-left ml-4 font-semibold mb-6 dark:text-gray-300">Education</h1>
                <div className="container">
                    <div className="flex flex-col md:grid grid-cols-12 text-gray-800 dark:text-gray-300">
                        {
                            Education.map((e, i) => (
                                <div key={i} className="flex md:contents">
                                    <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                                        <div className="h-full w-6 flex items-center justify-center">
                                            <div className="h-full w-1 bg-gray-500 pointer-events-none"></div>
                                        </div>

                                        <span className={`w-4 h-4 absolute top-1/3 -mt-3 ml-1 rounded-full bg-gray-600 shadow text-center`} />
                                        <span className={`w-6 h-6 absolute top-1/3 -mt-4 ml-0 rounded-full bg-[#5861E555] shadow text-center`} />
                                    </div>
                                    <div className="col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto w-full">
                                        <img className="mb-3 max-w-[140px] max-h-[40px]" src={e.logo} />
                                        <h3 className="font-bold text-2xl mb-1">{e.institution}</h3>
                                        <p className="text-xl font-normal mb-2">{e.major}</p>
                                        <p className="text-lg font-normal">
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
    )
}

export default WorkExp
