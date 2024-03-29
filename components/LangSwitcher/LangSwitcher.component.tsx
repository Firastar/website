import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { LangSwitchIcon } from "@svgs";
import { LangPopup } from "@components";

const LangSwitcher = ({
  root = "desktop",
}: {
  root?: "desktop" | "mobile";
}) => {
  const [popupDisplayConfig, setPopupDisplayConfig] = useState({
    visibility: false,
    animate: "",
  });

  const openPopup = () => {
    setPopupDisplayConfig({
      visibility: true,
      animate: "fadeIn",
    });
  };

  const closePopup = useCallback(() => {
    setPopupDisplayConfig({
      visibility: true,
      animate: "fadeOut",
    });
  }, []);

  const langSwitcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickBody = (e: MouseEvent) => {
      if (
        !langSwitcherRef.current?.contains(e.target as HTMLElement) &&
        popupDisplayConfig.visibility &&
        popupDisplayConfig.animate === ""
      ) {
        closePopup();
      }
    };
    document.addEventListener("click", onClickBody, true);
    return () => document.removeEventListener("click", onClickBody, true);
  }, [closePopup, popupDisplayConfig]);

  return (
    <div className="relative" ref={langSwitcherRef}>
      <LangSwitchIcon
        height={24}
        width={40}
        className="cursor-pointer"
        onClick={() => {
          !popupDisplayConfig.visibility ? openPopup() : closePopup();
        }}
      />
      <LangPopup
        popupDisplayConfig={popupDisplayConfig}
        setPopupDisplayConfig={setPopupDisplayConfig}
        closePopup={closePopup}
        root={root}
      />
    </div>
  );
};

export default memo(LangSwitcher);
