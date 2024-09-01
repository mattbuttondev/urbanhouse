import { IconProps } from "@/types";
import React from "react";

const Bed = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        {...props}
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.75 10.5H6.25M17.75 10.5C20.0972 10.5 22 12.4028 22 14.75C22 17.0972 20.0972 19 17.75 19H6.25C3.90279 19 2 17.0972 2 14.75C2 12.4028 3.90279 10.5 6.25 10.5M17.75 10.5C18.7988 10.5 19.7588 10.8799 20.5 11.5095V8C20.5 5.23858 18.2614 3 15.5 3H8.5C5.73858 3 3.5 5.23858 3.5 8V11.5095C4.24122 10.8799 5.20125 10.5 6.25 10.5M17.5 19V21M6.5 19V21M17 10.5H7C7 10.1493 7 9.81259 7 9.49973C7 8.39516 7.89543 7.5 9 7.5H15C16.1046 7.5 17 8.39516 17 9.49973C17 9.81259 17 10.1493 17 10.5Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Bed.displayName = "Bed";
export default Bed;
