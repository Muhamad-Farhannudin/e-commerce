import React from 'react'
import Rev1 from '../../assets/images/Review/rev1.png'
import Rev2 from '../../assets/images/Review/rev2.png'
import Rev3 from '../../assets/images/Review/rev3.png'
import Rev4 from '../../assets/images/Review/rev4.png'
export default function Review() {
  return (
    <div className='p-4'>
      <div className='w-[800px]'>
        <img src={Rev1} alt="rev-1" />
        <img src={Rev2} alt="rev-2" />
        <img src={Rev3} alt="rev-3" />
        <img src={Rev4} alt="rev-4" />
      </div>
    </div>
  )
}
