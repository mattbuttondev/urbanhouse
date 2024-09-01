import { cn } from "@/utils/cn";
import React from "react";

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  height?: number | string;
}

const Hero: React.FC<HeroProps> = ({
  children,
  className,
  height = 408,
  ...props
}) => {
  const style = {
    height: typeof height === "number" ? `${height}px` : height,
    ...props.style,
  };

  return (
    <section className={cn("relative", className)} style={style} {...props}>
      {children}
    </section>
  );
};

export default Hero;
