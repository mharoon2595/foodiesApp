import { Schema, model, models } from "mongoose";
import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.inzlklw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Connected!");
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
})();

const foodieSchema = new Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  creator_email: {
    type: String,
    required: true,
  },
});

foodieSchema.plugin(mongooseUniqueValidator);

const foodieSchemaExport = models.foodie || model("foodie", foodieSchema);

export default foodieSchemaExport;
