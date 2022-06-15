// import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import classes from "./LangPopup.module.scss";
// import { useRouter } from "next/router";
// import { useTranslation } from "next-i18next";
// import clsx from "clsx";
// import "animate.css";

// interface LangPopupProps {
//   setIsOpenPopup: (arg0: boolean) => void;
//   isOpenPopup: boolean;
// }

// const LangPopup = ({ isOpenPopup, setIsOpenPopup }: LangPopupProps) => {
//   const router = useRouter();
//   const { t } = useTranslation();
//   const popupRef = useRef<HTMLDivElement>(null);

//    not to fade out after changing body dir
//    useEffect(() => {
//      popupRef.current?.setAttribute(
//        "class",
//        "!hidden"
//      );
//    }, []);

//   return (
//     <div
//       className={clsx(
//         classes.popupWrap,
//         isOpenPopup
//           ? "animate__animated animate__fadeIn animate__faster"
//           : "animate__animated animate__fadeOut animate__faster"
//       )}
//       ref={popupRef}
//       // onAnimationEnd={() =>
//       //   popupRef.current?.getAttribute("class")?.includes("animate__fadeOut") &&
//       //   popupRef.current?.setAttribute("class", "!hidden")
//       // }>
//     >
//       <div
//         className={classes.radioWrap}
//         onClick={() => {
//           router.push(router.pathname, router.pathname, { locale: "fa" });
//           setIsOpenPopup(false);
//         }}>
//         <input
//           className={classes.radioButton}
//           type="radio"
//           id="persian"
//           name="lang"
//           // defaultChecked={router.locale === "fa" ? true : false}
//           checked={router.locale === "fa" ? true : false}
//           // eslint-disable-next-line @typescript-eslint/no-empty-function
//           onChange={() => {}}
//         />
//         <label htmlFor="persian" className={classes.label}>
//           {t("home:PERSIAN_LANG")}
//         </label>
//       </div>
//       <div
//         className={classes.radioWrap}
//         onClick={() => {
//           router.push(router.pathname, router.pathname, { locale: "en" });
//           setIsOpenPopup(false);
//         }}>
//         <input
//           className={classes.radioButton}
//           type="radio"
//           id="english"
//           name="lang"
//           // defaultChecked={router.locale === "en" ? true : false}
//           checked={router.locale === "en" ? true : false}
//           // eslint-disable-next-line @typescript-eslint/no-empty-function
//           onChange={() => {}}
//         />
//         <label htmlFor="english" className={classes.label}>
//           {t("home:ENGLISH_LANG")}
//         </label>
//       </div>
//     </div>
//   );
// };

// export default LangPopup;
import React, { useRef } from "react";
import classes from "./LangPopup.module.scss";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import clsx from "clsx";
import "animate.css";

interface LangPopupProps {
  setPopupDisplayConfig: (arg0: {
    visibility: boolean;
    animate: string;
  }) => void;
  popupDisplayConfig: {
    visibility: boolean;
    animate: string;
  };
}

const LangPopup = ({
  popupDisplayConfig,
  setPopupDisplayConfig,
}: LangPopupProps) => {
  const router = useRouter();
  const { t } = useTranslation();
  const popupRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={clsx(
        classes.popupWrap,
        `animate__animated ${
          popupDisplayConfig.animate
            ? "animate__" + popupDisplayConfig.animate
            : ""
        } animate__faster ${popupDisplayConfig.visibility ? "flex" : "!hidden"}`
      )}
      ref={popupRef}
      onAnimationEnd={() => {
        popupDisplayConfig.animate === "fadeOut"
          ? setPopupDisplayConfig({
              animate: "",
              visibility: false,
            })
          : setPopupDisplayConfig({
              animate: "",
              visibility: true,
            });
      }}>
      <div
        className={classes.radioWrap}
        onClick={() => {
          router.push(router.pathname, router.pathname, { locale: "fa" });
          setPopupDisplayConfig({
            visibility: true,
            animate: "fadeOut",
          });
        }}>
        <input
          className={classes.radioButton}
          type="radio"
          id="persian"
          name="lang"
          // defaultChecked={router.locale === "fa" ? true : false}
          checked={router.locale === "fa" ? true : false}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onChange={() => {}}
        />
        <label htmlFor="persian" className={classes.label}>
          {t("home:PERSIAN_LANG")}
        </label>
      </div>
      <div
        className={classes.radioWrap}
        onClick={() => {
          router.push(router.pathname, router.pathname, { locale: "en" });
          setPopupDisplayConfig({
            visibility: true,
            animate: "fadeOut",
          });
        }}>
        <input
          className={classes.radioButton}
          type="radio"
          id="english"
          name="lang"
          // defaultChecked={router.locale === "en" ? true : false}
          checked={router.locale === "en" ? true : false}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onChange={() => {}}
        />
        <label htmlFor="english" className={classes.label}>
          {t("home:ENGLISH_LANG")}
        </label>
      </div>
    </div>
  );
};

export default LangPopup;
