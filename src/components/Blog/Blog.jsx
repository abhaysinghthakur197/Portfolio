import React from 'react'
import { Button, Card, CardBody, CardFooter, Container } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// img
import lambda from '../../assets/blogImage/lambda.png'
import lambdaDB from '../../assets/blogImage/lambda+DB.png'
import AWSSecurity from '../../assets/blogImage/AWSSecurity.png'



const Blogs = () => {

   
    const slides = [
        {
            image: lambda,
            title: 'Unleashing the Power of Serverless Computing with AWS Lambda',
            description: 'Hi guys,  In this blog we will talk about lambda function service of one of the know cloud provider in the market Amazon Web Services (AWS).',
            link: 'https://medium.com/p/36948dd8986e/edit'
        },
        {
            image: lambdaDB,
            title: 'AWS DynamoDB + Lambda Function',
            description: 'Hi guys, In this blog, we will talk about what is a database inside AWS, and how we store data in the Amazon dynamoDB database.',
            link: 'https://medium.com/aws-tip/aws-dynamodb-lambda-function-5b7e0367a65b'
        },
        {
            image: AWSSecurity,
            title: 'Securing Your AWS Kingdom: The Power of AWS Security Services.',
            description: 'Hi guys, Security is a very important term for all types of services humans are using. They generally ask about how secure the system or service is. Whether their data or objects are stolen by some theft. In this blog we will explore security services in AWS.',
            link: 'https://medium.com/@Abhay__singh/securing-your-aws-kingdom-the-power-of-aws-security-services-44c6214f88f3'
        }
        // Add more slides as needed
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // Screen width less than 768px (sm)
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 992, // Screen width less than 992px (md)
                settings: {
                    slidesToShow: 1,
                },
            },
        ],


    };




    return (
        <Container>
            <div name="blogs" className='text-gray-300 bg-[#0a192f] py-10'>
                <div className='pb-8 w-full flex justify-center items-center flex-col py-5'>
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
                        Blog
                    </p>
                    <p className='py-6 text-2xl text-center'>Check out some of my most recent blogs</p>
                </div>

                <div className='sm:w-2/4  m-auto blog' >
                    <div>
                        <Slider {...settings}>
                            {slides.map((index) => (
                                <Card className='bg-[#27497d] border border-5' style={{maxHeight: '30%'}} rounded>
                                    <Card.Img src={index.image} alt="blog img" className='w-100'  />
                                    <CardBody className='py-5'>
                                        <Card.Title className='py-4'>
                                            <b>{index.title}</b>
                                        </Card.Title>
                                        <Card.Text>
                                            {index.description}
                                        </Card.Text>
                                    </CardBody>
                                    <CardFooter className='flex justify-center py-5'>
                                        <a href={index.link} target="_blank" rel="noopener noreferrer">
                                            <Button className='group text-white w-fit px-4 py-1 my-1 flex items-center rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer border-2 hover:bg-cyan-500 hover:border-cyan-500' > Read More</Button>
                                        </a>
                                    </CardFooter>

                                </Card>
                                // <div className="rounded-xl bg-[#27497d]">
                                //     <div className='h-50 w-100 pt-4'>
                                //         <img src={index.image} alt="blog img" className='w-100' rounded />
                                //     </div>
                                //     <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                //         <h4 className='text-xl font-semibold'>{index.title}</h4>
                                //         <p>{index.description}</p>
                                //         <a href={index.link} target="_blank" rel="noopener noreferrer">
                                //         <Button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer border-2 hover:bg-cyan-500 hover:border-cyan-500' > Read More</Button>
                                //         </a>
                                //     </div>
                                // </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </Container>
    )
}


export default Blogs;
