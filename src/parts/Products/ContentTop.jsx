import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {BsFillGridFill} from 'react-icons/bs'
import {ImMenu} from 'react-icons/im'

export default function ContentTop() {
    const options = ['featured', 'best seller', 'latest', 'update'];
    const defaultOption = options[0];

  return (
    <div className='w-[920px] h-[62px] bg-white border border-gray-300 rounded-md flex items-center pl-5'>
      <div className='w-full flex justify-between items-center'>
        <p className='font-normal text-base text-dark'>12,911 items in <span className='font-semibold'>Mobile accessory</span></p>
        <div className='flex items-center'>
            <input type="checkbox" />
            <p className='font-normal text-dark text-base ml-1'>Verified only</p>
            <Dropdown options={options} value={defaultOption} placeholder="Select an option" className='ml-2 cursor-pointer'/>
            <div className='flex w-[85px] h-[40px] border border-gray-300 rounded-md mx-[10px]'>
                <div className='p-[11px]'>
                  <BsFillGridFill className='w-[18px] h-[18px] cursor-pointer'/>
                </div>
                <div className='bg-gray-200 p-[11px] rounded-tr-md  rounded-br-md '>
                  <ImMenu className='w-[18px] h-[18px] cursor-pointer'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
