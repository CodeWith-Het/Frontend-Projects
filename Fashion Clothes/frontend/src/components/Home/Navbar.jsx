import React from 'react'
import Logo from "../../assets/Logo.png"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
     <div className="fixed top-0 left-0 w-full bg-gray-200 z-50 shadow">
    <div className='flex items-center justify-between w-full max-w-screen-xl mx-auto px-4 py-2'>
      
      <img src={Logo} alt="logo" className='h-24 w-auto' />

      <div className='flex mx-5 items-center gap-10'>
        <NavLink to='/' className='font-semibold text-black cursor-pointer'>Home</NavLink>
        <NavLink to='/shop' className='font-semibold text-black cursor-pointer'>Shop</NavLink>
        <NavLink to='/collection' className='font-semibold text-black cursor-pointer'>Collection</NavLink>
      </div>

      <div className='flex items-center gap-5'>
        <i className="ri-user-line cursor-pointer"></i>

        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className='w-32 pl-8 pr-2 py-1 border-2 border-black rounded'
          />
          <i className="ri-search-2-line absolute left-2 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"></i>
        </div>

        <i className="ri-todo-line cursor-pointer"></i>
      </div>
    </div>
    </div>
  )
}

export default Navbar