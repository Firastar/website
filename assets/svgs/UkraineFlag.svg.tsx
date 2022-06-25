import React from "react";

interface UkraineFlagProps {
  width?: number;
  height?: number;
}

const UkraineFlag = ({ width, height }: UkraineFlagProps) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 55.2 38.4"
      xmlSpace="preserve">
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html: `.st0{fill:#FFD500;}
        .st1{fill:#005BBB;}`,
        }}></style>
      <g>
        <path
          className="st1"
          d="M3.03,0h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.37,3.03-3.03,3.03H3.03C1.37,38.4,0,37.04,0,35.37 V3.03C0,1.36,1.37,0,3.03,0L3.03,0z"
        />
        <path
          className="st0"
          d="M0,19.2h55.2v16.17c0,1.67-1.37,3.03-3.03,3.03H3.03C1.37,38.4,0,37.04,0,35.37V19.2L0,19.2z"
        />
      </g>
    </svg>
  );
};

export default UkraineFlag;
