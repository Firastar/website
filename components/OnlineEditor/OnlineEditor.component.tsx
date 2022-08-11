import React, { memo, useEffect, useRef } from "react";
import classes from "./OnlineEditor.module.scss";
import { Button } from "@components";

import autosize from "autosize";
import { useTranslation } from "next-i18next";

const OnlineEditor = () => {
  const { t } = useTranslation("online-editor");

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
          />
          <Button text={t("EDIT_BUTTON")} variant="secondary" />
        </div>
        <div
          className={classes.afterWrap}
          onClick={() => afterRef.current?.focus()}>
          <textarea
            id="after"
            ref={afterRef}
            placeholder={t("PLACEHOLDER")}
            className={classes.after}
          />
          <Button
            text={t("COPY_BUTTON")}
            variant="secondary"
            className="!bg-secondary !border-secondary"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(OnlineEditor);
