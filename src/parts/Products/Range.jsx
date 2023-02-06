import '../../style.css'
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

export default function App() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  return (
    <div className="App">
      <div
        className="multi-range-slider-container">
        <MultiRangeSlider
          min={1000}
          max={1000000}
          onInput={(e) => {
            setMinValue(e.minValue);
            setMaxValue(e.maxValue);
          }}
          label={false}
          ruler={false}
          style={{ border: "none"}}
          barLeftColor="#AFD0FF"
          barInnerColor="#0D6EFD"
          barRightColor="#AFD0FF"
          thumbLeftColor="white"
          thumbRightColor="white"
          className=''
        />
        <div className="divOutput flex justify-between items-center mt-5">
          <div>
            <p className='font-normal text-dark text-base'>Min</p>
            <input type="text" value={minValue} className="w-[110px] h-[40px] border border-gray-300" />
          </div>
          <div>
            <p className='font-normal text-dark text-base'>Max</p>
            <input type="text" value={maxValue} className="w-[110px] h-[40px] border border-gray-300" />
          </div>
        </div>
        <div className='mb-5 w-[70px] h-[30px] mx-auto mt-4 cursor-pointer bg-white border border-gray-300 flex justify-center items-center'>
          <p className='font-medium text-base text-blue'>Apply</p>
        </div>
      </div>
    </div>
  );
}
