import Image from "next/image";
import React from "react";

type Props = {
  img?: string;
  styles?: string;
  title?: string;
  isVerified?: boolean;
  badgeStyle?: string;
  badgeHeight?: number;
  badgeWidth?: number;
};

const Avatar = ({
  img,
  styles,
  title,
  isVerified,
  badgeStyle,
  badgeHeight,
  badgeWidth,
}: Props) => {
  return (
    <div className={`h-12 w-12 rounded-full relative ${styles}`}>
      {isVerified && (
        <Image
          alt=""
          src={"/assets/tick.png"}
          className={`absolute top-0 -right-0 ${badgeStyle}`}
          height={badgeHeight ? badgeHeight : 20}
          width={badgeWidth ? badgeWidth : 20}
        />
      )}
      {img ? (
        <Image
          alt=""
          src={img}
          className="object-cover"
          height={100}
          width={100}
        />
      ) : title ? (
        <span>{title[0]}</span>
      ) : (
        <Image
          alt=""
          src={"/assets/avatar.png"}
          height={100}
          width={100}
          className="object-cover w-full h-full"
        />
      )}
    </div>
  );
};

export default Avatar;
