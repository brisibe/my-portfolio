import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/Home.module.css";
import { CloseMenuIcon } from "./CloseMenuIcon";

import { useClickOutsideDiv } from "../../Hooks/useClickOutsideDiv";

import { MenuIcon } from "./MenuIcon";

export const Nav = () => {
  const node = useRef();
  const [click, setClick] = useState(false);

  useClickOutsideDiv(node, () => closeMobileMenu());

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div ref={node} className={styles.nav_wrapper}>
      <div className={styles.navbar}>
        <div className={styles.navbar_logo_wrapper} onClick={closeMobileMenu}>
          <a href="#">
            <img src="/logo.svg" alt="logo" />
          </a>
        </div>
        <div>
          <ul
            className={
              click
                ? `${styles.nav_options} ${styles.nav_options_active}`
                : styles.nav_options
            }
          >
            <li onClick={closeMobileMenu}>
              <a className={styles.link} href="#projects">
                Projects
              </a>
            </li>
            <li className={styles.link} onClick={closeMobileMenu}>
              <a href="#">Resume</a>
            </li>
            <li className={styles.link} onClick={closeMobileMenu}>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className={styles.mobile_menu} onClick={handleClick}>
          {click ? <CloseMenuIcon /> : <MenuIcon />}
        </div>
      </div>
    </div>
  );
};
