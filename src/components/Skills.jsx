import React from 'react'
import {Container} from 'react-bootstrap'
import '../App.css'

const Skills = () => {
    return (
        <Container>
            <div name='skills' id='skills' className='w-full bg-[#0a192f] text-gray-300'>
                {/* Container */}
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div className=' w-full flex justify-center items-center flex-col mb-7'>
                        <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
                        <p className='py-4 text-2xl text-center'>I enjoy building software with all the technologies. Here is a list of technologies I've worked with.</p>
                    </div>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-warning-hover rounded'>
                            <p className='my-4'>MONGO DB </p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-warning-hover rounded'>
                            <p className='my-4'>EXPRESS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-warning-hover rounded'>
                            <p className='my-4'>REACT JS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-warning-hover rounded'>
                            <p className='my-4'>NODE JS </p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-warning-hover rounded'>
                            <p className='my-4'>AWS LAMBDA</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-warning-hover rounded'>
                            <p className='my-4'>AWS DynamoDB</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-warning-hover rounded'>
                            <p className='my-4'>AWS API Gateway</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-warning-hover rounded'>
                            <p className='my-4'>PYTHON</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-warning-hover rounded'>
                            <p className='my-4'>MYSQL / AWS RDS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-warning-hover rounded'>
                            <p className='my-4'>GIT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-warning-hover rounded'>
                            <p className='my-4'>BOOTSTRAP</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-warning-hover rounded'>
                            <p className='my-4'>AWS CloudWatch, SQS/SNS</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Skills;