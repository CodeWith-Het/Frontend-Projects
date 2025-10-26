import React from 'react'
import { Link } from 'react-router-dom';

const HomeBottomText = () => {
  return (
    <div>
        <div className='font-[font2] flex items-center justify-center gap-2'>
      <Link className='text-[6.5vw] leading-[6vw]  uppercase border-5 border-white  hover:text-yellow-200 hover:border-yellow-200 rounded-full px-8 py-2 pt-5' to='/projects'>Projects</Link>
      <Link className='text-[6.5vw] leading-[6vw]  uppercase border-5 border-white  hover:text-yellow-200 hover:border-yellow-200 rounded-full px-8 py-2 pt-5' to='/agence'>Agence</Link>
        </div>
    </div>
  )
}                                                    

export default HomeBottomText


// .
// MONTREAL_ 09:11:23