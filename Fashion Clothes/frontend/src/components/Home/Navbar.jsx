import React from 'react'
import Logo from "../../assets/Logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full max-w-screen-xl mx-auto px-4 py-2'>
      
      <img src={Logo} alt="logo" className='h-24 w-auto' />

      <div className='flex mx-5 items-center gap-10'>
        <Link to='/' className='font-semibold text-black cursor-pointer'>Home</Link>
        <Link to='/shop' className='font-semibold text-black cursor-pointer'>Shop</Link>
        <Link to='/collection' className='font-semibold text-black cursor-pointer'>Collection</Link>
        <Link to='/products' className='font-semibold text-black cursor-pointer'>Products</Link>
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
  )
}

export default Navbar