import React, { useEffect, useRef, useState } from "react";
import LangSwitchIcon from "../../assets/svgs/LangSwitchIcon";
import LangPopup from "../LangPopup/LangPopup";

const LangSwitcher = () => {
  // close pop up after clicking on body
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const langSwitcherRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onClickBody = (e: MouseEvent) => {
      if (!langSwitcherRef.current?.contains(e.target as HTMLBodyElement)) {
        setIsOpenPopup(false);
      }
      return;
    };
    document.body.addEventListener("click", onClickBody, true);
    return () => document.body.removeEventListener("click", onClickBody);
  });

  return (
    <div className="relative" ref={langSwitcherRef}>
      <LangSwitchIcon
        height={24}
        width={40}
        className="cursor-pointer"
        onClick={() => setIsOpenPopup(!isOpenPopup)}
      />
      {isOpenPopup ? <LangPopup setIsOpenPopup={setIsOpenPopup} /> : null}
    </div>
  );
};

export default LangSwitcher;
