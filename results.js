import Image from "./models/Image";

export const getResults = async (dataObj) => {
  try {
    const newImage = await Image.create({
      amount: dataObj.amount,
      imgList: dataObj.imgList,
    });
    console.log(newImage);
  } catch (error) {
    console.log(error);
  }
};
