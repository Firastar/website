import React from "react";

export default function useOnClickOutside(handler, ...refs) {
  React.useEffect(() => {
    const listener = event => {
      let flag = refs.some(
        ref => !ref.current || ref.current.contains(event.target)
      );

      !flag && handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
}
