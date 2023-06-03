import React from 'react';
import {AiOutlineInstagram ,AiFillFacebook, AiFillTwitterSquare} from "react-icons/ai";


const Footer = () => {
    return (
        <div name='footer' className=' bg-gray-900 font-serif mt-8'>
            <div className=' max-w-[1200px] mx-auto grid grid-rows-3 text-slate-200'>
            <div className=' row-span-1 mt-10'>
            <div className=' flex justify-center'>
              <p className='font-normal text-xl'>Life is too short. Embrace every moment</p>
              </div>  
            </div>
            <div className=' row-span-1 mt-4'>
              <h1 className=' text-lg'>Connect with me</h1>
              <div className=' flex justify-center p-4'>
              <p className=' p-2'><AiOutlineInstagram className='h-6 w-6 cursor-pointer'/></p>
              <p className=' p-2'><AiFillFacebook className='h-6 w-6 cursor-pointer'/></p>
              <p className=' p-2'><AiFillTwitterSquare className='h-6 w-6 cursor-pointer'/></p>
              </div>
            </div>
            <div className=' row-span-1 mt-6'>
            <p className=' text-base md:text-xl font-semibold text-slate-200'> © 2023 COLLEGE MEMORIES All rights reserved</p>
            </div>
          </div>
        </div>
      )
}

export default Footer