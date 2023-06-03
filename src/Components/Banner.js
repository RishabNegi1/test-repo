import React from 'react';
import ReactTyped from 'react-typed';

const Banner = () => {
    return (
        <div className=' p-6 md:p-10 img'>
        <div className=' m-60 font-serif max-w-[1240px] mx-auto text-center'>
            <h1 className=' font-bold text-2xl md:text-4xl text-[#4C4C6D]'>"Sometimes you never know the value of a moment until it </h1>
            <h1 className=' font-bold text-[#4C4C6D] text-2xl md:text-4xl m-6'>
            <ReactTyped 
            className=' pl-4'
             strings={['becomes a memory."']}
             typeSpeed={200}
             backSpeed={150}
             loop={true}
            />
            </h1>
        </div>
        </div>
      )
}

export default Banner