import React, { useState } from "react";
import Range from "./Range";
import Rate2 from '../../assets/images/Ratings/rating2.png'
import Rate3 from '../../assets/images/Ratings/rating3.png'
import Rate4 from '../../assets/images/Ratings/rating4.png'
import Rate5 from '../../assets/images/Ratings/rating5.png'

export default function Sidebar() {
  const [toggle, setToggle] = useState(true);
  const [see, setSee] = useState(false);
  const handleClick = () => {
    setToggle((current) => !current);
  };

  const [brand, setBrand] = useState(true);
  const [seebrand, setSeebrand] = useState(false);
  const handleBrand = () => {
    setBrand((current) => !current);
  };

  const [feature, setfeature] = useState(true);
  const [seefeature, setSeefeature] = useState(false);
  const handleFeature = () => {
    setfeature((current) => !current);
  };

  const [price, setPrice] = useState(true);
  const handlePrice = () => {
    setPrice((current) => !current);
  };

  const [condition, setCondition] = useState(true);
  const handleCondition = () => {
    setCondition((current) => !current);
  };

  const [rate, setRate] = useState(true);
  const handleRate = () => {
    setRate((current) => !current);
  };

  return (
    <div className="w-[240px] h-full mx-[130px]">
      <div className="">
        <ul>
          <li>
            <div onClick={() => setToggle(!toggle)} className="border-t border-gray-300 flex justify-between cursor-pointer py-[14px] text-dark font-semibold text-base">
              Category
              <div className={toggle ? "rotate-180" : ""} onClick={handleClick}>
                <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            {toggle && (
              <ul className="font-normal text-gray-600 text-base cursor-pointer leading-8 py-2">
                <li className=" hover:text-dark hover:font-semibold">Mobile accessory</li>
                <li className=" hover:text-dark hover:font-semibold">Electronics</li>
                <li className=" hover:text-dark hover:font-semibold">Smartphones</li>
                <li className=" hover:text-dark hover:font-semibold">Modern tech</li>
                <div onClick={() => setSee(!see)} className={see ? "hidden top-5" : "text-blue cursor-pointer"}>
                  See all
                </div>
                {see && (
                  <ul className="font-normal text-gray-600 text-base cursor-pointer leading-8">
                    <li className="hover:text-dark hover:font-semibold">Laptops</li>
                    <li className="hover:text-dark hover:font-semibold">PC Gamming</li>
                  </ul>
                )}
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => setBrand(!brand)} className="border-t border-gray-300 flex justify-between cursor-pointer py-[14px] text-dark font-semibold text-base">
              Brands
              <div className={brand ? "rotate-180" : ""} onClick={handleBrand}>
                <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            {brand && (
              <ul className="font-normal text-gray-600 text-base cursor-pointer leading-8 py-2">
                <div className="flex items-center">
                  <input type="checkbox" className="cursor-pointer w-5 h-5" />
                  <li className="ml-2 hover:text-dark hover:font-semibold">Samsung</li>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="cursor-pointer w-5 h-5" />
                  <li className="ml-2 hover:text-dark hover:font-semibold">Apple</li>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="cursor-pointer w-5 h-5" />
                  <li className="ml-2 hover:text-dark hover:font-semibold">Huawei</li>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="cursor-pointer w-5 h-5" />
                  <li className="ml-2 hover:text-dark hover:font-semibold">Pocco</li>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="cursor-pointer w-5 h-5" />
                  <li className="ml-2 hover:text-dark hover:font-semibold">Lenovo</li>
                </div>
                <div onClick={() => setSeebrand(!seebrand)} className={seebrand ? "hidden top-5" : "text-blue cursor-pointer"}>
                  See all
                </div>
                {seebrand && (
                  <>
                    <div className="flex items-center">
                      <input type="checkbox" className="cursor-pointer w-5 h-5" />
                      <li className="ml-2 hover:text-dark hover:font-semibold">Oppo</li>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="cursor-pointer w-5 h-5" />
                      <li className="ml-2 hover:text-dark hover:font-semibold">Xiaomi</li>
                    </div>
                  </>
                )}
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => setfeature(!feature)} className="border-t border-gray-300 flex justify-between cursor-pointer py-[14px] text-dark font-semibold text-base">
              Features
              <div className={feature ? "rotate-180" : ""} onClick={handleFeature}>
                <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            {feature && (
              <ul className="font-normal text-gray-600 text-base cursor-pointer leading-8 py-2">
                <div className="flex items-center">
                  <input type="checkbox" className="cursor-pointer w-5 h-5" />
                  <li className="ml-2 hover:text-dark hover:font-semibold">Metalic</li>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="cursor-pointer w-5 h-5" />
                  <li className="ml-2 hover:text-dark hover:font-semibold">Plastic cover</li>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="cursor-pointer w-5 h-5" />
                  <li className="ml-2 hover:text-dark hover:font-semibold">8GB Ram</li>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="cursor-pointer w-5 h-5" />
                  <li className="ml-2 hover:text-dark hover:font-semibold">Super Power</li>
                </div>
                <div onClick={() => setSeefeature(!seefeature)} className={seefeature ? "hidden top-5" : "text-blue cursor-pointer"}>
                  See all
                </div>
                {seefeature && (
                  <>
                    <div className="flex items-center">
                      <input type="checkbox" className="cursor-pointer w-5 h-5" />
                      <li className="ml-2 hover:text-dark hover:font-semibold">Large Memory</li>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" className="cursor-pointer w-5 h-5" />
                      <li className="ml-2 hover:text-dark hover:font-semibold">Dual Camera</li>
                    </div>
                  </>
                )}
              </ul>
            )}
          </li>
          
          <li>
            <div onClick={() => setPrice(!price)} className="border-t border-gray-300 flex justify-between cursor-pointer py-[14px] text-dark font-semibold text-base">
              Price range
              <div className={price ? "rotate-180" : ""} onClick={handlePrice}>
                <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            {price && <Range />}
          </li>
          <li>
            <div onClick={() => setCondition(!condition)} className="border-t border-gray-300 flex justify-between cursor-pointer py-[14px] text-dark font-semibold text-base">
              Condition
              <div className={condition ? "rotate-180" : ""} onClick={handleCondition}>
                <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            {condition && (
              <ul className="font-normal text-gray-600 text-base cursor-pointer leading-8 py-2">
                <div className="flex items-center">
                  <input type="radio" className="cursor-pointer w-5 h-5" />
                  <li className="ml-2 hover:text-dark hover:font-semibold">Any</li>
                </div>
                <div className="flex items-center">
                  <input type="radio" className="cursor-pointer w-5 h-5" />
                  <li className="ml-2 hover:text-dark hover:font-semibold">Refurbished</li>
                </div>
                <div className="flex items-center">
                  <input type="radio" className="cursor-pointer w-5 h-5" />
                  <li className="ml-2 hover:text-dark hover:font-semibold">Brand new</li>
                </div>
                <div className="flex items-center">
                  <input type="radio" className="cursor-pointer w-5 h-5" />
                  <li className="ml-2 hover:text-dark hover:font-semibold">Old items</li>
                </div>
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => setRate(!rate)} className="border-t border-gray-300 flex justify-between cursor-pointer py-[14px] text-dark font-semibold text-base">
              Ratings
              <div className={rate ? "rotate-180" : ""} onClick={handleRate}>
                <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </div>
            {rate && (
              <div className="font-normal text-gray-600 text-base cursor-pointer py-2">
                <div className="flex items-center my-2">
                  <input type="checkbox" className="cursor-pointer w-5 h-5" />
                  <img src={Rate5} alt="rating-5" className="w-[93px] h-[18px] ml-2"/>
                </div>
                <div className="flex items-center my-2">
                  <input type="checkbox" className="cursor-pointer w-5 h-5" />
                  <img src={Rate4} alt="rating-4" className="w-[93px] h-[18px] ml-2"/>
                </div>
                <div className="flex items-center my-2">
                  <input type="checkbox" className="cursor-pointer w-5 h-5" />
                  <img src={Rate3} alt="rating-3" className="w-[93px] h-[18px] ml-2"/>
                </div>
                <div className="flex items-center my-2">
                  <input type="checkbox" className="cursor-pointer w-5 h-5" />
                  <img src={Rate2} alt="rating-2" className="w-[93px] h-[18px] ml-2"/>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
