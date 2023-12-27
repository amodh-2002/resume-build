import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action={import.meta.env.VITE_REACT_APP_FORM_LINK} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - amodhbh72@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 rounded-md outline-none' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6] rounded-md outline-none' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 rounded-md text-black outline-none' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-md'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact