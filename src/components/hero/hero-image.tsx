import { cn } from "@/utils/cn";
import Image, { ImageProps } from "next/image";

export interface HeroImageProps extends Omit<ImageProps, "alt"> {
  alt: string;
  dark?: boolean | number;
}

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  dark = false,
  className,
  ...props
}) => {
  const darkClass = (() => {
    if (typeof dark === "boolean" && dark) return "brightness-[70%]";
    if (typeof dark === "number") return `brightness-[${dark}%]`;
    return "";
  })();

  return (
    <Image
      src={src}
      alt={alt}
      className={cn("object-cover", darkClass, className)}
      {...props}
    />
  );
};

export default HeroImage;
