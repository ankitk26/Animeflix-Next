import mongoose from "mongoose";

const AnimeSchema = new mongoose.Schema(
  {
    mal_id: Number,
    title: String,
    image_url: String,
    title_english: String,
    score: Number,
    watched: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.Anime || mongoose.model("Anime", AnimeSchema);
