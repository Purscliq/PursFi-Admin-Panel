import React from "react";
import { Icon } from "./type";

const TransIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
    >
      <path
        d="M13 8C13 7.45 13.45 7 14 7C14.55 7 15 7.45 15 8C15 8.55 14.55 9 14 9C13.45 9 13 8.55 13 8ZM6 7H11V5H6V7ZM20 5.5V12.47L17.18 13.41L15.5 19H10V17H8V19H2.5C2.5 19 0 10.54 0 7.5C0 4.46 2.46 2 5.5 2H10.5C11.41 0.79 12.86 0 14.5 0C15.33 0 16 0.67 16 1.5C16 1.71 15.96 1.9 15.88 2.08C15.74 2.42 15.62 2.81 15.56 3.23L17.83 5.5H20ZM18 7.5H17L13.5 4C13.5 3.35 13.59 2.71 13.76 2.09C12.79 2.34 12 3.06 11.67 4H5.5C3.57 4 2 5.57 2 7.5C2 9.38 3.22 14.15 4.01 17H6V15H12V17H14.01L15.56 11.85L18 11.03V7.5Z"
        fill="#7C8493"
      />
    </svg>
  );
};

export default TransIcon;
