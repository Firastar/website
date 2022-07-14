import React, { memo, useMemo } from "react";
import classes from "./FirastarUX.module.scss";
import { Card } from "@components";
import { useTranslation } from "next-i18next";

const FirastarUX = () => {
  const { t } = useTranslation("firastar-ux");

  const uxComments = useMemo(
    () => [
      {
        id: 1,
        img: "/images/keanu-reeves.jpg",
        username: t("USER_NAME_CARD_I"),
        rate: 5,
        content: t("CONTENT_CARD_I"),
      },
      {
        id: 2,
        img: "/images/keanu-reeves.jpg",
        username: t("USER_NAME_CARD_II"),
        rate: 5,
        content: t("CONTENT_CARD_II"),
      },
      {
        id: 3,
        img: "/images/keanu-reeves.jpg",
        username: t("USER_NAME_CARD_III"),
        rate: 5,
        content: t("CONTENT_CARD_III"),
      },
      {
        id: 4,
        img: "/images/keanu-reeves.jpg",
        username: t("USER_NAME_CARD_IV"),
        rate: 5,
        content: t("CONTENT_CARD_IV"),
      },
      {
        id: 5,
        img: "/images/keanu-reeves.jpg",
        username: t("USER_NAME_CARD_V"),
        rate: 5,
        content: t("CONTENT_CARD_V"),
      },
      {
        id: 6,
        img: "/images/keanu-reeves.jpg",
        username: t("USER_NAME_CARD_VI"),
        rate: 5,
        content: t("CONTENT_CARD_VI"),
      },
    ],
    [t]
  );

  return (
    <>
      <p className={classes.title}>{t("TITLE")}</p>
      <div className={classes.cardWrap}>
        {uxComments.map(comment => (
          <Card
            key={comment.id}
            borderColor={`${
              comment.id % 2 !== 0 ? "border-primary" : "border-secondary"
            }`}
            rate={comment.rate}
            userName={comment.username}
            avatar={comment.img}
            content={comment.content}
          />
        ))}
      </div>
    </>
  );
};

export default memo(FirastarUX);
