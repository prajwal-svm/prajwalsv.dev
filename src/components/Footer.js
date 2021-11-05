import React from "react"
import { DevToIcon, DribbleIcon, GitHubIcon, LinkedInIcon, MediumIcon, TwitterIcon } from "./Icons"

const SocialMediaHandlers = [
    {
        to: 'https://twitter.com/__Prajwal_SV__?ref_src=twsrc%5Etfw',
        icon: <TwitterIcon />,
        branding: '#1DA1F2'
    },
    {
        to: 'https://dev.to/',
        icon: <DevToIcon />,
        branding: '#764ABC'
    },
    {
        to: 'https://dribbble.com/codename-storm',
        icon: <DribbleIcon />,
        branding: '#EA4C89'
    },
    {
        to: 'https://medium.com/@psv.globallyunique',
        icon: <MediumIcon />,
        branding: '#2BB673'
    },
    {
        to: 'https://www.linkedin.com/in/prajwal-s-venkatesh/',
        icon: <LinkedInIcon />,
        branding: '#0A66C2'
    },
    {
        to: 'https://github.com/Prajwal-S-Venkatesh',
        icon: <GitHubIcon />,
        branding: '#181717'
    }
]

const Footer = () => {

    return (
        <footer className="bg-black min-h-[400px] text-gray-200 text-center py-1 px-4 mt-20">
            <div className="m-auto">
                <h3 className="text-3xl font-sans font-semibold mt-12 mx-auto">Thanks For Visiting!</h3>
                <p className="text-2xl font-sans mt-12 px-[100px] leading-9">
                    I’d like to know who you are and how you ended up on this page, <br />
                    Follow or Connect with me on social media. </p>

                <div className="flex items-center justify-evenly flex-wrap w-[500px] mx-auto mt-6">
                    {
                        SocialMediaHandlers.map((x, i) => <a key={i} href={x.to} target="_blank" className={`w-[60px] h-[60px] rounded-lg p-3 bg-[${x.branding}]`}> {x.icon} </a>)
                    }
                </div>
                <hr className="w-[340px] mx-auto mt-10 border-[#5861E5] bg-[#5861E5] border-1 rounded-full" />
                <p className="font-sans mt-5 px-[100px] leading-9"><a href="https://raw.githubusercontent.com/Prajwal-S-Venkatesh/prajwalsv.dev/main/LICENSE" target="_blank" >MIT License | Copyright &copy; 2021 Prajwal S Venkatesh</a></p>
            </div>
        </footer>
    )
}

export default Footer
