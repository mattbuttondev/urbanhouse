import { IconProps } from "@/types";
import React from "react";

const Search = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        {...props}
        className={className}
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.6931 5.58187C17.025 7.91369 17.025 11.6943 14.6931 14.0261C12.3613 16.358 8.58069 16.358 6.24887 14.0261C3.91704 11.6943 3.91704 7.91369 6.24887 5.58187C8.58069 3.25005 12.3613 3.25005 14.6931 5.58187"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6499 14.06L20.4999 19.99"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Search.displayName = "Search";
export default Search;
