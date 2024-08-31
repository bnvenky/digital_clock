import React, { useEffect, useState } from 'react';
import './App.css';

const Clock = () => {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
    date: '',
  });

  useEffect(() => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const updateClock = () => {
      const today = new Date();
      const h = today.getHours();
      const m = today.getMinutes();
      const s = today.getSeconds();
      const formattedDate = `${dayNames[today.getDay()]} ${today.getDate()} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;

      setTime({
        hours: h < 10 ? `0${h}` : h.toString(),
        minutes: m < 10 ? `0${m}` : m.toString(),
        seconds: s < 10 ? `0${s}` : s.toString(),
        date: formattedDate,
      });
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container">
      <div className="clock">
        <div id="Date">{time.date}</div>
        <ul>
          <li id="hours" className="time">{time.hours}</li>
          <li id="point">:</li>
          <li id="min" className="time">{time.minutes}</li>
          <li id="point">:</li>
          <li id="sec" className="time">{time.seconds}</li>
        </ul>
      </div>
    </div>
  );
};

export default Clock;
