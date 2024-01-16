import React from "react";
import { Icon } from "./type";

const PaymentIcon = ({ ...props }: Icon) => {
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
        d="M11.5 7.99V7.49H11H9.20925L12 4.70622L14.7908 7.49H13H12.5V7.99V15.5H11.5V7.99ZM15.5 18.5V19.5H8.5V18.5H15.5Z"
        fill="#7C8493"
        stroke="#7C8493"
      />
    </svg>
  );
};

export default PaymentIcon;
