import React, { useEffect, useState } from 'react';

const Timer = ({ initialTime, setIsEndTimer }: any) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsEndTimer(true);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime: any) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, setIsEndTimer]);

  return (
    <div className="flex h-[100px] w-[250px] items-center justify-center rounded-xl bg-pink-500 ">
      <h2 className="text-4xl">{timeLeft}</h2>
    </div>
  );
};

export default Timer;
