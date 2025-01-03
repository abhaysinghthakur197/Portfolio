import React from 'react'
import { Card, Button, Container } from 'react-bootstrap';
import SpaceDreamer from '../assets/Spacedreamer_Project.png'
import EVplan from '../assets/EVplan_Project.png'
import Covid19Data from '../assets/Covid-19Data_Project.png'
import WeatherApp from '../assets/WeatherApp-Project.png'


const Work = () => {
  return (
    <Container>
      <div name="work" className='w-full vh-100  text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8 w-full flex justify-center items-center flex-col'>
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
              Work
            </p>
            <p className='py-6 text-2xl'>Check out some of my work</p>
          </div>

          {/* adding code */}

          {/* {container} */}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            {/* { Grid Item }  */}
            <div className='mx-1 work'>
              <Card style={{ width: '20rem' }} className='bg-[#27497d]' rounded >
                <Card.Img variant="top" src={SpaceDreamer} style={{ width: '20rem' }} />
                <Card.Body>
                  <Card.Title className='text-center underline py-3'>Space Dreamer website</Card.Title>
                  <Card.Text className='mx-5 my-3'>
                    It is a Fullstack project space dreamer where user get the latest news of space industries and cosmos world.
                    User can sign up also and add their own blog/article in the space dreamer. We created REST API for fetching all the data from mongodb database.
                  </Card.Text>
                  <Card.Text className='mx-5 my-1' style={{ fontSize: '15px' }}>
                    <span className='text-warning font-family-bold' style={{ fontSize: '17px', color: 'yellow' }}>Tech Use:</span> React JS, React-Bootstrap, formik & yup (login/signup), NodeJs,  Express Js , MongoDB (Database).
                  </Card.Text>
                  <div className='flex flex-row items-center justify-around  my-1'>
                    <a href="https://spacedreamer.netlify.app/" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-3 py-3 my-4 mx-auto flex items-center w-fit px-3 py-1 my-1 flex items-center rounded-md  rounded-ml bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>View Live</Button>
                    </a>
                    <a href="https://github.com/abhaysinghthakur197/SpaceDreamer--FullStack" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-3 py-3 my-4 mx-auto flex items-center w-fit px-3 py-1 my-1 flex items-center rounded-md  rounded-ml bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>View Code</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className='mx-1 work'>
              <Card style={{ width: '20rem' }} className='bg-[#27497d]' rounded >
                <Card.Img variant="top" src={EVplan} style={{ width: '20rem', height: "16rem" }} />
                <Card.Body>
                  <Card.Title className='text-center underline py-5'>EVplan Website</Card.Title>
                  <Card.Text className='mx-5 my-1'>
                    Evplan website all the information of EV vehicles before buying any vehicle. It also give info of all govt. schemes available for EV.
                    It show all the EV vehicles present in 2 wheeler, 3 wheeler, 4 wheeler category. This project is for using css bootstap styling better.
                  </Card.Text>
                  <Card.Text className='mx-5 my-4' style={{ fontSize: '15px' }}>
                    <span className='text-warning font-family-bold' style={{ fontSize: '17px', color: 'yellow' }}>Tech Use:</span> HTML5, Bootstrap, SASS, JAVASCRIPT, Jquery.
                  </Card.Text>
                  <div className='flex flex-row items-center justify-around  my-3'>
                    <a href="https://abhaysinghthakur197.github.io/EVplan/main.html" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-3 py-3 my-4 mx-auto flex items-center w-fit px-3 py-1 my-1 flex items-center rounded-md  rounded-ml bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>View Live</Button>
                    </a>
                    <a href="https://github.com/abhaysinghthakur197/EVplan" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-3 py-3 my-4 mx-auto flex items-center w-fit px-3 py-1 my-1 flex items-center rounded-md  rounded-ml bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>View Code</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className='mx-1 work'>
              <Card style={{ width: '20rem' }} className='bg-[#27497d]' rounded >
                <Card.Img variant="top" src={Covid19Data} style={{ width: '20rem', height: '16rem' }} />
                <Card.Body>
                  <Card.Title className='text-center underline py-3'>Covid-19 Data</Card.Title>
                  <Card.Text className='mx-5 my-3'>
                    Covid-19 Data website it shows total, recovered, death cases in the courtry. It also show the case different statewise. It use 'data.covid19india.org/data.json' api for getting the cases data.
                    At the end it represent the data using graphs.
                  </Card.Text>
                  <Card.Text className='mx-5 my-2' style={{ fontSize: '15px' }}>
                    <span className='text-warning font-family-bold' style={{ fontSize: '17px', color: 'yellow' }}>Tech Use:</span> HTML5,  Bootstrap, Javascript, Jquery.
                  </Card.Text>
                  <div className='flex flex-row items-center justify-around  my-3'>
                    <a href="https://abhaysinghthakur197.github.io/Covid-Report/" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-3 py-3 my-9 mx-auto flex items-center w-fit px-3 py-1 my-1 flex items-center rounded-md  rounded-ml bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>View Live</Button>
                    </a>
                    <a href="https://github.com/abhaysinghthakur197/Covid-19-Data-Report-Site-/tree/master" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-3 py-3 my-9 mx-auto flex items-center w-fit px-3 py-1 my-1 flex items-center rounded-md  rounded-ml bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>View Code</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>


            <div className='mx-1 work mt-5'>
              <Card style={{ width: '20rem' }} className='bg-[#27497d]' rounded >
                <Card.Img variant="top" src={WeatherApp} style={{ width: '20rem' }} />
                <Card.Body>
                  <Card.Title className='text-center underline py-3'>Weather-App</Card.Title>
                  <Card.Text className='mx-5 my-3'>
                    It is a Weather-app, which gives the current weather of the any city in the world.
                    It uses javascript promise for handling the api data and showing the data.
                  </Card.Text>
                  <Card.Text className='mx-5 my-1' style={{ fontSize: '15px' }}>
                    <span className='text-warning font-family-bold' style={{ fontSize: '17px', color: 'yellow' }}>Tech Use:</span> Javascript, Jquery, Bootstrap.
                  </Card.Text>
                  <div className='flex flex-row items-center justify-around  my-5'>
                    <a href="https://abhaysinghthakur197.github.io/Weather-App-using-js/weathertry.html" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-3 py-3 my-7 mx-auto flex items-center w-fit px-3 py-1 my-1 flex items-center rounded-md  rounded-ml bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>View Live</Button>
                    </a>
                    <a href="https://github.com/abhaysinghthakur197/Weather-App-using-js?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
                      <Button variant="primary" className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-3 py-3 my-7 mx-auto flex items-center w-fit px-3 py-1 my-1 flex items-center rounded-md  rounded-ml bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>View Code</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div >
    </Container>


  )
}

export default Work;
