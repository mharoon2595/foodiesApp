"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./NavLinks.module.css";

const NavLinks = ({ href, children }) => {
  const path = usePathname();
  return (
    <li
      className={`hover:text-orange-400 hover:shadow-md ${
        path.startsWith(href) ? classes.glow : ""
      }`}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export default NavLinks;
