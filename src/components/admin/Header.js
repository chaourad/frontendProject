import React from 'react';
import {  VscColorMode } from "react-icons/vsc";
import {  IoIosNotifications } from "react-icons/io";

import { BiMessageDetail, BiSearchAlt2 } from "react-icons/bi";

function Header() {
  return (
    <div className="navbar h-16 border-b border-gray-300 flex items-center text-gray-500 text-sm">
         <div className='h-16 w-52 sm:w-52 flex items-center justify-center '>
          <span className='text-xl font-bold text-blue-500'>Admin Panel</span>
        </div>
      <div className="wrapper flex items-center w-full p-5 justify-between">
        <div className="search flex items-center border border-lightgray p-1">
          <input
            className="border-none outline-none bg-transparent text-gray-500 placeholder-gray-400 text-sm"
            type="text"
            placeholder="Search..."
          />
          <BiSearchAlt2 />
        </div>
        <div className="items flex items-center">
        
          <div className="item flex items-center mr-4">
            <VscColorMode className='icon' />
          </div>
          <div className="item flex items-center mr-4 relative">
            <IoIosNotifications className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className="item flex items-center mr-4 relative">
            <BiMessageDetail className='icon' />
            <div className='counter'>2</div>
          </div>
          <div className="item">
            <img src='https://www.iriset.in/tms/uploads/profile/profile.png' alt="user"   className="w-[30px] h-[30px] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
