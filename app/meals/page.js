import Link from "next/link";
import React, { Suspense } from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/MealsGrid";
import { getMeals } from "@/lib/actions";

async function FetchMeals() {
  const data = await getMeals();
  return <MealsGrid meals={data} />;
}

const page = async () => {
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
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <FetchMeals />
        </Suspense>
      </main>
    </>
  );
};

export default page;
