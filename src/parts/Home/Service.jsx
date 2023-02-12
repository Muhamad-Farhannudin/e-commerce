import React from "react";
import imgService1 from "../../assets/images/Service/1.png";
import imgService2 from "../../assets/images/Service/2.png";
import imgService3 from "../../assets/images/Service/3.png";
import imgService4 from "../../assets/images/Service/4.png";

export default function Service() {
  return (
    <>
      <div className="max-w-full mx-4 md:mx-[130px] my-[30px]">
        <h1 className="font-semibold text-dark text-2xl">Our extra services</h1>
        <div className="grid grid-cols-2 gap-2 md:flex justify-between mt-6">
          <div className="w-[220px] h-[180px] md:w-[280px] md:h-[200px] rounded-md border border-gray-200 bg-white relative">
            <div className="rounded-t-md w-full h-[120px] bg-dark">
              <img src={imgService1} alt="service-1" className="w-full h-full"/>
              <div className="flex items-center justify-center w-[48px] h-[48px] md:w-[55px] md:h-[55px] absolute right-5 -translate-y-7 bg-[#D1E7FF] border-2 border-white rounded-full cursor-pointer hover:scale-110 transition duration-700 ease-out hover:shadow-lg">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.755 11.255H11.965L11.685 10.985C12.665 9.845 13.255 8.365 13.255 6.755C13.255 3.165 10.345 0.255005 6.755 0.255005C3.165 0.255005 0.255005 3.165 0.255005 6.755C0.255005 10.345 3.165 13.255 6.755 13.255C8.365 13.255 9.845 12.665 10.985 11.685L11.255 11.965V12.755L16.255 17.745L17.745 16.255L12.755 11.255ZM6.755 11.255C4.26501 11.255 2.255 9.245 2.255 6.755C2.255 4.26501 4.26501 2.255 6.755 2.255C9.245 2.255 11.255 4.26501 11.255 6.755C11.255 9.245 9.245 11.255 6.755 11.255Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </div>
            </div>
            <p className="pl-5 py-4 text-dark font-semibold text-base">
              Source from <span className="block">Industry Hubs</span>
            </p>
          </div>
          <div className="w-[220px] h-[180px] md:w-[280px] md:h-[200px] rounded-md border border-gray-200 bg-white relative">
            <div className="rounded-t-md w-full h-[120px] bg-dark">
              <img src={imgService2} alt="service-2" className="w-full h-full" />
              <div className="flex items-center justify-center w-[48px] h-[48px] md:w-[55px] md:h-[55px] absolute right-5 -translate-y-7 bg-[#D1E7FF] border-2 border-white rounded-full cursor-pointer hover:scale-110 transition duration-700 ease-out hover:shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4C3 2 2 2.9 2 4V7.01C2 7.73 2.43 8.35 3 8.7V20C3 21.1 4.1 22 5 22H19C19.9 22 21 21.1 21 20V8.7C21.57 8.35 22 7.73 22 7.01V4C22 2.9 21 2 20 2ZM19 20H5V9H19V20ZM20 7H4V4H20V7Z" fill="#1C1C1C" />
                  <path d="M15 12H9V14H15V12Z" fill="#1C1C1C" />
                </svg>
              </div>
            </div>
            <p className="pl-5 py-4 text-dark font-semibold text-base">
              Customize your<span className="block">Products</span>
            </p>
          </div>
          <div className="w-[220px] h-[180px] md:w-[280px] md:h-[200px] rounded-md border border-gray-200 bg-white relative">
            <div className="rounded-t-md w-full h-[120px] bg-dark">
              <img src={imgService3} alt="service-3" className="w-full h-full" />
              <div className="flex items-center justify-center w-[48px] h-[48px] md:w-[55px] md:h-[55px] absolute right-5 -translate-y-7 bg-[#D1E7FF] border-2 border-white rounded-full cursor-pointer hover:scale-110 transition duration-700 ease-out hover:shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.51 6.03L11.02 9.25L3.5 8.25L3.51 6.03ZM11.01 14.75L3.5 17.97V15.75L11.01 14.75ZM1.51 3L1.5 10L16.5 12L1.5 14L1.51 21L22.5 12L1.51 3Z" fill="#1C1C1C" />
                </svg>
              </div>
            </div>
            <p className="pl-5 py-4 text-dark font-semibold text-base">
              Fast, reliable shipping<span className="block">by ocean or air</span>
            </p>
          </div>
          <div className="w-[220px] h-[180px] md:w-[280px] md:h-[200px] rounded-md border border-gray-200 bg-white relative">
            <div className="rounded-t-md w-full h-[120px] bg-dark">
              <img src={imgService4} alt="service-4" className="w-full h-full" />
              <div className="flex items-center justify-center w-[48px] h-[48px] md:w-[55px] md:h-[55px] absolute right-5 -translate-y-7 bg-[#D1E7FF] border-2 border-white rounded-full cursor-pointer hover:scale-110 transition duration-700 ease-out hover:shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" fill="#1C1C1C" />
                </svg>
              </div>
            </div>
            <p className="pl-5 py-4 text-dark font-semibold text-base">
              Product monitoring<span className="block">and inspection</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
