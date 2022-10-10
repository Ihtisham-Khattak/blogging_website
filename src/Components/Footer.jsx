import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='max-w-[1280px] mx-auto px-4 py-8 bg-[#937DC2] w-full h-full text-center'>
        <div className='flex text-xl items-center justify-center font-bold sm:text-xl md:text-2xl text-[#FFE6F7]'>Blog. </div>
        <div className='text-xl text-[#FFE6F7]'>Follow for More</div>
        <div className='flex items-center justify-center text-[#FFE6F7] text-xl'>
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillLinkedin />
          <AiFillTwitterCircle />
        </div>
   
    </div>
  )
}

export default Footer