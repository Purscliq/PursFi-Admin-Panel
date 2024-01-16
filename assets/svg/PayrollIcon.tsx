import React from "react";
import { Icon } from "./type";

const PayrollIcon = ({ ...props }: Icon) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M19.25 8.25V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75"
        stroke="#7C8493"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 13C16.5 13.2761 16.2761 13.5 16 13.5C15.7239 13.5 15.5 13.2761 15.5 13C15.5 12.7239 15.7239 12.5 16 12.5C16.2761 12.5 16.5 12.7239 16.5 13Z"
        stroke="#7C8493"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.25 8.25H19.25M17.25 8.25H6.5C5.5335 8.25 4.75 7.4665 4.75 6.5C4.75 5.5335 5.5335 4.75 6.5 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V8.25Z"
        stroke="#7C8493"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PayrollIcon;
