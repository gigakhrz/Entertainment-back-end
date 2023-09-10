import { Schema, model } from "mongoose";

const entertainmentSchema = new Schema({
  title: String,
  thumbnail: {
    trending: {
      small: String,
      large: String,
    },
    regular: {
      small: String,
      medium: String,
      large: String,
    },
  },
  year: Number,
  category: String,
  rating: String,
  isBookmarked: Boolean,
  isTrending: Boolean,
});

const Entertainment = model("Entertainment", entertainmentSchema);

export default Entertainment;
