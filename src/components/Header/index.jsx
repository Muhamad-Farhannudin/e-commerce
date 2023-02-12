import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { MdMessage, MdMenu, MdOutlineClose } from "react-icons/md";
import { FaUser, FaShoppingCart, FaHeart } from "react-icons/fa";
import Dropdown from "react-dropdown";
import Button from "../Button";
import { Link } from "react-router-dom";

export default function Navigation() {
  const options = ["All Category", "Mobile accessory", "Electronic", "Smartphones", "Modern tech", "Laptops"];
  const defaultOption = options[0];

  const [show, setShow] = useState(false);

  return (
    <>
      <div className="xl:w-full">
        <div className="max-w-full mx-4 lg:mx-[130px] flex xl:justify-between md:justify-between md:pr-24 lg:pr-0 items-center py-5">
          <div onClick={() => setShow(!show)} className="md:hidden w-6 h-6 bg-white mr-4 cursor-pointer">
            <MdMenu className={show ? "hidden" : "w-full h-full"} />
            <MdOutlineClose className={show ? "w-full h-full" : "hidden"} />
          </div>
          <Link to="/">
            <img className="w-[150px] h-[46px]" src={Logo} alt="logo" />
          </Link>
          <div className="hidden md:flex items-center xl:w-[665px] md:w-[400px] -translate-x-24 xl:translate-x-10  h-10 border border-blue rounded-md">
            <input type="text" placeholder="Search" className="w-[420px] h-full rounded-tl-md rounded-bl-md pl-[10px]" />
            <div className="w-[145px] bg-white border-l border-blue cursor-pointer ">
              <Dropdown options={options} value={defaultOption} className="text-sm text-dark cursor-pointer w-[155px]" />
            </div>
            <Button className="px-7 py-[7px] " isPrimary type="link" href={"/"}>
              Search
            </Button>
          </div>
          <div className="xl:flex hidden md:hidden sm:hidden w-[228px] xl:justify-between max-w-[228px] h-10 cursor-pointer">
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
          <div className="md:hidden ">
            <div className="w-[75px] flex justify-between absolute -translate-y-3 right-5">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="cursor-pointer hover:ease-in-out hover:translate-y-1 hover:transition-all hover:duration-150 hover:opacity-70" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5461 13C17.2961 13 17.9561 12.59 18.2961 11.97L21.8761 5.48C22.2461 4.82 21.7661 4 21.0061 4H6.20609L5.26609 2H1.99609V4H3.99609L7.59609 11.59L6.24609 14.03C5.51609 15.37 6.47609 17 7.99609 17H19.9961V15H7.99609L9.09609 13H16.5461ZM7.15609 6H19.3061L16.5461 11H9.52609L7.15609 6ZM7.99609 18C6.89609 18 6.00609 18.9 6.00609 20C6.00609 21.1 6.89609 22 7.99609 22C9.09609 22 9.99609 21.1 9.99609 20C9.99609 18.9 9.09609 18 7.99609 18ZM17.9961 18C16.8961 18 16.0061 18.9 16.0061 20C16.0061 21.1 16.8961 22 17.9961 22C19.0961 22 19.9961 21.1 19.9961 20C19.9961 18.9 19.0961 18 17.9961 18Z"
                  fill="#1C1C1C"
                />
              </svg>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="cursor-pointer hover:ease-in-out hover:translate-y-1 hover:transition-all hover:duration-150 hover:opacity-70" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="md:hidden max-w-full h-10 mx-4 relative">
          <input type="text" placeholder="Search" className="w-full h-full rounded-tl-md rounded-bl-md pl-[35px] border bordergray-300" />
          <div className="absolute top-0 left-2 translate-y-2">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.4417 13.067H13.7176L13.4609 12.8195C14.3592 11.7745 14.9001 10.4178 14.9001 8.94198C14.9001 5.65114 12.2326 2.98364 8.94173 2.98364C5.6509 2.98364 2.9834 5.65114 2.9834 8.94198C2.9834 12.2328 5.6509 14.9003 8.94173 14.9003C10.4176 14.9003 11.7742 14.3595 12.8192 13.4611L13.0667 13.7178V14.442L17.6501 19.0161L19.0159 17.6503L14.4417 13.067ZM8.94173 13.067C6.65923 13.067 4.81673 11.2245 4.81673 8.94198C4.81673 6.65948 6.65923 4.81698 8.94173 4.81698C11.2242 4.81698 13.0667 6.65948 13.0667 8.94198C13.0667 11.2245 11.2242 13.067 8.94173 13.067Z"
                fill="#8B96A5"
              />
            </svg>
          </div>
        </div>
        <div className={show ? "inline" : "hidden md:hidden"}>
          <ul className="px-3 bg-white leading-10 cursor-pointer absolute ml-4 rounded-xl shadow-xl translate-y-1 top-14">
            <li className="pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]">Automobiles</li>
            <li className="pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]">Clothes and wear</li>
            <li className="pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]">Home interiors</li>
            <li className="pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]">Computer and tech</li>
            <li className="pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]">Tools, equipments</li>
            <li className="pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]">Sports and outdoor</li>
            <li className="pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]">and pets</li>
            <li className="pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]">MachMachinery tools</li>
            <li className="pl-3 hover:font-medium hover:text-dark hover:bg-[#E5F1FF]">More category</li>
          </ul>
        </div>
      </div>
    </>
  );
}
