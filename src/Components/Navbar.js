import React, { useState } from 'react'
import {FiSmile} from "react-icons/fi";
import {CgCloseO} from "react-icons/cg";

function Navbar (){
    const [toggle, setToggle] = useState(false);
    return (
      <div className=' bg-[#FEF2F4]'>
      <div className=' p-4 items-center max-w-[1240px] h-24 mx-auto sticky top-0'>
          <div className=' flex justify-between'>
          <h1 className=' text-2xl lg:text-3xl xl:text-3xl sm:text-3xl md:text-3xl font-bold text-[#8ABAD3FF] m-3'>COLLEGE <span className=' text-[#EDC2D8FF]'>MEMORIES</span></h1>
          {
            toggle?
            <CgCloseO onClick={()=>setToggle(!toggle)} className=' cursor-pointer text-4xl m-3 md:hidden block'/>
            :
            <FiSmile onClick={()=>setToggle(!toggle)} className=' cursor-pointer text-4xl m-3 md:hidden block'/>
          }
          
          <ul className='hidden md:flex text-xl font-bold text-[#358597] gap-7 m-3'>
          <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>
          <a href="gallery">Gallery</a>
          </li>
          <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>TIMELINE
          </li>
          <li className='  p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>INFO</li>
          <li className='p-2 cursor-pointer hover:bg-[#c9afb2] rounded-full'>SOCIALS
          </li>
        </ul>
        <ul className={` duration-300 p-10 md:hidden text-xl fixed w-full h-screen top-[98px] font-bold text-orange-200 bg-neutral-800
         ${toggle ? 'left-[0]' : 'left-[-100%]'}
        `}>
          <li className='p-5'>GALLERY</li>
          <li className='p-5'>TIMELINE</li>
          <li className='p-5'>INFO</li>
          <li className='p-5'>SOCIALS</li>
        </ul>
          </div>
      </div>
      </div>
    )
}

export default Navbar