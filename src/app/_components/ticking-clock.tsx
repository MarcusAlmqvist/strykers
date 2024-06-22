"use client";

import { useEffect, useState } from "react";

const localeStringOptions: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const TickingClock = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleString("sv-SE", localeStringOptions),
  );
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(new Date().toLocaleString("sv-SE", localeStringOptions));
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <span>
      <span className="text-foreground">{currentTime}</span>
    </span>
  );
};

export default TickingClock;
