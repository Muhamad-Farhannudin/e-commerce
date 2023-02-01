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
    <div className='max-w-full mx-[130px] mt-[30px] mb-5 bg-white border border-gray-300 rounded-md'>
        <div className='flex justify-between'>
            <div className='w-[250px] pt-5 pl-5 border-r border-gray-300'>
                <h2 className='font-semibold text-xl text-dark'>Deals and offers</h2>
                <p className='font-normal text-base text-gray-500'>Hygiene equipments</p>
                <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            </div>
              {sale.slice(7, 12).map((item, id) => (
            <div className='w-[179px] h-[235px] border-r  border-gray-300' >
              <div className='mx-5'>
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
    </>
  )
}