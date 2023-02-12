import axios from "axios";
import React, { useEffect, useState } from "react";
import Rating from "../../assets/images/Ratings/rating4.png";
import Dropdown from 'react-dropdown'

export default function Content({ fetchURL }) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((Response) => {
      setContent(Response.data.products);
    });
  }, [fetchURL]);

  const options = ['10','20','30','40','50'];
  const defaultOption = options[0];

  return (
    <div className="mb-[43px] mx-4 md:mx-0">
      {content.map((item) => (
        <div className="md:max-w-full mt-5 bg-white border border-gray-300 rounded-md flex items-center mb-[21px]">
          <img className="w-[160px] h-[160px] md:w-[184px] md:h-[184px] pl-2 py-3 cursor-pointer" src={item?.images[0]} alt={item?.title} />
          <div className="ml-3 py-6">
            <h3 className="font-semibold text-base text-dark cursor-pointer">{item?.title}</h3>
            <h2 className="font-bold text-xl text-dark mt-4">
              ${item?.price} <s className="text-base text-gray-500">${item?.discountPercentage}</s>
            </h2>
            <div className="grid grid-rows-2 md:flex">
              <div className="flex items-center">
                <img src={Rating} alt="Rating-4" className="w-[80px] h-[15px]" />
                <p className="font-normal text-base text-[#FF9017] ml-[6px]">7.5</p>
              </div>
              <div className="flex items-center ml-3">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" fill="#DEE2E7" />
                </svg>
                <p className="font-normal text-base text-gray-500 ml-[9px]">154 orders</p>
              </div>
              <div className="flex items-center ml-[9px]">
                <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="3" cy="3" r="3" fill="#DEE2E7" />
                </svg>
                <p className="font-normal text-base text-[#00B517] ml-[9px]">Free Shipping</p>
              </div>
            </div>
            <p className="w-[250px] md:w-[600px] font-normal text-base text-gray-600 mt-3">{item?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nihil? Voluptates repellendus ad ea assumenda.</p>
            <div className="w-[96px]">
              <p className="font-semibold text-base text-[#0D6EFD] mt-2 cursor-pointer hover:text-opacity-70 hover:text-transition hover:duration-300">View details</p>
            </div>
          </div>
        </div>
      ))}
      <div className="mx-4 flex justify-end">
        <div className="w-[125px] h-10 mr-2">
          <Dropdown options={options} value={defaultOption} placeholder="Select an option" className='ml-2 cursor-pointer'/>
        </div>
          <svg className="cursor-pointer" width="217" height="40" viewBox="0 0 217 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.5 6C0.5 2.96243 2.96243 0.5 6 0.5H43.5V39.5H6C2.96243 39.5 0.5 37.0376 0.5 34V6Z" fill="white" stroke="#DEE2E7"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6446 13.3664C24.1708 12.8779 23.4055 12.8779 22.9317 13.3664L17.3554 19.1168C16.8815 19.6054 16.8815 20.3946 17.3554 20.8832L22.9317 26.6336C23.4055 27.1221 24.1708 27.1221 24.6446 26.6336C25.1185 26.145 25.1185 25.3557 24.6446 24.8671L19.9309 19.9937L24.6446 15.1329C25.1185 14.6443 25.1063 13.8425 24.6446 13.3664Z" fill="#8B96A5"/>
  <path d="M173.5 0.5H211C214.038 0.5 216.5 2.96243 216.5 6V34C216.5 37.0376 214.038 39.5 211 39.5H173.5V0.5Z" fill="white" stroke="#DEE2E7"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M191.355 13.3683C190.882 13.8573 190.882 14.6472 191.355 15.1361L196.069 20.0008L191.355 24.8654C190.882 25.3544 190.882 26.1443 191.355 26.6333C191.829 27.1222 192.595 27.1222 193.068 26.6333L198.645 20.8784C199.118 20.3895 199.118 19.5996 198.645 19.1106L193.068 13.3558C192.607 12.8793 191.829 12.8793 191.355 13.3683Z" fill="#1C1C1C"/>
  <path d="M87.5 0.5H130.5V39.5H87.5V0.5Z" fill="white" stroke="#DEE2E7"/>
  <path d="M105.213 26V24.7273L109.151 20.6477C109.571 20.2045 109.918 19.8163 110.19 19.483C110.467 19.1458 110.673 18.8258 110.81 18.5227C110.946 18.2197 111.014 17.8977 111.014 17.5568C111.014 17.1705 110.923 16.8371 110.741 16.5568C110.56 16.2727 110.312 16.0549 109.997 15.9034C109.683 15.7481 109.329 15.6705 108.935 15.6705C108.518 15.6705 108.154 15.7557 107.844 15.9261C107.533 16.0966 107.295 16.3371 107.128 16.6477C106.961 16.9583 106.878 17.322 106.878 17.7386H105.202C105.202 17.0303 105.365 16.411 105.69 15.8807C106.016 15.3504 106.463 14.9394 107.031 14.6477C107.599 14.3523 108.245 14.2045 108.969 14.2045C109.7 14.2045 110.344 14.3504 110.901 14.642C111.461 14.9299 111.899 15.3239 112.213 15.8239C112.527 16.3201 112.685 16.8807 112.685 17.5057C112.685 17.9375 112.603 18.3598 112.44 18.7727C112.281 19.1856 112.003 19.6458 111.605 20.1534C111.207 20.6572 110.654 21.2689 109.946 21.9886L107.634 24.4091V24.4943H112.872V26H105.213Z" fill="#1C1C1C"/>
  <path d="M44.5 0.5H87.5V39.5H44.5V0.5Z" fill="#EFF2F4" stroke="#DEE2E7"/>
  <path d="M67.7528 14.3636V26H65.9915V16.125H65.9233L63.1392 17.9432V16.2614L66.0426 14.3636H67.7528Z" fill="#8B96A5"/>
  <path d="M130.5 0.5H173.5V39.5H130.5V0.5Z" fill="white" stroke="#DEE2E7"/>
  <path d="M152.014 26.1591C151.234 26.1591 150.537 26.0246 149.923 25.7557C149.313 25.4867 148.83 25.1136 148.474 24.6364C148.122 24.1553 147.933 23.5985 147.906 22.9659H149.69C149.713 23.3106 149.829 23.6098 150.037 23.8636C150.249 24.1136 150.526 24.3068 150.866 24.4432C151.207 24.5795 151.586 24.6477 152.003 24.6477C152.461 24.6477 152.866 24.5682 153.219 24.4091C153.575 24.25 153.853 24.0284 154.054 23.7443C154.255 23.4564 154.355 23.125 154.355 22.75C154.355 22.3598 154.255 22.017 154.054 21.7216C153.857 21.4223 153.567 21.1875 153.185 21.017C152.806 20.8466 152.348 20.7614 151.81 20.7614H150.827V19.3295H151.81C152.241 19.3295 152.62 19.2519 152.946 19.0966C153.276 18.9413 153.533 18.7254 153.719 18.4489C153.904 18.1686 153.997 17.8409 153.997 17.4659C153.997 17.1061 153.916 16.7936 153.753 16.5284C153.594 16.2595 153.366 16.0492 153.071 15.8977C152.779 15.7462 152.435 15.6705 152.037 15.6705C151.658 15.6705 151.304 15.7405 150.974 15.8807C150.649 16.017 150.384 16.214 150.179 16.4716C149.974 16.7254 149.865 17.0303 149.849 17.3864H148.151C148.17 16.7576 148.355 16.2045 148.707 15.7273C149.063 15.25 149.533 14.8769 150.116 14.608C150.7 14.339 151.348 14.2045 152.06 14.2045C152.806 14.2045 153.45 14.3504 153.991 14.642C154.537 14.9299 154.957 15.3144 155.253 15.7955C155.552 16.2765 155.7 16.803 155.696 17.375C155.7 18.0265 155.518 18.5795 155.151 19.0341C154.787 19.4886 154.302 19.7936 153.696 19.9489V20.0398C154.469 20.1572 155.067 20.464 155.491 20.9602C155.92 21.4564 156.132 22.072 156.128 22.8068C156.132 23.447 155.954 24.0208 155.594 24.5284C155.238 25.036 154.751 25.4356 154.134 25.7273C153.516 26.0152 152.81 26.1591 152.014 26.1591Z" fill="#1C1C1C"/>
          </svg>
      </div>
    </div>
  );
}
