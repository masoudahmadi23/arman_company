"use client";

import { useState } from "react";
import styles from "./HamberMenu.module.css";
import MenuMobile from "./MenuMobile";

function HamberMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <input
        type="checkbox"
        role="button"
        aria-label="Display the menu"
        className={styles.menu}
        onClick={toggleMenu}
        checked={open}
        readOnly
      />
      <MenuMobile open={open} />
    </>
  );
}

export default HamberMenu;
