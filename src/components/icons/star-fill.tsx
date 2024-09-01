import { IconProps } from "@/types";
import React from "react";

const StarFill = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M12.5211 17.3184C12.201 17.1229 11.7986 17.1229 11.4785 17.3184L8.1738 19.3369C7.4147 19.8006 6.47344 19.1167 6.67983 18.2515L7.57835 14.4847C7.66535 14.12 7.54098 13.7372 7.2562 13.4932L4.3152 10.974C3.63967 10.3953 3.99919 9.28878 4.88585 9.2177L8.74594 8.90823C9.11973 8.87826 9.44534 8.64169 9.58935 8.29546L11.0765 4.71991C11.4181 3.89862 12.5815 3.89861 12.9231 4.7199L14.4103 8.29547C14.5543 8.6417 14.8799 8.87826 15.2537 8.90823L19.1138 9.21769C20.0005 9.28878 20.36 10.3953 19.6845 10.974L16.7435 13.4932C16.4587 13.7372 16.3343 14.12 16.4213 14.4847L17.3198 18.2515C17.5262 19.1168 16.585 19.8006 15.8259 19.337L12.5211 17.3184Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

StarFill.displayName = "StarFill";
export default StarFill;
