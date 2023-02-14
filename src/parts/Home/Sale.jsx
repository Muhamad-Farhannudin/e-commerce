import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CountdownTimer from '../../CoutDowntimer';

export default function Sale({fetchURL}) {

  const THREE_DAYS_IN_MS = 10 * 20 * 25 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const [sale, setSale] = useState([]);
  // const sales = sale[Math.floor(Math.random() * sale.length)]

  useEffect(() => {
    axios.get(fetchURL).then((Response) => {
      setSale(Response.data.products)
    })
}, [fetchURL]);
console.log(sale);
  return (
    <>
    <div className='max-w-full mx-4 lg:mx-[130px] mt-[30px] mb-5 bg-white border border-gray-300 rounded-md'>
        <div className='block md:flex'>
            <div className='w-full md:w-[250px] pt-5 pl-5 border-r border-gray-300 flex justify-between md:block'>
              <div>
                <h2 className='font-semibold text-lg md:text-xl text-dark'>Deals and offers</h2>
                <p className='font-normal text-sm md:text-base text-gray-500'>Hygiene equipments</p>
              </div>
                <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            </div>
            <div className='grid grid-cols-2 gap-2 md:gap-0 md:flex mt-3 md:mt-0 pl-4 md:pl-0'>
              {sale.slice(7, 12).map((item, id) => (
            <div className='w-[150px] md:w-[198px] h-[235px] border md:border-r border-gray-300 ' >
              <div className='mx-5 cursor-pointer '>
                <img className='w-[140px] h-[140px]' key={id} src={item?.images[0]} alt={item?.title} />
                <div className='flex flex-col items-center'>
                  <p className='pt-3 text-center text-dark font-normal text-base' key={id} >{item?.category}</p>
                  <div className='w-[75px] bg-[#FFE3E3] rounded-[29px] mt-2'>
                    <p className='text-center text-[#EB001B] font-medium text-base' key={id}>$ {item?.price}</p>
                  </div>
                </div>
              </div>
            </div>
              ))}
            </div>
        </div>
    </div>
    </>
  )
}