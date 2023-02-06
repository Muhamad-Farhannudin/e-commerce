import React from "react";
import Rating from "../../assets/images/Ratings/rating4.png";

export default function Main() {
  return (
    <div className="max-w-full mx-[130px] bg-white border border-gray-300 rounded-md">
      <div className="flex mt-5 ml-5 mb-11">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <div className="flex items-center">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.79508 10.875L1.62508 6.70504L0.205078 8.11504L5.79508 13.705L17.7951 1.70504L16.3851 0.295044L5.79508 10.875Z" fill="#00B517" />
            </svg>
            <p className="font-normal text-base text-[#00B517]">In stock</p>
          </div>
          <h1>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h1>
          <div className="flex">
            <div className="flex items-center">
              <img src={Rating} alt="Rating-4" className="w-[80px] h-[15px]" />
              <p className="font-normal text-base text-[#FF9017] ml-[6px]">9.3</p>
            </div>
            <div className="flex items-center ml-3">
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="3" r="3" fill="#DEE2E7" />
              </svg>
              <svg className="ml-3" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.33317 2.33329H15.6665V12.3333H3.30817L2.33317 13.3083V2.33329ZM2.33317 0.666626C1.4165 0.666626 0.674837 1.41663 0.674837 2.33329L0.666504 17.3333L3.99984 14H15.6665C16.5832 14 17.3332 13.25 17.3332 12.3333V2.33329C17.3332 1.41663 16.5832 0.666626 15.6665 0.666626H2.33317ZM3.99984 8.99996H13.9998V10.6666H3.99984V8.99996ZM3.99984 6.49996H13.9998V8.16663H3.99984V6.49996ZM3.99984 3.99996H13.9998V5.66663H3.99984V3.99996Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="font-normal text-base text-gray-500 ml-[9px]">32 Review</p>
            </div>
            <div className="flex items-center ml-[9px]">
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3" cy="3" r="3" fill="#DEE2E7" />
              </svg>
              <svg className="ml-3" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.3335 5.90834H14.3418L10.6918 0.441675C10.5335 0.208342 10.2668 0.0916748 10.0002 0.0916748C9.7335 0.0916748 9.46683 0.208342 9.3085 0.450008L5.6585 5.90834H1.66683C1.2085 5.90834 0.833496 6.28334 0.833496 6.74167C0.833496 6.81667 0.841829 6.89167 0.866829 6.96667L2.9835 14.6917C3.17516 15.3917 3.81683 15.9083 4.5835 15.9083H15.4168C16.1835 15.9083 16.8252 15.3917 17.0252 14.6917L19.1418 6.96667L19.1668 6.74167C19.1668 6.28334 18.7918 5.90834 18.3335 5.90834ZM10.0002 2.40834L12.3335 5.90834H7.66683L10.0002 2.40834ZM15.4168 14.2417L4.59183 14.25L2.7585 7.57501H17.2502L15.4168 14.2417ZM10.0002 9.24167C9.0835 9.24167 8.3335 9.99167 8.3335 10.9083C8.3335 11.825 9.0835 12.575 10.0002 12.575C10.9168 12.575 11.6668 11.825 11.6668 10.9083C11.6668 9.99167 10.9168 9.24167 10.0002 9.24167Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="font-normal text-base text-gray-500 ml-[9px]">154 sold</p>
            </div>
          </div>
          <div className="flex">
            
          </div>
        </div>
      </div>
    </div>
  );
}
