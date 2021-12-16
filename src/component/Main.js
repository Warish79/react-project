import React from 'react';
import { Link } from 'react-router-dom';
import partycake1 from '../images/partycake1.jpg'

const Main = () => {
  return (
    <div className = 'w-full text-center bg-grey-500 '> 
    <div className='bg-green-800 bg-fixed h-screen flex flex-col justify-center items-center'src={partycake1}>
       
      <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-10'>
        Cakemakers
      </h1>
      <Link
        className='py-6 px-10 bg-gray-600 rounded-full text-3xl hover:bg-gray-300 transition duration-600 ease-in-out flex items-center animate-bounce'
        to='/menu'>
        Order Now{' '}
        <svg
          className='w-6 h-5 ml-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      </Link>
    </div>
    </div>
  );
};

export default Main;