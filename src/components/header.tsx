"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "@/constants";
import { cn } from "@/lib/utils";
import CustomButtonLink from "./custom-button-link";
import { HamburgerMenu } from "./design/Header";
import { Button } from "./ui/button";
import MenuSvg from "../assets/svg/MenuSvg";

function Header() {
  const params = useParams();
  const [hash, setHash] = useState<string>();
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav((prev) => !prev);

    if (openNav) {
      disablePageScroll();
      return;
    }

    enablePageScroll();
  };

  const handleClick = () => {
    if (!openNav) return;

    enablePageScroll();
    setOpenNav(false);
  };

  useEffect(() => {
    setHash(window.location.hash);
  }, [params]);

  return (
    <div
      className={`${openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"} fixed left-0 top-0 z-50 w-full border-b border-n-6`}
    >
      <div className="flex items-center px-5 max-lg:py-4 lg:px-8 xl:px-10">
        <Link href={"#hero"} className="block w-48 xl:mr-8">
          <Image
            src={"brainwave.svg"}
            width={190}
            height={40}
            alt="Brainwave logo"
          />
        </Link>

        <nav
          className={`${openNav ? "flex" : "hidden"} fixed bottom-0 left-0 right-0 top-[5rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
        >
          <div className="relative z-20 m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={cn(
                  "relative block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1",
                  "p-6 md:py-8 lg:-mr-[0.0625rem] lg:text-xs lg:font-semibold",
                  "lg:leading-5 lg:hover:text-n-1 xl:px-12",
                  item.onlyMobile && "lg:hidden",
                  item.url === hash ? "z-20 lg:text-n-1" : "lg:text-n-1/50",
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <Link
          href={"#signup"}
          className="mr-8 hidden font-code text-xs font-bold uppercase tracking-wider text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </Link>

        <CustomButtonLink href={"#signup"} className="hidden lg:flex">
          Sign in
        </CustomButtonLink>

        <Button onClick={toggleNav} className="ml-auto px-3 lg:hidden">
          <MenuSvg openNavigation={openNav} />
        </Button>
      </div>
    </div>
  );
}
export default Header;
