import { cn } from "@/utils/cn";
import { ReactNode } from "react";

export interface HeroContentProps {
  children: ReactNode;
  className?: string;
}

const HeroContent = ({ children, className }: HeroContentProps) => {
  return (
    <div
      className={cn(
        "absolute flex h-full w-full flex-col items-center justify-center overflow-hidden text-center",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default HeroContent;
