import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({ toggle }) => {
    return (
        <nav
        className='flex justify-between items-center h-16 bg-red-600 text-black relative shadow-sm font-mono'
        role='navigation'
      >
        <Link to='/' className='p-4 hover:bg-blue-400 rounded'>
          CAKEWAKE
        </Link>
        <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
          <svg
            className='w-8 h-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
        <div className='pr-8 md:block  hidden'>
          <Link to='/' className='p-4 hover:bg-blue-500 rounded'>
            Home
          </Link>
          <Link to='/menu' className='p-4 hover:bg-blue-500 rounded'>
            Menu
          </Link>
         
          <Link to='/about' className='p-4 hover:bg-blue-500 rounded'>
            About
          </Link>
        </div>
      </nav>
    )
}

export default Navbar;
