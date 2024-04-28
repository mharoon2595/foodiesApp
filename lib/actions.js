"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const validationFn = (text) => {
  if (!text || text.trim() === "") {
    return true;
  }
};

export async function sendMealData(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    image: formData.get("image"),
  };

  if (
    validationFn(meal.title) ||
    validationFn(meal.summary) ||
    validationFn(meal.instructions) ||
    validationFn(meal.creator) ||
    !meal.creator_email.includes("@")
  ) {
    return "Invalid input";
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
