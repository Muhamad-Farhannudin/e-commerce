import axios from 'axios';
import React, { useEffect, useState } from 'react'
import imgSkin from '../../assets/images/Skincare/skincare.jpg'

export default function Skincare({fetchURL}) {
    const [skin, setSkin] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((Response) => {
          setSkin(Response.data.products)
        })
    }, [fetchURL]);
    console.log(skin);
  return (
    <div className='flex max-w-full h-[257px] mx-[130px] mt-[30px] mb-4 first-line:bg-white border border-gray-300 rounded-md bg-white'>
        <div className='min-w-[252px] relative'>
          <img className='h-[257px] transform -scale-x-100' src={imgSkin} alt="img-Skincare" />
          <div className='text-dark absolute top-0 ml-[18px] mt-5'>
            <p className='font-semibold text-xl'>Skincare</p>
            <button className='bg-skin py-2 px-3 mt-[18px]'>Source now</button>
          </div>
        </div>
        <div className='w-full flex flex-wrap justify-end cursor-pointer'>
            {skin.slice(0,4).map((item) => (
            <div className='flex items-center w-[246px] h-[127px] border pr-3 hover:bg-slate-200'>
                <div className='ml-4 text-dark'>
                    <h3 className='font-normal text-base pr-3'>{item?.title}</h3>
                    <p className='font-normal text-gray-500 text-sm mt-2'>From <span className='block'>USD {item?.price}</span></p>
                </div>
                <img className='w-[82px] h-[82px]' src={item?.images[0]} alt={item?.title} />
            </div>
            ))}
            {skin.slice(1,5).map((item) => (
            <div className='flex items-center w-[246px] h-[127px] border pr-3  hover:bg-slate-200'>
                <div className='ml-4 text-dark'>
                    <h3 className='font-normal text-base pr-3'>{item?.title}</h3>
                    <p className='font-normal text-gray-500 text-sm mt-2'>From <span className='block'>USD {item?.price}</span></p>
                </div>
                <img className='w-[82px] h-[82px]' src={item?.images[0]} alt={item?.title} />
            </div>
            ))}
            
        </div>
    </div>
  )
}
