/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useCallback } from "react";
import throttle from "lodash.throttle";

const useThrottle = (cb: (...args: any) => void, delay = 1000) => {
  const options = { leading: true, trailing: false }; // add custom lodash options
  const cbRef = useRef(cb);

  // use mutable ref to make useCallback/throttle not depend on `cb` dep
  useEffect(() => {
    cbRef.current = cb;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    throttle((...args: any) => cbRef.current(...args), delay, options),
    [delay]
  );
};

export default useThrottle;
