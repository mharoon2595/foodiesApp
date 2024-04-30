"use server";
import foodieSchemaExport from "@/models/foodies";
import slugify from "slugify";
import xss from "xss";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const foodie = foodieSchemaExport;

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

export const getMeals = async () => {
  try {
    const data = await foodie.find({});
    const results = await data.map((x) => x.toObject({ getters: true }));
    return results;
  } catch (err) {
    return err.message;
  }
};

export const getMeal = async (param) => {
  try {
    const data = await foodie.findOne({ slug: param });
    return data.toObject({ getters: true });
  } catch (err) {
    return err.message;
  }
};

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const { title, summary, instructions, creator, creator_email, image, slug } =
    meal;

  let newFoodie = new foodie({
    slug,
    title,
    summary,
    instructions,
    creator,
    creator_email,
    image,
  });
  try {
    await newFoodie.save();
    return "Document saved successfully.";
  } catch (err) {
    if (err.name === "ValidationError") {
      let errors = {};
      for (let field in err.errors) {
        errors[field] = err.errors[field].message;
      }
      return errors;
    } else {
      return err.message;
    }
  }
}
