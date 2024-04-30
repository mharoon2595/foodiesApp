import { Schema, model, models } from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

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
