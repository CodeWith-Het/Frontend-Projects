import React from 'react'
import Gucci from '../../assets/gucci.png'
import Nike from '../../assets/nike.png'
import Skechers from '../../assets/skechers.png'

const Logos = () => {
  return (
    <div className='w-full mt-7 mx-2 flex items-center justify-evenly opacity-25'>
      <img src={Gucci} alt="" className='w-[10vw]'/>
      <img src={Nike} alt="" className='w-[10vw]'/>
      <img src={Skechers} alt="" className='w-[10vw]'/>
      <img src={Gucci} alt="" className='w-[10vw]'/>
      <img src={Nike} alt="" className='w-[10vw]'/>
    </div>
  )
}

export default Logos
