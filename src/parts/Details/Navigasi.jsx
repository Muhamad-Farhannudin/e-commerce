import React, { useState } from "react";
import AboutCompany from "./AboutCompany";
import Description from "./Description";
import Review from "./Review";
import Shipping from "./Shipping";

export default function Navigasi() {

    const [tab, setTab] = useState('description');

  return (
    <>
      <div className="w-full h-12 border-b border-gray-300">
        <div className="w-[478px] h-full flex justify-between font-semibold text-base px-6 py-2">
          <button onClick={() => setTab('description') } >
            <h3 className={tab === 'description' ? 'text-blue': 'text-gray-500'}>Descriptions</h3>
          </button>
          <button onClick={() => setTab('review') }>
            <h3 className={tab === 'review' ? 'text-blue': 'text-gray-500'}>Reviews</h3>
          </button>
          <button onClick={() => setTab('shipping') } >
            <h3 className={tab === 'shipping' ? 'text-blue': 'text-gray-500'}>Shipping</h3>
          </button>
          <button onClick={() => setTab('aboutcompany') } >
            <h3 className={tab === 'aboutcompany' ? 'text-blue': 'text-gray-500'}>About company</h3>
          </button>
        </div>

        {tab === 'description' ? <Description /> : ''}
        {tab === 'review' ? <Review /> : ''}
        {tab === 'shipping' ? <Shipping /> : ''}
        {tab === 'aboutcompany' ? <AboutCompany /> : ''}
      
      </div>
    </>
  );
}
