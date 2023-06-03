import React from 'react';
import Lt from '../Components/Img/lt.jpg';
import RnRs from '../Components/Img/rnrs.jpg';
import Grp from '../Components/Img/grp.jpg';
import RnLr from '../Components/Img/rnlr.jpg';
import Gr from '../Components/Img/gr.jpg';

const Gall = () => {
    return (
        <div id='gal' className='font-serif bg-[#EEEEEE]'>
          <h1 className=' font-bold text-2xl pt-5 md:pt-20 md:text-3xl underline'>GALLERY</h1>
        <div className=' mt-10 max-w-[1360px] mx-auto lg:grid grid-cols-3 grid-rows-2 lg:w-[80%] md:w-[60%] sm:w-[70%] items-center'>
          <div className=' col-span-1 p-4'>
            <img className=' inline' src={Lt} alt=''/>
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
        </div>
      )
}

export default Gall