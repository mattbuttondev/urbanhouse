import { IconProps } from "@/types";
import React from "react";

const Bathtub = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M16.9999 20V22M6.99987 20V22M4.49987 12V3.95416C4.49987 2.87491 5.37478 2 6.45403 2C7.10741 2 7.71756 2.32654 8.07999 2.87019L8.49987 3.5M7.41378 20H16.586C19.1076 20 21.2346 18.1223 21.5473 15.6202L21.7189 14.2481C21.8681 13.0544 20.9373 12 19.7343 12H4.26543C3.06244 12 2.13166 13.0544 2.28088 14.2481L2.45239 15.6202C2.76516 18.1223 4.89216 20 7.41378 20ZM7.89921 4.40694L9.71745 3.57389L12.2499 5.49998L7.70425 7.58263L7.89921 4.40694Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Bathtub.displayName = "Bathtub";
export default Bathtub;
