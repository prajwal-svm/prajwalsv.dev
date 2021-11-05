import React from "react"

const profileImgURI = 'https://media-exp1.licdn.com/dms/image/C5603AQGToDuonvh9IA/profile-displayphoto-shrink_200_200/0/1632905008936?e=1641427200&v=beta&t=q2ePdrzIr-02Xf1oA-UTK3HYC_kbMZwLrkF6LsG1Pkc'

const AboutMe = () => {

    return (
        <div className="flex flex-wrap items-center justify-center min-h-[820px] mt-[30px]">
            <div className="w-[50%] min-h-[800px] m-auto p-4 sm:hidden md:block">
                <div className="
                mx-auto
                mt-[120px]
                
                xl:w-[449px] 
                xl:h-[484px]

                xl:before:w-[449px] 
                xl:before:h-[484px]
                xl:before:absolute 
                xl:before:mt-[-40px]
                xl:before:ml-[-40px]
                xl:before:bg-[#5861E566]
                xl:before:z-0

                xl:after:w-[449px] 
                xl:after:h-[484px]
                xl:after:absolute 
                xl:after:mt-[-444px]
                xl:after:ml-[40px]
                xl:after:bg-[#5861E566] 
                xl:after:z-0

                lg:w-[349px] 
                lg:h-[384px]

                lg:before:w-[349px] 
                lg:before:h-[384px]
                lg:before:absolute 
                lg:before:mt-[-40px]
                lg:before:ml-[-40px]
                lg:before:bg-[#5861E566]
                lg:before:z-0

                lg:after:w-[349px] 
                lg:after:h-[384px]
                lg:after:absolute 
                lg:after:mt-[-344px]
                lg:after:ml-[40px]
                lg:after:bg-[#5861E566] 
                lg:after:z-0

                md:w-[249px] 
                md:h-[284px]

                md:before:w-[249px] 
                md:before:h-[284px]
                md:before:absolute 
                md:before:mt-[-40px]
                md:before:ml-[-40px]
                md:before:bg-[#5861E566]
                md:before:z-0

                md:after:w-[249px] 
                md:after:h-[284px]
                md:after:absolute 
                md:after:mt-[-244px]
                md:after:ml-[40px]
                md:after:bg-[#5861E566] 
                md:after:z-0
                ">
                    <img className="w-full h-full relative z-10" src={profileImgURI} />
                </div>
            </div>

            <div className=" w-[50%] min-h-[700px] p-4 text-left flex flex-col items-start justify-start">
                <h2 className="
                    text-5xl font-semibold text-gray-800 dark:text-gray-300
                    before:w-[240px] 
                    before:h-[20px]
                    before:absolute 
                    before:mt-[24px]
                    before:ml-[0px]
                    before:bg-[#5861E544]
                    before:z-0
                    z-10
                ">About ME</h2>
                <p className="
                2xl:text-3xl
                xl:text-3xl
                lg:text-3xl
                md:text-2xl
                sm:text-xl
                xs:text-xl

                font-sans 
                mt-10 
                pr-2 
                dark:text-gray-300 
                text-gray-600 
                leading-[3rem]
                ">
                    I'm an effective and driven software engineering professional,
                    offering a wealth of expertise. An analytical thinker with a
                    proven track record of delivering excellent business
                    results. Currently seeking a leadership role (SSE) with an education
                    technology company that builds applications for the
                    primary and secondary market. I'm highly skilled in building an end-to-end MERN stack solution for your company!
                </p>
                <br />
                <p className="
                2xl:text-3xl
                xl:text-3xl
                lg:text-3xl
                md:text-2xl
                sm:text-xl
                xs:text-xl

                font-sans 
                pr-2 
                dark:text-gray-300 
                text-gray-600  
                leading-[3rem]
                ">
                    I'm currently working at GoGuardian as a Software Engineer, I am quiet passionate about coding!
                    I have been fascinated about Open Source Projects since the inception of my coding journey. In fact the source code to this
                    website is also Open Sourced under MIT License! When im not coding,
                    I usually play cricket, read some non-fictional books, workout at the gym, binge watch a few series on netflix...
                </p>
            </div>
        </div>
    )
}

export default AboutMe
