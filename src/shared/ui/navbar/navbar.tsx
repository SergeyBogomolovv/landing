"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import React, {
  AnchorHTMLAttributes,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";
import clsx from "clsx";
import { Url } from "url";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { useParams, usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileOpen: boolean;
}

export const Navbar = ({
  isMobileOpen,
  setMobileOpen,
  ...props
}: NavbarProps) => {
  const toggleMenu = () => {
    setMobileOpen(!isMobileOpen);
  };
  return (
    <header {...props} className={clsx(props.className, styles.container)}>
      {props.children}
      <button onClick={toggleMenu} className={styles.burger_button}>
        {isMobileOpen ? <CgClose /> : <IoMenu />}
      </button>
    </header>
  );
};

interface NavbarLogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  logoSrc?: string;
}

export const NavbarLogo = ({
  children,
  className,
  logoSrc,
}: NavbarLogoProps) => {
  return (
    <Link className={clsx(className, styles.logo)} href={"/"}>
      {!!logoSrc && <Image src={logoSrc} alt="logo" width={40} height={40} />}
      <h1>{children}</h1>
    </Link>
  );
};

export const NavbarNav = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <nav className={clsx(props.className, styles.nav_container)} {...props}>
      {props.children}
    </nav>
  );
};

interface NavbarMobileProps {
  isOpen: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const NavbarMobile = ({
  isOpen,
  children,
  className,
}: NavbarMobileProps) => {
  const variants = {
    closed: { opacity: 0, display: "none" },
    open: { opacity: 1, display: "flex" },
  };
  return (
    <motion.nav
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      transition={{ duration: 0.2 }}
      className={clsx(
        className,
        styles.nav_container_mobile,
        isOpen ? styles.active : "",
      )}
    >
      {children}
    </motion.nav>
  );
};

interface LinkProps {
  href: Url | string;
  children: React.ReactNode;
}

export const NavbarLink = ({ href, children }: LinkProps) => {
  const pathname = usePathname();
  const params = useParams();

  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(pathname === href || window.location.hash === href);
  }, [params, href, pathname]);

  return (
    <Link
      href={href}
      className={clsx(active ? styles.active : "", styles.link)}
    >
      {children}
    </Link>
  );
};
