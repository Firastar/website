import React from "react";

interface PhoneProps {
  width?: number;
  height?: number;
  color?: string;
}

const Phone = ({ width = 24, height = 24, color }: PhoneProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.25 6V7.5C14.8466 7.5006 15.4185 7.73784 15.8403 8.15967C16.2622 8.5815 16.4994 9.15345 16.5 9.75H18C17.9988 8.7558 17.6033 7.80267 16.9003 7.09966C16.1973 6.39666 15.2442 6.00119 14.25 6Z"
        fill={color}
        className="fill-black-ultra dark:fill-white"
      />
      <path
        d="M14.25 2.99997V4.49997C15.6419 4.50156 16.9763 5.05519 17.9606 6.03942C18.9448 7.02364 19.4984 8.35807 19.5 9.74997H21C20.998 7.96037 20.2862 6.24463 19.0208 4.97919C17.7553 3.71375 16.0396 3.00196 14.25 2.99997ZM2.25 4.49997V4.62747C3.0975 19.365 15.5325 21.4575 19.3275 21.75C19.9224 21.7957 20.5112 21.6032 20.9642 21.2149C21.4172 20.8265 21.6975 20.2742 21.7432 19.6792C21.7477 19.6197 21.75 19.56 21.75 19.5V15.5475C21.7503 15.2471 21.6604 14.9535 21.4919 14.7047C21.3234 14.456 21.0841 14.2636 20.805 14.1525L18 13.0125C17.7273 12.9027 17.4284 12.8755 17.1404 12.9341C16.8524 12.9928 16.588 13.1348 16.38 13.3425L14.7675 14.94C13.349 14.6915 12.0413 14.0127 11.0216 12.9957C10.002 11.9788 9.31976 10.6728 9.0675 9.25497L10.68 7.62747C10.8854 7.41635 11.0241 7.14943 11.0787 6.86001C11.1334 6.57059 11.1017 6.27148 10.9875 5.99997L9.855 3.17247C9.74034 2.89758 9.54643 2.66305 9.298 2.49876C9.04956 2.33448 8.75784 2.24787 8.46 2.24997H4.5C3.90326 2.24997 3.33097 2.48703 2.90901 2.90898C2.48705 3.33094 2.25 3.90324 2.25 4.49997ZM20.25 19.5C20.2503 19.5985 20.2312 19.6961 20.1938 19.7872C20.1564 19.8783 20.1014 19.9611 20.0319 20.031C19.9625 20.1008 19.88 20.1563 19.7891 20.1943C19.6982 20.2322 19.6007 20.2519 19.5022 20.2522C19.4812 20.2522 19.4605 20.2515 19.44 20.25C15 19.905 4.5 17.6925 3.75 4.54497C3.73811 4.34647 3.80553 4.15137 3.93746 4.00256C4.06938 3.85376 4.255 3.76345 4.4535 3.75147L4.5 3.74997H8.46L9.5925 6.57747L7.455 8.72997L7.5 9.08997C8.3175 15.615 14.8425 16.5 14.91 16.5L15.27 16.545L17.4225 14.415L20.25 15.54V19.5Z"
        fill={color}
        className="fill-black-ultra dark:fill-white"
      />
    </svg>
  );
};

export default Phone;
