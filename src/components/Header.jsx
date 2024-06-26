import React, { useState, useEffect } from "react";
import { navigation } from "../constants/index";
import { Form, Link, useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Contactus from "../components/Contactus";

const Header = () => {
  const pathname = useLocation();
  const [openNav, setOpenNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggle = () => {
    if (openNav) {
      setOpenNav(false);
      enablePageScroll();
    } else {
      setOpenNav(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNav) return;

    enablePageScroll();
    setOpenNav(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 lg:backdrop-blur-sm border-b border-n-6 
  lg:bg-n-8/90 ${openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"} `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src='/ityo2.png'alt=" logo" width={190} height={40} />
        </a>
        <nav
          className={`${
            openNav ? "flex" : "hidden"
          }  fixed top-[5rem] left-0 right-0 bottom-0 
        bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative flex flex-col items-center justify-center m-auto z-2 lg:flex-row">
            {navigation.map((item) => (
              <a
                href={item.url}
                key={item.id}
                className={`block relative font-code text-2xl uppercase 
                text-n-1 transition-colors hover:text-color-1
                ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold
                ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                onClick={handleClick}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        {/* Conditionally render the "Contact Us" link */}
        {!isMobile && (
          <a
            href="/contactus"
            className="mr-8 transition-colors button text-n-1/50 hover:text-n-1 lg:block "
          >
            Contact Us
          </a>
        )}

        <Button className={`hidden lg:flex`} href={"#login"}>
          Arivani Technologies Pvt Ltd
        </Button>

        <Button className={`ml-auto lg:hidden`} px={`px-3`} onClick={toggle}>
          <MenuSvg openNavigation={openNav} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
