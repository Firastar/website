import React from "react";

interface PagesProps {
  width?: number;
  height?: number;
  className?: string;
}

const Pages = ({ width = 395, height = 280, className }: PagesProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 295 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M209.316 232.714H2.72522C2.00244 232.714 1.30939 232.427 0.798379 231.916C0.287367 231.404 0.000205394 230.711 0 229.989L0 2.72474C0.000410829 2.00222 0.287663 1.30941 0.798653 0.798511C1.30964 0.287612 2.00257 0.000410756 2.72522 0L209.316 0C210.039 0.000410756 210.732 0.287612 211.243 0.798511C211.754 1.30941 212.041 2.00222 212.042 2.72474V229.989C212.041 230.711 211.754 231.404 211.243 231.916C210.732 232.427 210.039 232.714 209.316 232.714Z"
        fill="#E5E5E5"
      />
      <path
        d="M100.391 88.1536H25.8955C25.2451 88.1528 24.6216 87.8941 24.1618 87.4343C23.7019 86.9746 23.4432 86.3512 23.4424 85.701V34.4712C23.443 33.8209 23.7016 33.1975 24.1616 32.7376C24.6215 32.2778 25.2451 32.0192 25.8955 32.0186H100.394C101.044 32.0194 101.667 32.2781 102.127 32.7379C102.587 33.1977 102.845 33.8211 102.846 34.4712V85.701C102.845 86.3516 102.586 86.9753 102.126 87.4352C101.665 87.895 101.041 88.1534 100.391 88.1536Z"
        fill="white"
      />
      <path
        d="M186.152 116.221H25.8955C25.2449 116.221 24.6209 115.963 24.1609 115.503C23.7008 115.043 23.4424 114.419 23.4424 113.768C23.4424 113.118 23.7008 112.494 24.1609 112.034C24.6209 111.574 25.2449 111.316 25.8955 111.316H186.152C186.803 111.316 187.427 111.574 187.887 112.034C188.347 112.494 188.606 113.118 188.606 113.768C188.606 114.419 188.347 115.043 187.887 115.503C187.427 115.963 186.803 116.221 186.152 116.221Z"
        fill="white"
      />
      <path
        d="M147.448 133.116H25.8955C25.2449 133.116 24.6209 132.858 24.1609 132.398C23.7008 131.938 23.4424 131.314 23.4424 130.663C23.4424 130.013 23.7008 129.389 24.1609 128.929C24.6209 128.469 25.2449 128.211 25.8955 128.211H147.448C148.099 128.211 148.723 128.469 149.183 128.929C149.643 129.389 149.901 130.013 149.901 130.663C149.901 131.314 149.643 131.938 149.183 132.398C148.723 132.858 148.099 133.116 147.448 133.116Z"
        fill="white"
      />
      <path
        d="M185.605 54.0909H114.741C114.091 54.0909 113.467 53.8325 113.007 53.3725C112.547 52.9126 112.288 52.2887 112.288 51.6382C112.288 50.9878 112.547 50.3639 113.007 49.904C113.467 49.444 114.091 49.1856 114.741 49.1856H185.605C186.255 49.1856 186.879 49.444 187.339 49.904C187.799 50.3639 188.058 50.9878 188.058 51.6382C188.058 52.2887 187.799 52.9126 187.339 53.3725C186.879 53.8325 186.255 54.0909 185.605 54.0909Z"
        fill="white"
      />
      <path
        d="M167.92 70.9858H114.742C114.092 70.9858 113.468 70.7274 113.008 70.2675C112.548 69.8075 112.289 69.1837 112.289 68.5332C112.289 67.8827 112.548 67.2589 113.008 66.7989C113.468 66.3389 114.092 66.0805 114.742 66.0805H167.92C168.571 66.0805 169.195 66.3389 169.655 66.7989C170.115 67.2589 170.373 67.8827 170.373 68.5332C170.373 69.1837 170.115 69.8075 169.655 70.2675C169.195 70.7274 168.571 70.9858 167.92 70.9858Z"
        fill="white"
      />
      <path
        d="M186.152 150.011H25.8955C25.2449 150.011 24.6209 149.753 24.1609 149.293C23.7008 148.833 23.4424 148.209 23.4424 147.558C23.4424 146.908 23.7008 146.284 24.1609 145.824C24.6209 145.364 25.2449 145.106 25.8955 145.106H186.152C186.803 145.106 187.427 145.364 187.887 145.824C188.347 146.284 188.606 146.908 188.606 147.558C188.606 148.209 188.347 148.833 187.887 149.293C187.427 149.753 186.803 150.011 186.152 150.011Z"
        fill="white"
      />
      <path
        d="M147.448 166.906H25.8955C25.2449 166.906 24.6209 166.647 24.1609 166.188C23.7008 165.728 23.4424 165.104 23.4424 164.453C23.4424 163.803 23.7008 163.179 24.1609 162.719C24.6209 162.259 25.2449 162.001 25.8955 162.001H147.448C148.099 162.001 148.723 162.259 149.183 162.719C149.643 163.179 149.901 163.803 149.901 164.453C149.901 165.104 149.643 165.728 149.183 166.188C148.723 166.647 148.099 166.906 147.448 166.906Z"
        fill="white"
      />
      <path
        d="M186.152 183.801H25.8955C25.2449 183.801 24.6209 183.542 24.1609 183.082C23.7008 182.623 23.4424 181.999 23.4424 181.348C23.4424 180.698 23.7008 180.074 24.1609 179.614C24.6209 179.154 25.2449 178.896 25.8955 178.896H186.152C186.803 178.896 187.427 179.154 187.887 179.614C188.347 180.074 188.606 180.698 188.606 181.348C188.606 181.999 188.347 182.623 187.887 183.082C187.427 183.542 186.803 183.801 186.152 183.801Z"
        fill="white"
      />
      <path
        d="M186.152 200.693H25.8955C25.2449 200.693 24.6209 200.434 24.1609 199.974C23.7008 199.514 23.4424 198.89 23.4424 198.24C23.4424 197.59 23.7008 196.966 24.1609 196.506C24.6209 196.046 25.2449 195.787 25.8955 195.787H186.152C186.803 195.787 187.427 196.046 187.887 196.506C188.347 196.966 188.606 197.59 188.606 198.24C188.606 198.89 188.347 199.514 187.887 199.974C187.427 200.434 186.803 200.693 186.152 200.693Z"
        fill="white"
      />
      <path
        d="M292.275 280H85.6837C84.9609 280 84.2679 279.712 83.7569 279.201C83.2459 278.69 82.9587 277.997 82.9585 277.274V50.0104C82.9589 49.2879 83.2462 48.5951 83.7571 48.0842C84.2681 47.5733 84.9611 47.2861 85.6837 47.2856H292.275C292.998 47.2861 293.69 47.5733 294.201 48.0842C294.712 48.5951 295 49.2879 295 50.0104V277.274C295 277.997 294.713 278.69 294.202 279.201C293.691 279.712 292.998 280 292.275 280Z"
        fill="white"
      />
      <path
        opacity="0.401"
        d="M292.275 280H85.6837C84.9609 280 84.2679 279.712 83.7569 279.201C83.2459 278.69 82.9587 277.997 82.9585 277.274V50.0104C82.9589 49.2879 83.2462 48.5951 83.7571 48.0842C84.2681 47.5733 84.9611 47.2861 85.6837 47.2856H292.275C292.998 47.2861 293.69 47.5733 294.201 48.0842C294.712 48.5951 295 49.2879 295 50.0104V277.274C295 277.997 294.713 278.69 294.202 279.201C293.691 279.712 292.998 280 292.275 280ZM85.6837 48.3755C85.2501 48.3757 84.8343 48.5481 84.5277 48.8546C84.2211 49.1611 84.0488 49.5769 84.0486 50.0104V277.274C84.0486 277.708 84.2209 278.124 84.5275 278.43C84.8342 278.737 85.2501 278.909 85.6837 278.909H292.275C292.709 278.909 293.124 278.737 293.431 278.43C293.738 278.124 293.91 277.708 293.91 277.274V50.0104C293.91 49.5769 293.737 49.1611 293.431 48.8546C293.124 48.5481 292.708 48.3757 292.275 48.3755H85.6837Z"
        fill="#FFBC79"
      />
      <path
        d="M183.349 137.211H108.853C108.203 137.21 107.58 136.951 107.12 136.491C106.66 136.031 106.401 135.408 106.4 134.758V83.5281C106.401 82.8779 106.66 82.2544 107.12 81.7945C107.579 81.3347 108.203 81.0761 108.853 81.0755H183.352C184.002 81.0763 184.625 81.335 185.085 81.7948C185.545 82.2546 185.803 82.878 185.804 83.5281V134.758C185.803 135.408 185.545 136.031 185.085 136.491C184.625 136.951 184.002 137.209 183.352 137.211H183.349Z"
        fill="#FFBC79"
      />
      <path
        d="M269.11 165.278H108.853C108.203 165.278 107.579 165.02 107.119 164.56C106.659 164.1 106.4 163.476 106.4 162.825C106.4 162.175 106.659 161.551 107.119 161.091C107.579 160.631 108.203 160.373 108.853 160.373H269.11C269.761 160.373 270.385 160.631 270.845 161.091C271.305 161.551 271.564 162.175 271.564 162.825C271.564 163.476 271.305 164.1 270.845 164.56C270.385 165.02 269.761 165.278 269.11 165.278Z"
        fill="#CCCCCC"
      />
      <path
        d="M230.406 182.173H108.853C108.203 182.173 107.579 181.915 107.119 181.455C106.659 180.995 106.4 180.371 106.4 179.72C106.4 179.07 106.659 178.446 107.119 177.986C107.579 177.526 108.203 177.268 108.853 177.268H230.406C231.057 177.268 231.681 177.526 232.141 177.986C232.601 178.446 232.859 179.07 232.859 179.72C232.859 180.371 232.601 180.995 232.141 181.455C231.681 181.915 231.057 182.173 230.406 182.173Z"
        fill="#CCCCCC"
      />
      <path
        d="M268.563 103.148H197.7C197.049 103.148 196.425 102.889 195.965 102.43C195.505 101.97 195.247 101.346 195.247 100.696C195.247 100.045 195.505 99.4214 195.965 98.9615C196.425 98.5016 197.049 98.2433 197.7 98.2433H268.563C269.214 98.2433 269.838 98.5016 270.298 98.9615C270.758 99.4214 271.016 100.045 271.016 100.696C271.016 101.346 270.758 101.97 270.298 102.43C269.838 102.889 269.214 103.148 268.563 103.148Z"
        fill="#FFBC79"
      />
      <path
        d="M250.878 120.043H197.7C197.058 120.031 196.445 119.768 195.994 119.309C195.544 118.851 195.291 118.233 195.291 117.59C195.291 116.948 195.544 116.33 195.994 115.872C196.445 115.413 197.058 115.15 197.7 115.138H250.878C251.521 115.15 252.134 115.413 252.585 115.872C253.035 116.33 253.288 116.948 253.288 117.59C253.288 118.233 253.035 118.851 252.585 119.309C252.134 119.768 251.521 120.031 250.878 120.043Z"
        fill="#FFBC79"
      />
      <path
        d="M269.11 199.065H108.853C108.203 199.065 107.579 198.806 107.119 198.346C106.659 197.886 106.4 197.263 106.4 196.612C106.4 195.962 106.659 195.338 107.119 194.878C107.579 194.418 108.203 194.16 108.853 194.16H269.11C269.761 194.16 270.385 194.418 270.845 194.878C271.305 195.338 271.564 195.962 271.564 196.612C271.564 197.263 271.305 197.886 270.845 198.346C270.385 198.806 269.761 199.065 269.11 199.065Z"
        fill="#CCCCCC"
      />
      <path
        d="M230.406 215.964H108.853C108.203 215.964 107.579 215.705 107.119 215.245C106.659 214.785 106.4 214.161 106.4 213.511C106.4 212.86 106.659 212.237 107.119 211.777C107.579 211.317 108.203 211.058 108.853 211.058H230.406C231.057 211.058 231.681 211.317 232.141 211.777C232.601 212.237 232.859 212.86 232.859 213.511C232.859 214.161 232.601 214.785 232.141 215.245C231.681 215.705 231.057 215.964 230.406 215.964Z"
        fill="#CCCCCC"
      />
      <path
        d="M269.11 232.858H108.853C108.203 232.858 107.579 232.599 107.119 232.139C106.659 231.679 106.4 231.056 106.4 230.405C106.4 229.755 106.659 229.131 107.119 228.671C107.579 228.211 108.203 227.952 108.853 227.952H269.11C269.761 227.952 270.385 228.211 270.845 228.671C271.305 229.131 271.564 229.755 271.564 230.405C271.564 231.056 271.305 231.679 270.845 232.139C270.385 232.599 269.761 232.858 269.11 232.858Z"
        fill="#CCCCCC"
      />
      <path
        d="M269.11 249.753H108.853C108.203 249.753 107.579 249.494 107.119 249.034C106.659 248.574 106.4 247.951 106.4 247.3C106.4 246.65 106.659 246.026 107.119 245.566C107.579 245.106 108.203 244.847 108.853 244.847H269.11C269.761 244.847 270.385 245.106 270.845 245.566C271.305 246.026 271.564 246.65 271.564 247.3C271.564 247.951 271.305 248.574 270.845 249.034C270.385 249.494 269.761 249.753 269.11 249.753Z"
        fill="#CCCCCC"
      />
      <path
        opacity="0.396"
        d="M276.889 31.9116L276.122 38.32C263.838 21.4475 246.823 11.1625 225.504 7.71531L230.88 4.13013L230.017 2.84024L222.271 8.00833L227.99 15.357L229.216 14.4051L225.191 9.23543C246.148 12.6059 262.864 22.7111 274.914 39.2936L268.474 38.0394L268.178 39.5626L277.32 41.3455L278.43 32.1015L276.889 31.9116Z"
        fill="#FFBC79"
      />
    </svg>
  );
};

export default Pages;
