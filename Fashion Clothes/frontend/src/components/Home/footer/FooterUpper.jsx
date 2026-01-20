import React from 'react'
import Logo from '../../../assets/Logo.png'

const FooterUpper = () => {
  return (
    <div className='mt-5 w-full h-50 flex flex-col items-center'>
      <img src={Logo} alt="" className='w-1/8 h-1/2'/>
      <p className='text-gray-500 font-sm'>8.00-19.00. Monday-Saturday. Sunday-Closed</p>
      <div className='mt-3 flex gap-3 text-xl cursor-pointer'>
        <i class="ri-facebook-circle-line"></i>
        <i class="ri-twitter-fill"></i>
        <i class="ri-instagram-line"></i>
        <i class="ri-twitter-x-fill"></i>
        <i class="ri-whatsapp-line"></i>
      </div>
    </div>
  )
}

export default FooterUpper
