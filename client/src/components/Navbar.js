import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='text-center fixed z-30 top-0 bg-[#E6826E] font-bold w-full text-xl text-white flex justify-between font-serif font-s h-16 max-h-16 m-0 mb-0'  >
      <div className=' w-10 h-full flex'>
        <img src="./Favicon.ico" className="max-h-12 p-2"></img>
        <h1 className='p-2 pt-4 inline-block  text-white font-extrabold '> BetterYou</h1>
      </div>
      <ul>
        <li className='inline-block py-4 hover:text-red-900'>
          <Link to='/' className='pl-6 pr-8'>
            Home
          </Link>
        </li>
        <li className='inline-block py-4 hover:text-red-900'>
          <Link to='/articles-list' className='pl-6 pr-8'>
            Articles
          </Link> 
        </li>
        {/* <li className='inline-block py-4 hover:text-red-900'>
          <Link to='/AskQuestion.js' className='pl-6 pr-8'>
            Doubts?
          </Link> 
        </li> */}

        <li className='inline-block py-4 hover:text-red-900'>
          <Link to='/AdminDashboard.js' className='pl-6 pr-8'>
            Dashboard
          </Link> 
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
