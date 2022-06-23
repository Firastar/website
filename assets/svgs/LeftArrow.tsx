import React from "react";

interface LeftArrowProps {
  width?: number;
  height?: number;
  color?: string;
}

const LeftArrow = ({ width = 24, height = 24, color }: LeftArrowProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11 5L4 12L11 19M4 12H20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-black-pure dark:stroke-white"
      />
    </svg>
  );
};

export default LeftArrow;
