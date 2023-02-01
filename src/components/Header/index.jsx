import React from 'react'
import Logo from '../../assets/images/logo.png'
import {MdExpandMore, MdMessage} from 'react-icons/md'
import {FaUser, FaShoppingCart, FaHeart} from 'react-icons/fa'
import Button from '../Button'

export default function Navigation() {
    return (
        <>
        <div className='w-full'>
            <div className='max-w-full mx-[130px] flex justify-between items-center py-5'>
                <img className='w-[150px] h-[46px]' src={Logo} alt="logo" />
                <div className='flex items-center w-[665px] h-10 border border-blue rounded-md'>
                    <input type="text" placeholder='Search' className='w-[420px] h-full rounded-tl-md rounded-bl-md  placeholder:pl-[10px]'  />
                    <div className='w-[145px] h-full bg-white flex justify-between px-2 items-center border-l border-blue cursor-pointer'>
                        <h2>All category</h2>
                        <MdExpandMore />
                    </div>
                    <Button className='px-7 py-[7px]' isPrimary type='link' href={'/'}>Search</Button>
                </div>
                <div className='flex justify-between w-[228px] h-10 ml-[89px] cursor-pointer'>
                    <div className='flex flex-col items-center text-gray-500'>
                        <FaUser />
                        <p className='font-normal text-xs mt-2'>Profile</p>
                    </div>
                    <div className='flex flex-col items-center text-gray-500'>
                        <MdMessage />
                        <p className='font-normal text-xs pt-2'>Message</p>
                    </div>
                    <div className='flex flex-col items-center text-gray-500'>
                        <FaHeart />
                        <p className='font-normal text-xs pt-2'>Orders</p>
                    </div>
                    <div className='flex flex-col items-center text-gray-500'>
                        <FaShoppingCart />
                        <p className='font-normal text-xs pt-2'>My cart</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
