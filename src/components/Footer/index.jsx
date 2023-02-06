import React from 'react'
import Logo from '../../assets/images/logo.png'
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaRegCopyright} from 'react-icons/fa'
import Iphone from '../../assets/images/Footer/iphone.png'
import Android from '../../assets/images/Footer/android.png'
import Icon from '../../assets/images/Supplier/icon-2.png'

export default function index() {
  return (
    <>
    <div className='w-full h-[324px]'>
        <div className='flex justify-between max-w-full mx-[130px] pt-10'>
            <div className='w-[276px] h-[157px]'>
                <img className='w-[150px] h-[46px]' src={Logo} alt="logo" />
                <p className='font-normal text-base text-gray-600 mt-4'>Best information about the company gies here but now lorem ipsum is</p>
                <div className='w-[200px] flex justify-between mt-4 cursor-pointer'>
                    <div className='w-8 h-8 hover:bg-gray-600 bg-gray-400 rounded-full text-white flex justify-center items-center text-base'>
                    <FaFacebookF />
                    </div>
                    <div className='w-8 h-8 hover:bg-gray-600 bg-gray-400 rounded-full text-white flex justify-center items-center text-base'>
                    <FaTwitter />
                    </div>
                    <div className='w-8 h-8 hover:bg-gray-600 bg-gray-400 rounded-full text-white flex justify-center items-center text-base'>
                    <FaLinkedinIn />
                    </div>
                    <div className='w-8 h-8 hover:bg-gray-600 bg-gray-400 rounded-full text-white flex justify-center items-center text-base'>
                    <FaInstagram />
                    </div>
                    <div className='w-8 h-8 hover:bg-gray-600 bg-gray-400 rounded-full text-white flex justify-center items-center text-base'>
                    <FaYoutube />
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-medium text-base text-dark'>About</p>
                <ul className='list-none font-normal text-base text-gray-500 mt-[10px] leading-7 cursor-pointer'>
                    <li className='hover:text-dark'>About Us</li>
                    <li className='hover:text-dark'>Find Store</li>
                    <li className='hover:text-dark'>Categories</li>
                    <li className='hover:text-dark'>Blogs</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <p className='font-medium text-base text-dark'>Partnerhip</p>
                <ul className='list-none font-normal text-base text-gray-500 mt-[10px] leading-7 cursor-pointer'>
                    <li className='hover:text-dark'>About Us</li>
                    <li className='hover:text-dark'>Find Store</li>
                    <li className='hover:text-dark'>Categories</li>
                    <li className='hover:text-dark'>Blogs</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <p className='font-medium text-base text-dark'>Informatio</p>
                <ul className='list-none font-normal text-base text-gray-500 mt-[10px] leading-7 cursor-pointer'>
                    <li className='hover:text-dark'>Help Center</li>
                    <li className='hover:text-dark'>Money Refund</li>
                    <li className='hover:text-dark'>Shipping</li>
                    <li className='hover:text-dark'>Contact Us</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <p className='font-medium text-base text-dark'>For users</p>
                <ul className='list-none font-normal text-base text-gray-500 mt-[10px] leading-7 cursor-pointer'>
                    <li className='hover:text-dark'>Login</li>
                    <li className='hover:text-dark'>Register</li>
                    <li className='hover:text-dark'>Settings</li>
                    <li className='hover:text-dark'>My Orders</li>
                </ul>
            </div>
            <div className='flex flex-col'>
                <p className='font-medium text-base text-dark'>Get app</p>
                <div className='flex flex-col w-[124px] h-[92px]'>
                    <img src={Iphone} alt="iPhone" className='mt-4' />
                    <img src={Android} alt="android" className='mt-2' />
                </div>
            </div>
        </div>
        <div className='max-w-full mt-[60px] bottom-0 bg-gray-300'>
            <div className='flex justify-between items-center mx-[130px]'>
                <div className='flex items-center justify-center text-[#606060]'>
                    <FaRegCopyright />
                    <p className='font-normal text-base text-[#606060] my-5 pl-2'>2023 Muhamad Farhannudin ~ Ecommerce.</p>
                </div>
                <div className='flex items-center justify-between w-[107px]'>
                    <img className='w-6 h-[17px]' src={Icon} alt="flag" />
                    <p className='font-normal text-base text-[#606060]'>English</p>
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 0.294922L0 6.29492L1.41 7.70492L6 3.12492L10.59 7.70492L12 6.29492L6 0.294922Z" fill="#1C1C1C"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
