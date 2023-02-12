import React, { useState } from "react";
import Rating from "../../assets/images/Ratings/rating4.png";
import "../../style.css";
import Flag from "../../assets/images/flag.png";
import Button from "../../components/Button";
import image1 from "../../assets/images/Detail/img1.png";
import image2 from "../../assets/images/Detail/img2.png";
import image3 from "../../assets/images/Detail/img3.png";
import image4 from "../../assets/images/Detail/img4.png";
import image5 from "../../assets/images/Detail/img5.png";
import image6 from "../../assets/images/Detail/img6.png";

export default function Main() {
  const imgs = [
    { id: 0, value: image1 },
    { id: 1, value: image2 },
    { id: 2, value: image3 },
    { id: 3, value: image4 },
    { id: 4, value: image5 },
    { id: 5, value: image6 },
  ];

  const [sliderData, setSliderdata] = useState(imgs[0]);
  const handleClick = (index) => {
    console.log(index);
    const slider = imgs[index];
    setSliderdata(slider);
  };

  return (
    <div className="max-w-full mx-4 md:mx-[130px] bg-white border border-gray-300 rounded-md">
      <div className="grid grid-rows-1 md:flex mt-5 mx-5 mb-[44px]">
        <div className="w-[380px] h-[380px] p-4">
          {/* eslint-disable-next-line */}
          <img src={sliderData.value} alt="image-slide" className="w-[345px] h-[345px]" />
          <div className="flex mt-5">
            {imgs.map((data, i) => (
              <div key={data.id} className="w-[56px] h-[56px] cursor-pointer">
                {/* eslint-disable-next-line */}
                <img
                  src={data.value}
                  alt="image"
                  onClick={() => {
                    handleClick(i);
                  }}
                  className={sliderData.id === i ? "w-[48px] h-[48px] border-2 border-gray-600 rounded-md border-solid" : "border border-gray-300 rounded-md w-[48px] h-[48px]"}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mx-5 mt-20 md:mt-0">
          <div className="flex items-center">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.79508 10.875L1.62508 6.70504L0.205078 8.11504L5.79508 13.705L17.7951 1.70504L16.3851 0.295044L5.79508 10.875Z" fill="#00B517" />
            </svg>
            <p className="font-normal text-base text-[#00B517] pl-2">In stock</p>
          </div>
          <h1 className="font-bold text-dark text-xl">
            Mens Long Sleeve T-shirt Cotton Base <span className="block">Layer Slim Muscle</span>
          </h1>
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
          <div className="py-3 mt-[11px] w-[430px] h-[72px] bg-[#FFF0DF]">
            <div className="flex ml-4 justify-between w-[310px]">
              <div>
                <h3 className="font-bold text-lg text-red">$98.00</h3>
                <p className="font-normal text-sm text-[#606060]">50-100 pcs</p>
              </div>
              <div className="border-l border-[#BDC1C8] pl-3">
                <h3 className="font-bold text-lg text-dark">$90.00</h3>
                <p className="font-normal text-sm text-[#606060]">100-700 pcs</p>
              </div>
              <div className="border-l border-[#BDC1C8] pl-3">
                <h3 className="font-bold text-lg text-dark">$78.00</h3>
                <p className="font-normal text-sm text-[#606060]">700+ pcs</p>
              </div>
            </div>
          </div>
          <div className="md:hidden w-full flex items-center mt-5">
            <Button isPrimary className="w-[350px] h-[40px] font-normal text-base">
              Send inquiry
            </Button>
            <Button isSecondary className="w-10 h-10 flex items-center justify-center ml-7">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.5 2.82495C14.76 2.82495 13.09 3.63495 12 4.91495C10.91 3.63495 9.24 2.82495 7.5 2.82495C4.42 2.82495 2 5.24495 2 8.32495C2 12.105 5.4 15.185 10.55 19.865L12 21.175L13.45 19.855C18.6 15.185 22 12.105 22 8.32495C22 5.24495 19.58 2.82495 16.5 2.82495ZM12.1 18.375L12 18.475L11.9 18.375C7.14 14.065 4 11.215 4 8.32495C4 6.32495 5.5 4.82495 7.5 4.82495C9.04 4.82495 10.54 5.81495 11.07 7.18495H12.94C13.46 5.81495 14.96 4.82495 16.5 4.82495C18.5 4.82495 20 6.32495 20 8.32495C20 11.215 16.86 14.065 12.1 18.375Z"
                  fill="#0D6EFD"
                />
              </svg>
            </Button>
          </div>
          <div className="w-[430px] h-[296px] mt-5">
            <table className="w-full">
              <tr className="font-normal text-base">
                <td className="text-gray-500 w-40">Price:</td>
                <td className="text-gray-600">Negotiable</td>
              </tr>
            </table>
            <hr className="w-[430px] border border-[#E0E0E0] mt-4" />
            <table className="w-full mt-4">
              <tr className="font-normal text-base">
                <td className="text-gray-500 w-40">Type:</td>
                <td className="text-gray-600">Classic shoes</td>
              </tr>
              <tr className="font-normal text-base">
                <td className="text-gray-500 w-40">Material: </td>
                <td className="text-gray-600">Plastic material</td>
              </tr>
              <tr className="font-normal text-base">
                <td className="text-gray-500 w-40">Design:</td>
                <td className="text-gray-600">Modern nice</td>
              </tr>
            </table>
            <hr className="w-[430px] border border-[#E0E0E0] mt-4" />
            <table className="w-full mt-4">
              <tr className="font-normal text-base">
                <td className="text-gray-500 w-40 absolute">Customization:</td>
                <td className="text-gray-600">Customized logo and design custom packages</td>
              </tr>
              <tr className="font-normal text-base">
                <td className="text-gray-500 w-40">Protection:</td>
                <td className="text-gray-600">Refund Policy</td>
              </tr>
              <tr className="font-normal text-base">
                <td className="text-gray-500 w-40">Warranty:</td>
                <td className="text-gray-600">2 years full warranty</td>
              </tr>
            </table>
            <hr className="w-[430px] border border-[#E0E0E0] mt-4" />
          </div>
        </div>
        <div className="hidden md:block shadow-all bg-white w-[280px] h-[350px]">
          <div className="my-5 mx-4">
            <div className="flex justify-between">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="4" fill="#C6F3F1" />
                <path
                  d="M16.0085 34V13.6364H23.6449C25.2093 13.6364 26.5218 13.9081 27.5824 14.4517C28.6496 14.9953 29.455 15.7576 29.9986 16.7386C30.5488 17.7131 30.8239 18.8499 30.8239 20.1491C30.8239 21.455 30.5455 22.5885 29.9886 23.5497C29.4384 24.5043 28.6264 25.2434 27.5526 25.767C26.4787 26.2841 25.1596 26.5426 23.5952 26.5426H18.1562V23.4801H23.098C24.0128 23.4801 24.7618 23.3542 25.3452 23.1023C25.9285 22.8437 26.3594 22.4692 26.6378 21.9787C26.9228 21.4815 27.0653 20.8717 27.0653 20.1491C27.0653 19.4266 26.9228 18.8101 26.6378 18.2997C26.3527 17.7827 25.9186 17.3916 25.3352 17.1264C24.7519 16.8546 23.9995 16.7188 23.0781 16.7188H19.6974V34H16.0085ZM26.5284 24.7727L31.5696 34H27.4531L22.5014 24.7727H26.5284Z"
                  fill="#4CA7A7"
                  fill-opacity="0.6"
                />
              </svg>
              <p className="font-normal text-dark text-base">
                Supplier <span className="block">Guanjoi Trading LLC</span>
              </p>
            </div>
            <hr className="border border-[#E0E0E0] mt-4" />
            <div className="flex items-center mt-4">
              <img className="w-[21px] h-[15px]" src={Flag} alt="flag" />
              <p className="font-normal text-base text-gray-500 ml-[18px]">Germany, Berlin</p>
            </div>
            <div className="flex items-center mt-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 0.833374L2.5 4.16671V9.16671C2.5 13.7917 5.7 18.1167 10 19.1667C14.3 18.1167 17.5 13.7917 17.5 9.16671V4.16671L10 0.833374ZM15.8333 9.16671C15.8333 12.9334 13.35 16.4084 10 17.4417C6.65 16.4084 4.16667 12.9334 4.16667 9.16671V5.25004L10 2.65837L15.8333 5.25004V9.16671ZM6.175 9.65837L5 10.8334L8.33333 14.1667L15 7.50004L13.825 6.31671L8.33333 11.8084L6.175 9.65837Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="font-normal text-base text-gray-500 ml-[18px]">Verified Seller'</p>
            </div>
            <div className="flex items-center mt-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.9915 1.66663C5.3915 1.66663 1.6665 5.39996 1.6665 9.99996C1.6665 14.6 5.3915 18.3333 9.9915 18.3333C14.5998 18.3333 18.3332 14.6 18.3332 9.99996C18.3332 5.39996 14.5998 1.66663 9.9915 1.66663ZM15.7665 6.66663H13.3082C13.0415 5.62496 12.6582 4.62496 12.1582 3.69996C13.6915 4.22496 14.9665 5.29163 15.7665 6.66663ZM9.99984 3.36663C10.6915 4.36663 11.2332 5.47496 11.5915 6.66663H8.40817C8.7665 5.47496 9.30817 4.36663 9.99984 3.36663ZM3.54984 11.6666C3.4165 11.1333 3.33317 10.575 3.33317 9.99996C3.33317 9.42496 3.4165 8.86663 3.54984 8.33329H6.3665C6.29984 8.88329 6.24984 9.43329 6.24984 9.99996C6.24984 10.5666 6.29984 11.1166 6.3665 11.6666H3.54984ZM4.23317 13.3333H6.6915C6.95817 14.375 7.3415 15.375 7.8415 16.3C6.30817 15.775 5.03317 14.7166 4.23317 13.3333ZM6.6915 6.66663H4.23317C5.03317 5.28329 6.30817 4.22496 7.8415 3.69996C7.3415 4.62496 6.95817 5.62496 6.6915 6.66663ZM9.99984 16.6333C9.30817 15.6333 8.7665 14.525 8.40817 13.3333H11.5915C11.2332 14.525 10.6915 15.6333 9.99984 16.6333ZM11.9498 11.6666H8.04984C7.97484 11.1166 7.9165 10.5666 7.9165 9.99996C7.9165 9.43329 7.97484 8.87496 8.04984 8.33329H11.9498C12.0248 8.87496 12.0832 9.43329 12.0832 9.99996C12.0832 10.5666 12.0248 11.1166 11.9498 11.6666ZM12.1582 16.3C12.6582 15.375 13.0415 14.375 13.3082 13.3333H15.7665C14.9665 14.7083 13.6915 15.775 12.1582 16.3ZM13.6332 11.6666C13.6998 11.1166 13.7498 10.5666 13.7498 9.99996C13.7498 9.43329 13.6998 8.88329 13.6332 8.33329H16.4498C16.5832 8.86663 16.6665 9.42496 16.6665 9.99996C16.6665 10.575 16.5832 11.1333 16.4498 11.6666H13.6332Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="font-normal text-base text-gray-500 ml-[18px]">Worldwide shipping</p>
            </div>
            <Button isPrimary className="w-[248px] h-[40px] font-normal text-base mt-7">
              Send inquiry
            </Button>
            <Button isSecondary className="w-[248px] h-[40px] font-normal text-base mt-2">
              Seller's profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
