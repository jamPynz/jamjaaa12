import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./Icon";
import { ThemeSwitcher } from "@/components/molecules/ThemeSwitcher";

export const NavbarNext = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit text-xl">Proflie</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">
          <Link href="/">HOME</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>{" "}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
