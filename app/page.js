import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/HeaderSlideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <ImageSlideshow />
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={`p-3 ${classes.section}`}>
          <h2 className="font-bold text-2xl">How it works</h2>
          <p className="p-2 font-light">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="font-light">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={`p-3 ${classes.section}`}>
          <h2 className="font-bold text-2xl">Why NextLevel Food?</h2>
          <p className="p-2 font-light">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="p-2 font-light">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
