import React from 'react'
import {MdMenu, MdExpandMore} from 'react-icons/md'
import Flag from '../../assets/images/flag.png'

export default function index() {
  return (
    <>
    <div className='max-w-full mx-[130px] flex items-center justify-between'>
        <div className='flex items-center justify-between w-1/2 group'>
            <div className='flex items-center w-1/5 justify-evenly group-hover:cursor-pointer'>
                <MdMenu />
                <p className='font-medium text-base hover:opacity-70 hover:duration-300 hover:transition text-dark'>All category</p>
            </div>
            <p className='font-medium text-base hover:opacity-50 hover:duration-300 hover:transition text-dark group-hover:cursor-pointer'>Hot offers</p>
            <p className='font-medium text-base hover:opacity-50 hover:duration-300 hover:transition text-dark group-hover:cursor-pointer'>Gift boxes</p>
            <p className='font-medium text-base hover:opacity-50 hover:duration-300 hover:transition text-dark group-hover:cursor-pointer'>Projects</p>
            <p className='font-medium text-base hover:opacity-50 hover:duration-300 hover:transition text-dark group-hover:cursor-pointer'>Menu item</p>
            <div className='flex items-center justify-between group-hover:cursor-pointer'>
                <p className='font-medium text-base hover:opacity-50 hover:duration-300 hover:transition text-dark'>Help</p>
                <MdExpandMore />
            </div>
        </div>
        <div className='flex items-center justify-between w-1/5 group'>
            <div className='flex items-center justify-between group-hover:cursor-pointer'>
                <p className='font-medium text-base text-dark'>English, USD</p>
                <MdExpandMore />
            </div>
            <div className='flex items-center justify-around group-hover:cursor-pointer'>
                <p className='font-medium text-base text-dark px-3'>Ship to</p>
                <img src={Flag} alt="flag" className='w-[22px] h-[16px]'/>
                <MdExpandMore />
            </div>
        </div>
    </div>
    </>
  )
}
