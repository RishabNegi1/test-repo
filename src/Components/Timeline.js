import React from 'react';

const Timeline = () => {
  return (
    <div name='timeline' className='bg-white '>
    <h1 className=' font-bold text-2xl pt-5 md:pt-20 md:text-3xl underline'>TIMELINE</h1>
    <div className="antialiased max-w-[1360px] mx-auto text-gray-800 mt-10 lg:w-[80%] md:w-[80%] sm:w-[70%]">
        <div className="relative  px-6 flex flex-col space-y-8">
            <div className="absolute z-0 w-2 h-full bg-[#212A3E] shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0">
            </div>
            <div className="relative z-10">
                <img
                    src=""
                    alt=""
                    className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0"
                />
                <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16">
                    <div className="absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-[#C0DBEA] xs:top-11 xs:left-26 md:left-14" aria-hidden="true"></div>
                    <div className="bg-[#FDF4F5] p-6 rounded-md shadow-md">
                        <span className="font-bold text-indigo-600 text-sm tracking-wide"> August 2000</span>
                        <h1 className="text-2xl font-bold pt-1">
                            Lorem
                        </h1>
                        <p className="pt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem elit, feugiat eu bibendum at, rhoncus vitae ante. Nulla ac justo ac ex cursus lobortis. Curabitur ut commodo nibh, sit amet accumsan ex
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative z-10">
                <img
                    src=""
                    alt=""
                    className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0"
                />
                <div className=" relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16 timeline-container-left">
                    <div
                        className="absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-[#C0DBEA] xs:top-11 xs:left-26 md:left-14 timeline-pointer-left" 
                        aria-hidden="true">
                    </div>
                    <div className="bg-[#FDF4F5] p-6 rounded-md shadow-md">
                        <span class="font-bold text-indigo-600 text-sm tracking-wide">2000</span>
                        <h1 className="text-2xl font-bold pt-1">Ipsum</h1>
                        <p className="pt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem elit, feugiat eu bibendum at, rhoncus vitae ante. Nulla ac justo ac ex cursus lobortis. Curabitur ut commodo nibh, sit amet accumsan ex
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative z-10">
                <img
                    src=""
                    alt=""
                    className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0"
                />
                <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16">
                    <div className="absolute inset-0 left-10 h-4 w-4 transform rotate-45 bg-[#C0DBEA] xs:top-11 xs:left-26 md:left-14" aria-hidden="true"></div>
                    <div className="bg-[#FDF4F5] p-6 rounded-md shadow-md">
                        <span
                            className="font-bold text-indigo-600 text-sm tracking-wide">2000</span
                        >
                        <h1 className="text-2xl font-bold pt-1">
                            Lorem Ipsum
                        </h1>
                        <p className="pt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sem elit, feugiat eu bibendum at, rhoncus vitae ante. Nulla ac justo ac ex cursus lobortis. Curabitur ut commodo nibh, sit amet accumsan ex
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button className=' text-l md:text-xl text-white m-4 p-2 rounded-lg bg-[#222]'>MORE</button>
    </div>
)
}

export default Timeline