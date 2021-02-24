import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  amount: {
    type: Number,
  },
  imgSrc: {
    type: [String],
    required: true,
  },
});

const model = mongoose.model("Image", ImageSchema);
//"Image"라는 이름이고 ImageSchema형식을 따를 것이야
export default model;
