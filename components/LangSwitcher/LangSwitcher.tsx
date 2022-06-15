// import React, { useEffect, useRef, useState } from "react";
// import LangSwitchIcon from "../../assets/svgs/LangSwitchIcon";
// import LangPopup from "../LangPopup/LangPopup";

// const LangSwitcher = () => {
//   // close pop up after clicking on body
//   const [isOpenPopup, setIsOpenPopup] = useState(false);
//   const langSwitcherRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const onClickBody = (e: MouseEvent) => {
//       if (!langSwitcherRef.current?.contains(e.target as HTMLBodyElement)) {
//         setIsOpenPopup(false);
//       }
//       return;
//     };
//     document.body.addEventListener("click", onClickBody, true);
//     return () => document.body.removeEventListener("click", onClickBody);
//   });

//   return (
//     <div className="relative" ref={langSwitcherRef}>
//       <LangSwitchIcon
//         height={24}
//         width={40}
//         className="cursor-pointer"
//         onClick={() => setIsOpenPopup(!isOpenPopup)}
//       />
//       <LangPopup isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} />
//     </div>
//   );
// };

// export default LangSwitcher;

import React, { useCallback, useEffect, useRef, useState } from "react";
import LangSwitchIcon from "../../assets/svgs/LangSwitchIcon";
import LangPopup from "../LangPopup/LangPopup";

const LangSwitcher = () => {
  const [popupDisplayConfig, setPopupDisplayConfig] = useState({
    visibility: false,
    animate: "",
  });

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
        console.log(popupDisplayConfig);
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
          !popupDisplayConfig.visibility
            ? setPopupDisplayConfig({
                visibility: true,
                animate: "fadeIn",
              })
            : closePopup();
        }}
      />
      <LangPopup
        popupDisplayConfig={popupDisplayConfig}
        setPopupDisplayConfig={setPopupDisplayConfig}
      />
    </div>
  );
};

export default LangSwitcher;
