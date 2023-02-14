import axios from 'axios';
import React, { useEffect, useState } from 'react'
import imgFurniture from '../../assets/images/furniture/furniture.jpg'

export default function Furniture({fetchURL}) {
    const [home, setHome] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((Response) => {
          setHome(Response.data.products)
        })
    }, [fetchURL]);
    console.log(home);
  return (
    <>
    <div className='hidden xl:flex max-w-full h-[257px] mx-[130px] mt-[30px] mb-4 first-line:bg-white border border-gray-300 rounded-md bg-white'>
        <div className='min-w-[251px] relative'>
          <img className='w-[290px] h-full transform -scale-x-100' src={imgFurniture} alt="img-Skincare" />
          <div className='text-dark absolute top-0 ml-[18px] mt-5'>
            <p className='font-semibold text-xl'>Furniture</p>
            <button className='bg-skin py-2 px-3 mt-[18px]'>Source now</button>
          </div>
        </div>
        <div className='w-full sm:-ml-3 flex flex-wrap justify-end cursor-pointer'>
            {home.slice(0,4).map((item) => (
            <div className='flex items-center w-[246px] h-[127px] border pr-3 hover:bg-slate-200'>
                <div className='ml-4 text-dark'>
                    <h3 className='font-normal text-base pr-3'>{item?.title}</h3>
                    <p className='font-normal text-gray-500 text-sm mt-2'>From <span className='block'>USD {item?.price}</span></p>
                </div>
                <img className='w-[82px] h-[82px]' src={item?.images[0]} alt={item?.title} />
            </div>
            ))}
            {home.slice(1,5).map((item) => (
            <div className='flex items-center w-[246px] h-[127px] border pr-3 hover:bg-slate-200'>
                <div className='ml-4 text-dark'>
                    <h3 className='font-normal text-base pr-3'>{item?.title}</h3>
                    <p className='font-normal text-gray-500 text-sm mt-2'>From <span className='block'>USD {item?.price}</span></p>
                </div>
                <img className='w-[82px] h-[82px]' src={item?.images[0]} alt={item?.title} />
            </div>
            ))}
        </div>
    </div>
    
    <div className='md:hidden mx-4 mt-5'>
    <h1 className="font-bold text-lg text-dark">Furniture</h1>
        <div className="grid grid-cols-2">
        {home.slice(1,5).map((item) => (
            <div className='flex items-center w-[180px] h-[127px] border pr-3 hover:bg-slate-200'>
                <div className='ml-4 text-dark'>
                    <h3 className='font-normal text-sm md:text-base pr-3'>{item?.title}</h3>
                    <p className='font-normal text-gray-500 text-sm mt-2'>From <span className='block'>USD {item?.price}</span></p>
                </div>
                <img className='w-[82px] h-[82px]' src={item?.images[0]} alt={item?.title} />
            </div>
            ))}
        </div>
    </div>

    </>
  )
}
