import React from "react";
import Logo from "../../assets/images/logo.png";
import { MdMessage } from "react-icons/md";
import { FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
import Dropdown from 'react-dropdown'
import Button from "../Button";

export default function Navigation() {
  const options = ['All Category', 'Mobile accessory', 'Electronic', 'Smartphones', 'Modern tech', 'Laptops']
  const defaultOption = options[0];
  return (
    <>
      <div className="w-full">
        <div className="max-w-full mx-[130px] flex justify-between items-center py-5">
          <img className="w-[150px] h-[46px]" src={Logo} alt="logo" />
          <div className="flex items-center w-[665px] h-10 border border-blue rounded-md">
            <input type="text" placeholder="Search" className="w-[420px] h-full rounded-tl-md rounded-bl-md pl-[10px]" />
            <div className="w-[145px] bg-white border-l border-blue cursor-pointer">
                <Dropdown options={options} value={defaultOption} className='text-sm text-dark cursor-pointer w-[155px]'/>
            </div>
            <Button className="px-7 py-[7px] " isPrimary type="link" href={"/"}>
              Search
            </Button>
          </div>
          <div className="flex justify-between w-[228px] h-10 ml-[89px] cursor-pointer">
            <div className="flex flex-col items-center hover:text-gray-900 hover:translate-y-1 hover:duration-300 text-gray-500">
              <FaUser />
              <p className="font-normal text-xs mt-2">Profile</p>
            </div>
            <div className="flex flex-col items-center hover:text-gray-900 hover:translate-y-1 hover:duration-300 text-gray-500">
              <MdMessage />
              <p className="font-normal text-xs pt-2">Message</p>
            </div>
            <div className="flex flex-col items-center hover:text-gray-900 hover:translate-y-1 hover:duration-300 text-gray-500">
              <FaHeart />
              <p className="font-normal text-xs pt-2">Orders</p>
            </div>
            <div className="flex flex-col items-center hover:text-gray-900 hover:translate-y-1 hover:duration-300 text-gray-500">
              <FaShoppingCart />
              <p className="font-normal text-xs pt-2">My cart</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
