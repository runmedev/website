"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import GitHubStars from "@/components/GitHubStars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import type { MenuItem } from "@/types/components";

interface ExpandedMenusState {
  [key: string]: boolean;
}

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [expandedMenus, setExpandedMenus] = useState<ExpandedMenusState>({});

  const toggleSubMenu = (menu: string): void => {
    setExpandedMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const menuItems: MenuItem[] = [
    {
      text: "Docs",
      href: "https://docs.runme.dev",
      subItems: [
        { text: "Installation", href: "https://docs.runme.dev/installation/" },
        { text: "Getting Started", href: "https://docs.runme.dev/getting-started/" },
        { text: "Configuration", href: "https://docs.runme.dev/configuration" },
        { text: "Usage", href: "https://docs.runme.dev/usage" },
      ],
    },
    {
      text: "Community",
      href: "/community",
      subItems: [
        { text: "GitHub", href: "https://github.com/runmedev/runme" },
        { text: "Discord", href: "https://discord.gg/jFy92yxT" },
        { text: "Email Updates", href: "/list" },
      ],
    },
    { text: "Blog", href: "/blog" },
  ];

  return (
    <Navbar className="bg-purpledk" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/* Logo and GitHub stars */}
      <NavbarBrand>
        <Link href="/" className="flex items-center space-x-2 hover:brightness-90">
          <div className="w-[32px] h-[32px] relative">
            <Image fill src="/runme_logo.svg" alt="Runme" />
          </div>
          <div className="text-2xl font-semibold text-white">RUNME</div>
        </Link>
        <div className="pt-2 px-6 hidden sm:block">
          <GitHubStars compact text="runme" url="https://github.com/runmedev/runme" />
        </div>
      </NavbarBrand>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        {menuItems.map((item) =>
          item.subItems ? (
            <Dropdown key={item.text} showArrow>
              <DropdownTrigger>
                <span
                  className={`font-medium cursor-pointer ${
                    pathname?.includes(item.href) ? "font-semibold text-primary" : "text-foreground"
                  }`}
                >
                  {item.text}
                </span>
              </DropdownTrigger>
              <DropdownMenu className="bg-purpledk text-white">
                {item.subItems.map((subItem) => (
                  <DropdownItem key={subItem.text}>
                    <Link
                      href={subItem.href}
                      className={`block ${
                        pathname === subItem.href ? "font-semibold text-primary" : "text-white"
                      }`}
                    >
                      {subItem.text}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem key={item.text}>
              <Link
                href={item.href}
                className={`font-medium ${
                  pathname === item.href ? "font-semibold text-primary" : "text-foreground"
                }`}
              >
                {item.text}
              </Link>
            </NavbarItem>
          )
        )}
      </NavbarContent>

      {/* Desktop Buttons */}
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button as="a" href="https://docs.runme.dev" color="primary" size="sm">
            <FontAwesomeIcon icon={faPlay} /> &nbsp; Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item) =>
          item.subItems ? (
            <NavbarMenuItem key={item.text}>
              <div className="flex justify-between items-center">
                <Link
                  href={item.href}
                  className={`text-lg font-medium ${
                    pathname?.includes(item.href) ? "font-semibold text-primary" : "text-white"
                  }`}
                >
                  {item.text}
                </Link>
                <FontAwesomeIcon
                  icon={expandedMenus[item.text] ? faChevronDown : faChevronRight}
                  className="cursor-pointer"
                  onClick={() => toggleSubMenu(item.text)}
                />
              </div>
              {expandedMenus[item.text] && (
                <div className="ml-4 mt-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.text}
                      href={subItem.href}
                      className={`block font-medium ${
                        pathname === subItem.href ? "text-primary" : "text-white"
                      }`}
                    >
                      {subItem.text}
                    </Link>
                  ))}
                </div>
              )}
            </NavbarMenuItem>
          ) : (
            <NavbarMenuItem key={item.text}>
              <Link
                href={item.href}
                className={`text-lg font-medium ${
                  pathname === item.href ? "text-primary" : "text-white"
                }`}
              >
                {item.text}
              </Link>
            </NavbarMenuItem>
          )
        )}
        <NavbarMenuItem>
          <Link href="https://docs.runme.dev" className="text-lg block font-semibold text-white">
            <FontAwesomeIcon icon={faPlay} /> &nbsp; Get Started
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>

      {/* Mobile Toggle */}
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
    </Navbar>
  );
};

export default Header;
