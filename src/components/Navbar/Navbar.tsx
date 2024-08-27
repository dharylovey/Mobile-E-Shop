"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import Navlink from "@/components/Navbar/Navlink";
import NavbarCart from "@/components/Navbar/NavbarCart";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button } from "../ui/button";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "Contact Us", href: "/contact" },
  { name: "Products", href: "/products" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevNav) => !prevNav);
  };

  const handleClickMenu = (event: any) => {
    event.stopPropagation();
    setOpen((prevNav) => !prevNav);
  };
  return (
    <header className="px-4 py-6 lg:px-[160px] lg:py-5 border-b-[1px] border-[#B5B5B5]">
      <nav className="flex items-center justify-between self-stretch">
        <Link href={"/"} className="flex items-center gap-2">
          <h1 className="text-3xl font-semibold">cyber</h1>
        </Link>
        <div className="hidden  lg:flex lg:items-center lg:w-[372px] lg:h-14">
          <CiSearch className="absolute ml-[10px]" />
          <Input placeholder="Search" className="pl-7" />
        </div>

        <Navlink links={NavLinks} />
        <div className="flex items-center gap-2">
          <NavbarCart />
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={handleClick}
            className="  md:block xl:hidden"
          >
            {open ? <IoMdClose size={24} /> : <RxHamburgerMenu size={24} />}

            <div
              className={`${
                open ? "flex" : "hidden"
              } absolute top-20 inset-x-0 mx-4 my-2 min-w-[140px] rounded-xl`}
            >
              <ul className="flex flex-col justify-end flex-1 gap-2 p-5 bg-[#EDEDED] rounded-2xl">
                {NavLinks.map((link) => (
                  <li
                    className={
                      pathname === link.href
                        ? "text-black text-2xl"
                        : "opacity-30 text-2xl"
                    }
                    key={link.name}
                  >
                    <Link href={link.href} onClick={handleClickMenu}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Button>
        </div>
      </nav>
    </header>
  );
}
