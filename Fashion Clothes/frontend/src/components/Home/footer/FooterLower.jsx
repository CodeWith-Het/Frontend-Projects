import React from 'react'

const FooterLower = () => {
  return (
    <div className='flex items-center justify-between w-full h-10 bg-gray-300 px-3'>
      <p>Copyright 2019 by Engo Themes</p>

      <p className='flex gap-1'>Payment Option :
        <div className='flex gap-2 text-lg cursor-pointer'>
        <i class="ri-visa-line"></i>
        <i class="ri-bank-card-2-fill"></i>
        <i class="ri-paypal-fill"></i>
        </div>
      </p>

      <div className='flex gap-2 items-center'>
        <p>Customer</p>
        <p>Service</p>
        <p>Policy</p>
        <p>Shop</p>
        <p>AboutUs</p>
      </div>
    </div>
  )
}

export default FooterLower
