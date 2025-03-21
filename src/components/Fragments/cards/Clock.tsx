import { useCallback, useEffect, useMemo, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  const tick = useCallback(() => {
    setDate(new Date());
  }, []);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const timeString = useMemo(
    () => date.toLocaleTimeString("en-GB", timeOptions),
    [date]
  );

  const dateString = date.toLocaleDateString("en-GB", dateOptions);

  return (
    <div className="h-full text-primary font-tech-mono font-bold text-6xl flex items-center justify-center gap-2">
      <span>{dateString}</span>
      <span>-</span>
      <span>{timeString}</span>
    </div>
  );
};

export default Clock;
