import mongoose, { Schema } from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudinary schema
    },
    thumbnail: {
      type: String, //cloudinary schema
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    duration: {
      type: String,
    },
    views: {
      type: Number,
    },
    isPublised: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);
videoSchema.plugin(aggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);
