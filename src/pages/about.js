import {FaArrowRight} from 'react-icons/fa';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function ContactMe()
{
    return(
        <div className = 'max-w-lg w-full text-center m-auto pt-36 pb-10'>
          <h2 className='text-red-600 text-center text-4xl'> About us</h2>
          <div className='max-w-lg w-full text-center m-auto pt-2 pb-10'>
            <p>
            All our products and services shall be offered with the same love, care, and affection as if, they were meant for the most beloved person.
            Being fair to all our customers, stakeholders and business partners, suppliers and employees. For we believe good intentions yield good products & 
            services is to make Monginis living proof that hard-work, integrity, innovation, and continued support can lead to all levels of success. 
            
            Our mission is to offer gourmet cakes, pastries, cupcakes, cookies, and more that are universally enjoyed by family and friends and make Monginis a part of all life's celebrations and memories.

            Our Core purpose is to help people express their happiness in a memorable way.  
            </p>
<br></br>
          <h1 className='text-center text-2xl text-red-800'> Contact us: +91 9968252555</h1>
          </div>
            <h1 className = 'text-2xl sm:text-4xl'>Interested To Buy!</h1>
            <Link to='/menu'>
                <span className = 'mt-6 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer'>
                    <div className = 'flex flex-row items-center'>
                        <span className = 'mr-3'>Order Now</span>
                        <FaArrowRight color = 'white'/>

                    </div>
                </span>
            
            </Link>
        </div>
    )
}