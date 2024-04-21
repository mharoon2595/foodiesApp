import Link from "next/link";
import React from "react";
import classes from "./page.module.css";

const page = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}></main>
    </>
  );
};

export default page;
