import React from 'react'
import Shipping1 from '../../assets/images/shipping/shipping1.jpg'
import Shipping2 from '../../assets/images/shipping/shipping2.jpg'


export default function Shipping() {
  return (
    <div className='p-4'>
      <div className='w-[450px] md:w-[700px]'>
        <img src={Shipping1} alt="shipping1" />
        <img src={Shipping2} alt="shipping2" />
      </div>
    </div>
  )
}
