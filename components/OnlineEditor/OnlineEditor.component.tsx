import React, { memo, useEffect, useRef } from "react";
import classes from "./OnlineEditor.module.scss";
import { Button } from "@components";

import autosize from "autosize";

const OnlineEditor = () => {
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
      <div className={classes.beforeWrap}>
        <textarea
          id="before"
          ref={beforeRef}
          placeholder="متن خود را اینجا بنویسید..."
          className={classes.before}></textarea>
        <Button text="ویرایش" variant="secondary" />
      </div>
      <div className={classes.afterWrap}>
        <textarea
          id="after"
          ref={afterRef}
          placeholder="متن خود را اینجا بنویسید..."
          className={classes.after}></textarea>
        <Button
          text="کپی"
          variant="secondary"
          className="!bg-secondary !border-secondary"
        />
      </div>
    </div>
  );
};

export default memo(OnlineEditor);
