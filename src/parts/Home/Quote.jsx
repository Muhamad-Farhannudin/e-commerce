import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import BgQuote from "../../assets/images/Quote/bgQuote.png";
import Button from "../../components/Button";

export default function Quote() {
  const options = ["Pcs", "Unit", "Gram", "Kilogram", "Meter", "Pack", "Set", "Liter", "Ton", "Yard"];
  const defaultOption = options[0];
  return (
    <div className="mx-4 md:mx-[130px] h-[250px] mt-5 md:mt-0 max-w-full md:h-[420px] relative bg-quote">
      <div className="flex justify-between">
        <div className="text-white pl-10 pt-10">
          <h3 className="font-semibold text-[32px] leading-9">
            An easy way to send <span className="block">requests to all suppliers</span>
          </h3>
          <p className="hidden md:block font-normal text-base mt-[13px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing <span className="block">elit, sed do eiusmod tempor incididunt.</span>
          </p>
          <Button isPrimary className="px-3 py-2 mt-5">Send inquiry</Button>
        </div>
        <div className="hidden lg:block w-[490px] h-[355px] quote mt-[30px] mr-[30px] pt-[22px] pl-5">
          <p className="font-semibold text-dark text-xl">Send quote to suppliers</p>
          <div className="pr-8">
            <input type="text" placeholder="What item you need?" className="mt-5 py-[10px] pl-[10px] w-full border border-gray-300 rounded-md" />
            <input type="text" placeholder="Type more details" className="mt-5 pl-[10px] w-full pt-2 pb-[43px] border border-gray-300 rounded-md" />
          </div>
          <div className="flex items-center mt-5">
            <input
              type="number"
              placeholder="Quantity"
              className="
                py-[10px] pl-[10px] w-[206px] border border-gray-300 rounded-md"
            />
            <Dropdown options={options} value={defaultOption} placeholder="Select an option" className="ml-2 cursor-pointer" />
          </div>
          <Button isPrimary className="px-3 py-2 mt-5">Send inquiry</Button>
        </div>
      </div>
        <div className="w-full absolute top-0 -z-30">
          <img src={BgQuote} alt="bgQuote" className="w-full h-[250px] md:mt-0 md:h-[420px]" />
        </div>
    </div>
  );
}
