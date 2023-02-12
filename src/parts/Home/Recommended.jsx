import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Recommended({fetchURL}) {
    const [rec, setRec] = useState([]);

    useEffect(() => {
        axios.get(fetchURL).then((Response) => {
            setRec(Response.data.products)
        });
    },[fetchURL]);
    console.log(rec);

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    }
  return (
    <>
    <div className='max-w-full mx-4 md:mx-[130px] my-[30px]'>
        <h1 className='font-semibold text-dark text-2xl'>Recommended items</h1>
        <div className='grid grid-cols-2 gap-2 md:flex md:justify-between mt-6 cursor-pointer'>
            {rec.slice(23, 28).map((item) => (
            <div className='w-[230px] flex flex-col items-center pt-2 quote hover:bg-slate-200 transition-all duration-200'>
                <img className='w-[200px] h-[200px]' src={item.images[0]} alt="data" />
                <div className='pl-4'>
                <h3 className='font-semibold tex-dark text-base mt-[14px]'>${item.price}</h3>
                <p className='font-normal text-gray-500 text-base mt-1'>{truncateString(item?.description, 70)}</p>
                </div>
            </div>
            ))}
        </div>
        <div className='grid grid-cols-2 gap-2 md:flex md:justify-between mt-6 cursor-pointer'>
            {rec.slice(17, 22).map((item) => (
            <div className='w-[230px] flex flex-col items-center pt-2 quote hover:bg-slate-200 transition-all duration-200'>
                <img className='w-[200px] h-[200px]' src={item?.images[0]} alt="data" />
                <div className='pl-4'>
                <h3 className='font-semibold tex-dark text-base mt-[14px]'>${item?.price}</h3>
                <p className='font-normal text-gray-500 text-base mt-1'>{truncateString(item?.description, 70)}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
    </>
  )
}
