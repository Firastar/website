import React from "react";

interface RightArrowProps {
  width?: number;
  height?: number;
  color?: string;
}

const RightArrow = ({ width = 24, height = 24, color }: RightArrowProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 19L20 12L13 5M4 12H20H4Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-black-pure dark:stroke-white"
      />
    </svg>
  );
};

export default RightArrow;
