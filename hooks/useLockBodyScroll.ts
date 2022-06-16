import { useEffect, useLayoutEffect } from "react";
import { getScrollBarWidth } from "@helpers";

export default function useLockBodyScroll(open: boolean) {
  // to handle hydrate error due to using useLayoutEffect hook in useLockBodyScroll
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    // get original body's overflow and paddingRight state
    const originalStyle = {
      overflow: window.getComputedStyle(document.body).overflow,
      paddingRight: window.getComputedStyle(document.body).paddingRight,
    };

    // const hasVScroll = window.innerWidth > document.body.clientWidth;
    const hasVScroll = document.body.scrollHeight > document.body.clientWidth;

    const scrollBarWidth = getScrollBarWidth();

    // prevent scrolling on mount
    if (open) {
      document.body.style.overflow = "hidden";
      if (hasVScroll) document.body.style.paddingRight = scrollBarWidth + "px";
    }

    // re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle.overflow;
      document.body.style.paddingRight = originalStyle.paddingRight;
    };
  }, [open]); // empty array ensures effect is only run on mount and unmount
}
