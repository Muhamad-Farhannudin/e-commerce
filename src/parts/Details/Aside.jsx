import React from "react";
import img1 from "../../assets/images/aside/img1.png";
import img2 from "../../assets/images/aside/img2.png";
import img3 from "../../assets/images/aside/img3.png";
import img4 from "../../assets/images/aside/img4.png";
import img5 from "../../assets/images/aside/img5.png";

export default function Aside() {
  return (
    <div className="w-[280px] h-[560px] bg-white border border-gray-300 rounded-md mt-5 mx-4 md:mx-0">
      <div className="mt-5 ml-4">
        <p className="font-bold text-base text-dark">You many like</p>
      </div>
      <div className="w-[242px] flex items-center mt-5 ml-4 cursor-pointer hover:bg-slate-100 hover:duration-300">
          <img className="w-20 h-20 p-1 border border-gray-300 rounded-md" src={img1} alt="img1" />
        <div className="ml-3">
          <h3 className="font-normal text-base text-dark">Apple Watch Series Space Gray</h3>
          <p className="font-normal text-base text-[#8B96A5]">$7.00 - $99.50</p>
        </div>
      </div>
      <div className="w-[242px] flex items-center mt-5 ml-4  cursor-pointer hover:bg-slate-100 hover:duration-300">
          <img className="w-20 h-20 p-1 border border-gray-300 rounded-md" src={img2} alt="img2" />
        <div className="ml-3">
          <h3 className="font-normal text-base text-dark">Apple Watch Series Space Gray</h3>
          <p className="font-normal text-base text-[#8B96A5]">$7.00 - $99.50</p>
        </div>
      </div>
      <div className="w-[242px] flex items-center mt-5 ml-4  cursor-pointer hover:bg-slate-100 hover:duration-300">
          <img className="w-20 h-20 p-1 border border-gray-300 rounded-md" src={img3} alt="img3" />
        <div className="ml-3">
          <h3 className="font-normal text-base text-dark">Apple Watch Series Space Gray</h3>
          <p className="font-normal text-base text-[#8B96A5]">$7.00 - $99.50</p>
        </div>
      </div>
      <div className="w-[242px] flex items-center mt-5 ml-4  cursor-pointer hover:bg-slate-100 hover:duration-300">
          <img className="w-20 h-20 p-1 border border-gray-300 rounded-md" src={img4} alt="img4" />
        <div className="ml-3">
          <h3 className="font-normal text-base text-dark">Apple Watch Series Space Gray</h3>
          <p className="font-normal text-base text-[#8B96A5]">$7.00 - $99.50</p>
        </div>
      </div>
      <div className="w-[242px] flex items-center mt-5 ml-4  cursor-pointer hover:bg-slate-100 hover:duration-300">
          <img className="w-20 h-20 p-1 border border-gray-300 rounded-md" src={img5} alt="img5" />
        <div className="ml-3">
          <h3 className="font-normal text-base text-dark">Apple Watch Series Space Gray</h3>
          <p className="font-normal text-base text-[#8B96A5]">$7.00 - $99.50</p>
        </div>
      </div>
    </div>
  );
}
