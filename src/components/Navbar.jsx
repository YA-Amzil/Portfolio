import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
// Adjust logo
import { logo, menu, close } from "../assets";
import IconGithub from "./links/Github";
import IconLinkenin from "./links/LinkedIn";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
      <div className='w-full flex items-center max-w-7xl mx-auto'>

        {/* Desktop navigation */}
        <div className='hidden sm:flex items-center justify-center w-full'>
          <ul className='list-none flex flex-row gap-10'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile navigation */}
        <div className='sm:hidden flex items-center justify-between w-full'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 left-0 right-0 z-10 rounded-lg`}
          >
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social icons for both desktop and mobile */}
        <div className='flex items-center justify-end space-x-4 pr-4 sm:flex'>
          <a href="https://www.linkedin.com/in/yassine-amzil-914562222/" target="_blank" rel="noopener noreferrer">
            <IconLinkenin />
          </a>
          <a href="https://github.com/YA-Amzil" target="_blank" rel="noopener noreferrer">
            <IconGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;