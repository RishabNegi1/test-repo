import React from 'react';
import It from '../Components/Img/lt.jpg';
import RnRs from '../Components/Img/rnrs.jpg';
import Grp from '../Components/Img/grp.jpg';
import RnLr from '../Components/Img/rnlr.jpg';
import Gr from '../Components/Img/gr.jpg';
import { NavLink } from 'react-router-dom';

const Gallery = () => {
    return (
        <div id='gallery' className='font-serif bg-[#EEEEEE]'>
          <h1 className=' font-bold text-2xl pt-5 md:pt-20 md:text-3xl underline'>GALLERY</h1>
        <div className=' mt-10 max-w-[1360px] mx-auto lg:grid grid-cols-3 grid-rows-2 lg:w-[80%] md:w-[60%] sm:w-[70%] items-center'>
          <div className=' col-span-1 p-4'>
            <img className=' inline' src={It} alt=''/>
          </div>
          <div className=' row-span-2 p-2'>
            <img className=' inline' src={RnRs} alt=''/>
          </div>
          <div className=' col-span-1 p-2'>
            <img className=' inline' src={Grp} alt=''/>
          </div>
          <div className=' col-span-1 p-2'>
            <img className=' inline' src={Gr} alt=''/>
          </div>
          <div className=' col-span-1 p-2'>
          <img className=' inline' src={RnLr} alt=''/>
          </div>
        </div>
        <button onClick={load} className=' text-l md:text-xl text-white m-4 p-2 rounded-lg bg-[#222]'>
        <NavLink to={'/gal'}>MORE</NavLink>
        </button>
        </div>
      )
}

export default Gallery