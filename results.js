import Image from "./models/Image";
import "./db";

export const getResults = async (storedItems) => {
  try {
    const newImage = await Image.create({
      amount: storedItems.length,
      imgSrc: storedItems,
    });
    console.log(newImage);
  } catch (error) {
    console.log(error);
  }
};
