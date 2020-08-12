import React from "react";
import styles from "./Navbar.module.css";
import { A } from "hookrouter";

export const Navbar = () => {
  return (
    <div>
      <h1>My Website</h1>
      <div className={styles.navbar}>
        <A href="/">Home</A>
        <A href="/about">About</A>
        <A href="/contact">Contact</A>
      </div>
    </div>
  );
};
