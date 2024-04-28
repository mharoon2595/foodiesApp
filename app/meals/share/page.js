"use client";
import ImagePicker from "@/components/ImagePicker";
import classes from "./page.module.css";
import { sendMealData } from "@/lib/actions";
import FormSubmit from "@/components/FormSubmit";
import { useFormState } from "react-dom";
import { useContext, useEffect } from "react";
import { FoodContext } from "@/store/context";
import swal from "sweetalert";

export default function ShareMealPage() {
  const foodStore = useContext(FoodContext);

  useEffect(() => {
    foodStore.cidFn("");
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      if (!foodStore.cid) {
        throw new Error("Please choose an image for cloud upload");
      }

      formData.append("image", foodStore.cid);
      const res = await sendMealData(formData);
      if (res === "Invalid input") {
        throw new Error("Please check if all the fields are filled correctly");
      }
    } catch (err) {
      swal("Oops!", err.message, "error");
    }
  };

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label={"Your image"} name={"image"} />
          <p className={classes.actions}>
            <FormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
