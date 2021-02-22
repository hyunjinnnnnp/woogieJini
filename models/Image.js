import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  amount: {
    type: Number,
  },
  imgList: {
    type: [String],
  },
});

const model = mongoose.model("Image", ImageSchema);

export default model;
