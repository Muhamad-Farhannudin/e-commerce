import React from 'react'
import Img1 from '../../assets/images/Releated/img-1.png'
import Img2 from '../../assets/images/Releated/img-2.png'
import Img3 from '../../assets/images/Releated/img-3.png'
import Img4 from '../../assets/images/Releated/img-4.png'
import Img5 from '../../assets/images/Releated/img-5.png'
import Super from '../../assets/images/Releated/super.png'

export default function Releated() {
  return (
    <>
    <div className='max-w-full h-[330px] mx-[130px] bg-white border border-gray-300 rounded-md my-5'>
      <p className='font-bold text-xl text-dark mt-5 ml-[22px]'>Releated Products</p>
      <div className='flex justify-between mx-[22px] mt-4'>
        <div>
            <img src={Img1} alt="img1" className='w-[172px] h-[172px]'/>
            <h3 className='font-normal text-base text-gray-600 mt-[14px]'>Thermos Electric Elegant</h3>
            <p className='font-normal text-base text-gray-500'>$32.00-$40.00</p>
        </div>
        <div>
            <img src={Img2} alt="img2" className='w-[172px] h-[172px]'/>
            <h3 className='font-normal text-base text-gray-600 mt-[14px]'>Laptop Lenovo Ideapad 330</h3>
            <p className='font-normal text-base text-gray-500'>$39.00-$70.00</p>
        </div>
        <div>
            <img src={Img3} alt="img3" className='w-[172px] h-[172px]'/>
            <h3 className='font-normal text-base text-gray-600 mt-[14px]'>Earphone gamming RGB</h3>
            <p className='font-normal text-base text-gray-500'>$14.00-$27.00</p>
        </div>
        <div>
            <img src={Img4} alt="img4" className='w-[172px] h-[172px]'/>
            <h3 className='font-normal text-base text-gray-600 mt-[14px]'>Tab Advan</h3>
            <p className='font-normal text-base text-gray-500'>$32.00-$40.00</p>
        </div>
        <div>
            <img src={Img5} alt="img5" className='w-[172px] h-[172px]'/>
            <h3 className='font-normal text-base text-gray-600 mt-[14px]'>Xiaomi Redmi 8 Original</h3>
            <p className='font-normal text-base text-gray-500'>$32.00-$40.00</p>
        </div>
      </div>
    </div>
    <div className='max-w-full mx-[130px] my-5'>
    <img src={Super} alt="super"/>
    </div>
    </>
  )
}
