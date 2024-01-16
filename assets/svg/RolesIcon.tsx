import React from "react";
import { Icon } from "./type";

const RolesIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
    >
      <path
        d="M16.5 1.5L15 0L13.5 1.5L12 0L10.5 1.5L9 0L7.5 1.5L6 0L4.5 1.5L3 0V14H0V17C0 18.66 1.34 20 3 20H15C16.66 20 18 18.66 18 17V0L16.5 1.5ZM12 18H3C2.45 18 2 17.55 2 17V16H12V18ZM16 17C16 17.55 15.55 18 15 18C14.45 18 14 17.55 14 17V14H5V3H16V17Z"
        fill="#7C8493"
      />
      <path d="M12 5H6V7H12V5Z" fill="#7C8493" />
      <path d="M15 5H13V7H15V5Z" fill="#7C8493" />
      <path d="M12 8H6V10H12V8Z" fill="#7C8493" />
      <path d="M15 8H13V10H15V8Z" fill="#7C8493" />
    </svg>
  );
};

export default RolesIcon;
