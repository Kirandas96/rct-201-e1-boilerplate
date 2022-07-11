import React from "react";
import useClock from "../hooks/useClock";


type Props = {
  //  TODO
};

const Clock = (props: Props) => {
  const {ctime,second,minute,hours}=useClock()
  // console.log(ctime);
  
  return (
    <div data-testid="clock" className="clock">
      <h4 data-testid="clock-label">
        {/* Label */}
        24 Hour Live Custom Component Clock
      </h4>
      <span data-testid="clock-hours">
        {/* Hours */}
        </span>
        {hours}:
      <span data-testid="clock-minutes">
        {/* Minutes */}
      </span>
      {minute}:
      <span data-testid="clock-seconds">
        {/* Seconds */}
        {second}
        </span>
    </div>
  );
};

export default Clock;
