"use client";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import clsx from "clsx";
import NavItem from "../navigation/nav-item/nav-item";
import "./burger-menu.css";

const NAV_ITEMS = [
  { name: "Contacts", path: "/contacts", id: 1 },
  { name: "Lorem", path: "#", id: 2 },
  { name: "Lorem_2", path: "#", id: 3 },
  { name: "Lorem__3", path: "#", id: 4 },
  { name: "Lorem___4", path: "#", id: 5 },
];

const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();


  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
   if (isOpen) {  
    setIsOpen(false);
  }
    
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="mobile-menu">
      <button
        className="mobile-menu__burger-button"
        aria-label="Open menu"
        onClick={handleToggleMenu}
      >
        <span
          className={clsx("mobile-menu__menu__burger-icon", {
            "burger-button__icon-open": isOpen,
          })}
        ></span>
        <span
          className={clsx("mobile-menu__menu__burger-icon", {
            "burger-button__icon-open": isOpen,
          })}
        ></span>

        <span
          className={clsx("mobile-menu__menu__burger-icon", {
            "burger-button__icon-open": isOpen,
          })}
        ></span>
      </button>

      <div
        className={clsx("mobile-menu__nav-block", {
          "mobile-menu__nav-block--open": isOpen,
        })}
      >
       
        <ul className="mobile-menu__list">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.id} item={item}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerButton;
