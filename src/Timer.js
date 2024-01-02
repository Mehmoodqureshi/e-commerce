import React, { useState, useEffect } from 'react';

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2023-11-15T23:59:59'); 

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Timer has reached the target date
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-row md:flex-row text-center">
      <div className="flex flex-col items-center mx-4 my-2 md:my-0">
        <div className="text-xl font-semibold text-blue-400">Days</div>
        <div className="text-4xl">{timeLeft.days} : </div>
      </div>

      <div className="flex flex-col items-center mx-4 my-2 md:my-0">
        <div className="text-xl font-semibold text-blue-400">Hours</div>
        <div className="text-4xl">{timeLeft.hours} : </div>
      </div>

      <div className="flex flex-col items-center mx-4 my-2 md:my-0">
        <div className="text-xl font-semibold text-blue-400">Minutes</div>
        <div className="text-4xl">{timeLeft.minutes} :  </div>
      </div>

      <div className="flex flex-col items-center mx-4 my-2 md:my-0">
        <div className="text-xl font-semibold text-blue-400">Seconds</div>
        <div className="text-4xl">{timeLeft.seconds}</div>
      </div>
    </div>
  );
}

export default Timer;
