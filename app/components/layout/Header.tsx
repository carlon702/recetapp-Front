import Link from "next/link";
import React from "react";

const PATHS = {
  root: "/",
  home: "/home",
  about: "/about",
  login: "/login",
  recipes: "/recipes",
};

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        paddingBottom: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link href={PATHS.root}>Root</Link>
      <Link href={PATHS.home}>Home</Link>
      <Link href={PATHS.about}>About</Link>
      <Link href={PATHS.login}>Login</Link>
      <Link href={PATHS.recipes}>Recipes</Link>
    </div>
  );
};

export default Header;
