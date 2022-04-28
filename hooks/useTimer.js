import { useEffect, useState } from "react";

/* ======== introduction ==============
a custom hook that accepts an expire time (in seconds) and returns
{days, hours, minutes, seconds, finish, reset} left until that time expires

========== arguments ==============
1) expire: @Number: expiration timestamp but in seconds
2) onExpireEnd: @function: callback function is called when expire reached 0 

========== very important notice =============
using this hook will make the target Component rerender on 
every second!!! so if you're using some states or functions inside that Component,
they wil be redeclared every second too!
* fix: you can wrap them inside "useMemo" or "useCallback" hooks
       to prevent this problem. 
====================================== */

const useTimer = ({ expire, onExpireEnd }) => {
  const [counter, setCounter] = useState(
    expire - Math.floor(new Date().getTime() / 1000)
  );

  const reset = new_expire => {
    setCounter(new_expire - Math.floor(new Date().getTime() / 1000));
  };

  useEffect(() => {
    if (counter <= 0) onExpireEnd && onExpireEnd();
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter, onExpireEnd]);

  return formatTime(counter, reset);
};

export default useTimer;

// helper function to format time to string
const formatTime = (counter, reset) => {
  if (counter <= 0) return { finished: true, reset };

  let days = Math.floor(counter / (60 * 60 * 24));
  let hours = Math.floor((counter / (60 * 60)) % 24);
  let minutes = Math.floor((counter / 60) % 60);
  let seconds = counter % 60;

  return {
    days: days < 10 ? "0" + days : days,
    hours: hours < 10 ? "0" + hours : hours,
    minutes: minutes < 10 ? "0" + minutes : minutes,
    seconds: seconds < 10 ? "0" + seconds : seconds,
    finished: false,
    reset
  };
};
