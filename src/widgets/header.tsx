"use client";
import { Button } from "@/shared/ui/button";
import { Navbar, NavbarLink, NavbarLogo, NavbarNav } from "@/shared/ui/navbar";
import { NavbarMobile } from "@/shared/ui/navbar/navbar";
import { useState } from "react";

export const Header = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);

  return (
    <Navbar isMobileOpen={isMobileOpen} setMobileOpen={setMobileOpen}>
      <NavbarLogo logoSrc="/logo.jpg">Yandex</NavbarLogo>
      <NavbarNav>
        <NavbarLink href={"#internships"}>Стажировки</NavbarLink>
        <NavbarLink href={"#events"}>Ивенты</NavbarLink>
        <NavbarLink href={"#projects"}>Образовательные проекты</NavbarLink>
        <NavbarLink href={"#olympiads"}>Олимпиады</NavbarLink>
        <NavbarLink href={"#coderun"}>СodeRun</NavbarLink>
        <Button>Хочу в Яндекс</Button>
      </NavbarNav>
      <NavbarMobile isOpen={isMobileOpen}>
        <NavbarLink href={"#internships"}>Стажировки</NavbarLink>
        <NavbarLink href={"#events"}>Ивенты</NavbarLink>
        <NavbarLink href={"#projects"}>Образовательные проекты</NavbarLink>
        <NavbarLink href={"#olympiads"}>Олимпиады</NavbarLink>
        <NavbarLink href={"#coderun"}>СodeRun</NavbarLink>
        <Button>Хочу в Яндекс</Button>
      </NavbarMobile>
    </Navbar>
  );
};
