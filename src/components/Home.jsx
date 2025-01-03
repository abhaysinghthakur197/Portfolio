import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.jpg';
import { Link } from "react-scroll";
import { Image, Container } from 'react-bootstrap';
import './Home.css'

const Home = () => {


  return (
    <Container>
      <div name="home" id='home' className='h-screen w-full bg-[#0a192f] mt-5 full'>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row  my-5">
          <div className="flex flex-col justify-center h-full left">
            <h2 className="text-4xl sm:text-7ml font-bold text-white">
              Hello, I'am Abhay Thakur
            </h2>
            <h4 className='text-white my-3'>Full-Stack Developer (MERN & AWS Specialist)</h4>
            <p className="text-gray-500 py-3 max-w-md">
              Welcome to my portfolio! I’m a passionate full-stack developer specializing in the MERN stack and AWS cloud.
              I love creating scalable, user-centric web applications that solve real-world problems.
              <br /><br />
              Feel free to explore my work.
            </p>
            <div className='aboutButton'>
              <Link to="about" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer border-2 hover:bg-cyan-500 hover:border-cyan-500">
                About Me
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight size={25} className="ml-3" />
                </span>
              </Link>
            </div>
          </div>
          <div className='right'>
            {/* <img src={me} alt="my profile"  className='rounded-2xl mx-auto w-2/3 md:w-full'/> */}
            <Image src={me} alt="Example Image" className='profileImg' />
          </div>


        </div>
      </div>
    </Container>
  );
};

export default Home;