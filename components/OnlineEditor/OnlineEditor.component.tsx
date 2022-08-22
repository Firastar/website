import React, { memo, useEffect, useRef, useState } from "react";
import classes from "./OnlineEditor.module.scss";
import { Button } from "@components";

import autosize from "autosize";
import { useTranslation } from "next-i18next";
import { firast } from "@firastar/firastar-js";
import { CopyToClipboard } from "react-copy-to-clipboard";

const OnlineEditor = () => {
  const { t } = useTranslation("online-editor");

  // textarea refs
  const beforeRef = useRef<HTMLTextAreaElement>(null);
  const afterRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // to resize textarea after a text is inserted
    beforeRef.current?.focus();
    autosize(beforeRef.current);
    autosize(afterRef.current);

    // to set the same height for both text areas
    const resizeObserver = new ResizeObserver(() => {
      if (afterRef.current) {
        afterRef.current.style.height = beforeRef.current?.offsetHeight + "px";
      }
    });

    if (beforeRef.current) {
      resizeObserver.observe(beforeRef.current);
    }
  }, []);

  // controlled textarea
  const [textBefore, setTextBefore] = useState("");
  const [textAfter, setTextAfter] = useState("");
  useEffect(() => setTextAfter(firast(textBefore)), [textBefore]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.editor}>
        <div
          className={classes.beforeWrap}
          onClick={() => beforeRef.current?.focus()}>
          <textarea
            id="before"
            ref={beforeRef}
            placeholder={t("PLACEHOLDER")}
            className={classes.before}
            value={textBefore}
            onChange={e => setTextBefore(e.target.value)}
          />
          <Button
            text={t("EDIT_BUTTON")}
            variant="secondary"
            clickHandler={e => {
              e.stopPropagation();
              setTextAfter(firast(textBefore));
            }}
          />
        </div>
        <div className={classes.afterWrap}>
          <textarea
            id="after"
            ref={afterRef}
            className={classes.after}
            value={textAfter}
            dir="rtl"
            readOnly
          />
          <CopyToClipboard text={textAfter}>
            <button className={classes.copyBtn}>{t("COPY_BUTTON")}</button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default memo(OnlineEditor);
