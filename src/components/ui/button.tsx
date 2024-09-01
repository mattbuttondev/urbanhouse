import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva("inline-glex items-center justify-center", {
  variants: {
    variant: {
      primary:
        "bg-primary-500 text-accent-100 hover:bg-primary-600 active:bg-primary-300 disabled:bg-primary-100 disabled:text-accent-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-primary-100",
      secondary:
        "border border-accent-200 text-accent-600 hover:border-accent-300 active:border-accent-200 active:text-accent-400 disabled:border-accent-100 disabled:text-accent-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring focus-visible:ring-primary-100",
      link: "text-primary-400 underline",
    },
    size: {
      default: "py-2 px-6 rounded-full",
    },
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button = ({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
