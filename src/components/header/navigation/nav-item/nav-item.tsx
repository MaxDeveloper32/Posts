"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import styles from "../navigation.module.css";

type ItemProps = {
  name: string;
  path: string;
  id: number;
};

type NavItemProps = {
  item: ItemProps;
  onClick?: () => void;
};

const NavItem = ({ item, onClick }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <>
      <li
        key={item.id}
        className={clsx(styles["header__nav-item"], {
          [styles.active]: pathname === item.path,
        })}
      >
        <Link href={item.path}  onClick={onClick}>{item.name}</Link >
      </li>
    </>
  );
};

export default NavItem;
