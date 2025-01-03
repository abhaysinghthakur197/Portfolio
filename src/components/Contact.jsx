import React, { useRef } from 'react'
import { Container } from 'react-bootstrap'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ptekpxk', 'template_75xvnwt', form.current, {
        publicKey: 'HsjvDDJXzzmiKhM08',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.reload(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Container>
      <div name='contact' className='w-auto h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Send me a message</p>
          </div>
          {/* <form action="https://formsubmit.co/el/mogala" method='POST' className='flex flex-col max-w-[600px] w-auto'>
            <input className='bg-[#ccd6f6] p-2 rounded-xl text-black' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-xl text-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-xl text-black' name="message" rows="10" placeholder='Message'></textarea>
            <button type='submit' className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center w-fit px-6 py-3 my-2 flex items-center rounded-md  rounded-ml bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Let's Collaborate</button>
          </form> */}

          <form  ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-auto'>
            <input className='bg-[#ccd6f6] p-2 rounded-xl text-black' type="text" placeholder='Name' name='to_name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-xl text-black' type="email" placeholder='Email' name='from_name' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-xl text-black' name="message" rows="10" placeholder='Message'></textarea>
            <button type='submit' className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center w-fit px-6 py-3 my-2 flex items-center rounded-md  rounded-ml bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Let's Collaborate</button>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Contact;