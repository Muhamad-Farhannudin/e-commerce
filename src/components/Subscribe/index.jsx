import React from 'react'
import Button from '../Button'

export default function index() {
  return (
    <>  
    <div className='w-full h-[190px] flex items-center bg-gray-200'>
        <div className='w-[617px] h-[113px] flex flex-col items-center mx-auto'>
            <h3 className='font-bold text-xl text-dark'>Subscribe on our newsletter</h3>
            <p className='font-normal text-sm md:text-base text-[#606060]'>Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className='flex mt-[21px] relative items-center'>
                <input type="email" placeholder='Email' className='w-[275px] h-[40px] pl-9 text-dark border border-gray-300 rounded-md' />
                <div className='absolute left-2'>
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.1666 2.49996C19.1666 1.49163 18.3416 0.666626 17.3333 0.666626H2.66665C1.65831 0.666626 0.833313 1.49163 0.833313 2.49996V13.5C0.833313 14.5083 1.65831 15.3333 2.66665 15.3333H17.3333C18.3416 15.3333 19.1666 14.5083 19.1666 13.5V2.49996ZM17.3333 2.49996L9.99998 7.08329L2.66665 2.49996H17.3333ZM17.3333 13.5H2.66665V4.33329L9.99998 8.91663L17.3333 4.33329V13.5Z" fill="#8B96A5"/>
                    </svg>
                </div>
                <Button isPrimary type={'button'} className='px-4 py-[8px] ml-2 btn-primary rounded-md'>Subscribe</Button>
            </div>
        </div>
    </div>
    </>
  )
}
