"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  end?: boolean;
  children: ReactNode;
}

const NavLink = ({ href, end = false, children }: NavLinkProps) => {
  const pathname = usePathname();

  const isActive = end ? pathname === href : pathname.startsWith(href);

  const linkClasses = isActive
    ? "font-semibold text-primary-400"
    : "font-medium text-accent-300 hover:text-accent-600";

  return (
    <li className={linkClasses}>
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavLink;
