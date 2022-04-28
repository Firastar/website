import { useEffect, useState } from "react";

const useScrollY = () => {
  const [scrollY, setScrollY] = useState();

  useEffect(() => {
    const listener = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", listener);

    listener();

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return scrollY;
};

export default useScrollY;
