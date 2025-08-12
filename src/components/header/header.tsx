import Link from "next/link";
import Navigation from "./navigation/navigation";
import UserProfile from "./user-profile/user-profile";
import BurgerButton from "./burger-menu/burger-menu";
import clsx from "clsx";
import styles from "./header.module.css";

const Header = async () => {

  return (
    <header className={styles.header}>
      <div className={clsx(styles["header__wrapper"], 'wrapper')}>
      
        <Link href="/">
          <div className={styles.header__logo}>LOGO Site</div>
        </Link>
       
        <Navigation />
        <UserProfile />
        <BurgerButton />

      </div>
    </header>
  );
};

export default Header;
