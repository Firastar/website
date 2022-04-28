import { useLayoutEffect } from "react";
import { getScrollBarWidth } from "@/helpers";

export default function useLockBodyScroll(open) {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = {
      overflow: window.getComputedStyle(document.body).overflow,
      paddingRight: window.getComputedStyle(document.body).paddingRight
    };

    const hasVScroll = window.innerWidth > document.body.clientWidth;

    const scrollBarWidth = getScrollBarWidth();

    // Prevent scrolling on mount
    if (open) {
      document.body.style.overflow = "hidden";
      if (hasVScroll) document.body.style.paddingRight = scrollBarWidth + "px";
    }
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle.overflow;
      document.body.style.paddingRight = originalStyle.paddingRight;
    };
  }, [open]); // Empty array ensures effect is only run on mount and unmount
}
