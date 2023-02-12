import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCoundown';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter -mt-6 md:mt-0">
      <div
        className="countdown-link"
      >
        <div className='flex'>
          <div className='bg-gray-800 mr-[6px] w-[45px] h-[50px] p-2 rounded'>
            <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          </div>
          <div className="bg-gray-800 mr-[6px] w-[45px] h-[50px] p-2 rounded">
            <DateTimeDisplay value={hours} type={'Hour'} isDanger={false}  />
          </div>
          <div className="bg-gray-800 mr-[6px] w-[45px] h-[50px] p-2 rounded">
            <DateTimeDisplay value={minutes} type={'Min'} isDanger={false}  />
          </div>
          <div className="bg-gray-800 mr-[6px] w-[45px] h-[50px] p-2 rounded">
            <DateTimeDisplay value={seconds} type={'Sec'} isDanger={false}  />
          </div>
        </div>
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;