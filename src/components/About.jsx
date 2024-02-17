import React from 'react'
import { Button } from 'react-bootstrap';


const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300 pt-md-4 pt-lg-5 pt-xl-5 pt-9"
    >
      <div className="about flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>

          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Welcome! 
                <br/> It's a pleasure to connect with you.
              </p>
            </div>
            <div>
              <p>
                {""}
                I am an AWS Fullstack Developer with 2 years of hands-
                on expertise in React, Express, MongoDB, and Node.js.
                Proficient in AWS Lambda, DynamoDB, RDS, and API Gateway
                for cloud-based solutions. I have also worked with AWS security
                teams to implement secure applications in the AWS environment using AWS custom and managed config rule service.
                <br /> <br />
                In my free time, I enjoy sharing my insights and experiences through blogging about the latest trends and technologies in the industry.
                 <br /> <br />
                 Click on the resume button to get my latest resume.
                </p>
            </div>
          </div>

        </div>
        <div className='flex justify-center my-5'>
          <a href="https://drive.google.com/file/d/1CZrkerC1srpLUGpdF86OW1TH81W4N2qF/view?usp=sharing" target='_blank' rel="noopener noreferrer">
            <Button className="group text-white w-fit px-4 py-2 my-1 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer border-2 hover:bg-cyan-500 hover:border-cyan-500">Resume</Button>
          </a>
        </div>
      </div>

    </div>

  )
}

export default About;
