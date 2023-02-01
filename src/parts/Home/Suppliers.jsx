import React from "react";
import flag from '../../assets/images/Supplier/icon.png'
import flag1 from '../../assets/images/Supplier/icon-1.png'
import flag2 from '../../assets/images/Supplier/icon-2.png'
import flag3 from '../../assets/images/Supplier/icon-3.png'
import flag4 from '../../assets/images/Supplier/icon-4.png'
import flag5 from '../../assets/images/Supplier/icon-5.png'
import flag6 from '../../assets/images/Supplier/icon-6.png'
import flag7 from '../../assets/images/Supplier/icon-7.png'
import flag8 from '../../assets/images/Supplier/icon-8.png'
import flag9 from '../../assets/images/Supplier/icon-9.png'

export default function Suppliers() {
  return (
    <>
      <div className="max-w-full mx-[130px] my-[30px]">
        <h1 className="font-semibold text-dark text-2xl">Suppliers by region</h1>
        <div className="flex justify-between mt-6">
            <div className="flex items-center w-[221px] h-[36px]">
                <img className="w-7 h-5" src={flag} alt="flag" />
                <div className="font-normal flex flex-col ml-3">
                    <h3 className="text-base text-dark">Arabic Emirates</h3>
                    <p className="text-[13px] text-gray-500">shopname.ae</p>
                </div>
            </div>
            <div className="flex items-center w-[221px] h-[36px]">
                <img className="w-7 h-5" src={flag4} alt="flag4" />
                <div className="font-normal flex flex-col ml-3">
                    <h3 className="text-base text-dark">Australia</h3>
                    <p className="text-[13px] text-gray-500">shopname.ae</p>
                </div>
            </div>
            <div className="flex items-center w-[221px] h-[36px]">
                <img className="w-7 h-5" src={flag2} alt="flag2" />
                <div className="font-normal flex flex-col ml-3">
                    <h3 className="text-base text-dark">United States</h3>
                    <p className="text-[13px] text-gray-500">shopname.ae</p>
                </div>
            </div>
            <div className="flex items-center w-[221px] h-[36px]">
                <img className="w-7 h-5" src={flag9} alt="flag9" />
                <div className="font-normal flex flex-col ml-3">
                    <h3 className="text-base text-dark">Russia</h3>
                    <p className="text-[13px] text-gray-500">shopname.ru</p>
                </div>
            </div>
            <div className="flex items-center w-[221px] h-[36px]">
                <img className="w-7 h-5" src={flag7} alt="flag7" />
                <div className="font-normal flex flex-col ml-3">
                    <h3 className="text-base text-dark">Italy</h3>
                    <p className="text-[13px] text-gray-500">shopname.it</p>
                </div>
            </div>
        </div>
        <div className="flex justify-between mt-6">
            <div className="flex items-center w-[221px] h-[36px]">
                <img className="w-7 h-5" src={flag1} alt="flag1" />
                <div className="font-normal flex flex-col ml-3">
                    <h3 className="text-base text-dark">Denmark</h3>
                    <p className="text-[13px] text-gray-500">denmark.com.dk</p>
                </div>
            </div>
            <div className="flex items-center w-[221px] h-[36px]">
                <img className="w-7 h-5" src={flag5} alt="flag5" />
                <div className="font-normal flex flex-col ml-3">
                    <h3 className="text-base text-dark">France</h3>
                    <p className="text-[13px] text-gray-500">shopname.com.fr</p>
                </div>
            </div>
            <div className="flex items-center w-[221px] h-[36px]">
                <img className="w-7 h-5" src={flag3} alt="flag3" />
                <div className="font-normal flex flex-col ml-3">
                    <h3 className="text-base text-dark">Arabic Emirates</h3>
                    <p className="text-[13px] text-gray-500">shopname.ae</p>
                </div>
            </div>
            <div className="flex items-center w-[221px] h-[36px]">
                <img className="w-7 h-5" src={flag6} alt="flag6" />
                <div className="font-normal flex flex-col ml-3">
                    <h3 className="text-base text-dark">China</h3>
                    <p className="text-[13px] text-gray-500">shopname.ae</p>
                </div>
            </div>
            <div className="flex items-center w-[221px] h-[36px]">
                <img className="w-7 h-5" src={flag8} alt="flag8" />
                <div className="font-normal flex flex-col ml-3">
                    <h3 className="text-base text-dark">Great Britain</h3>
                    <p className="text-[13px] text-gray-500">shopname.co.uk</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
