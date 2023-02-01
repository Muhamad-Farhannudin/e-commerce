import React from 'react'
import ImageMain from '../../assets/images/main/main.png'
import User from '../../assets/images/main/user.png'
import Button from '../../components/Button'
// import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <>
    <div className='max-w-full mx-[130px] mt-5 bg-white border border-gray-300 rounded-md'>
        <div className='flex justify-between py-5 px-[14px]'>
            <div className='w-[25%] h-[360px] flex flex-col justify-center font-normal text-base text-gray-500 group'>
                <ul className='px-3 leading-10 cursor-pointer'>
                    <li className='pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]'>Automobiles</li>
                    <li className='pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]'>Clothes and wear</li>
                    <li className='pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]'>Home interiors</li>
                    <li className='pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]'>Computer and tech</li>
                    <li className='pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]'>Tools, equipments</li>
                    <li className='pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]'>Sports and outdoor</li>
                    <li className='pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]'>and pets</li>
                    <li className='pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]'>MachMachinery tools</li>
                    <li className='pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]'>More category</li>
                </ul>
            </div>
            <div className='w-[665px] h-[360px]'>
                <img src={ImageMain} alt="main" />
            </div>
            <div className='flex flex-col justify-between'>
                <div className='w-[200px] h-[150px] bg-blue-100 rounded-md pl-[10px]'>
                    <div className='w-[165px] flex items-center justify-between pt-3'>
                        <img src={User} alt="user" className='w-[44px] h-[44px]' />
                        <p className='font-normal text-base text-dark'>Hi, user <span className='block'>let's get stated</span></p>
                    </div>
                    <div className='mt-2'>
                    <Button isPrimary className='px-[62px] py-[7px] text-sm rounded-md'>Join now</Button>
                    <Button isSecondary className='px-[71px] py-[7px] mt-1 text-sm rounded-md'>Log in</Button>
                    </div>
                </div>
                <div className='w-[200px] h-[95px] bg-[#F38332] rounded-md'>
                    <h3 className='text-white font-normal text-base py-3 pl-4 pr-10'>Get US $10 off with a new supplier</h3>
                </div>
                <div className='w-[200px] h-[95px] bg-[#55BDC3] rounded-md'>
                    <h3 className='text-white font-normal text-base py-3 pl-4 pr-10'>Send quotes with supplier preferences</h3>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
