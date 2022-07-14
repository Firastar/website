import React, { memo, useEffect, useState } from "react";
import classes from "./Card.module.scss";
import clsx from "clsx";
import ReactStars from "react-stars";
import Image from "next/image";

interface CardProps {
  borderColor: string;
  rate: number;
  userName: string;
  avatar: string;
  content: string;
}

const Card = ({ borderColor, rate, userName, avatar, content }: CardProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={clsx(classes.wrapper, `${borderColor}`)}>
      <div className={classes.avatarWrap}>
        <Image
          src={avatar}
          alt={userName}
          width={56}
          height={56}
          className={classes.avatar}
          objectFit="cover"
        />
        {mounted && (
          <ReactStars
            count={5}
            onChange={null}
            size={16}
            edit={false}
            value={rate}
            color2="#ffd700"
          />
        )}
      </div>
      <p className={classes.userName}>{userName}</p>
      <div className={classes.content}>{content}</div>
    </div>
  );
};

export default memo(Card);
