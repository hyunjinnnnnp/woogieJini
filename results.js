import Image from "./models/Image";

const getResults = async (dataObj) => {
  try {
    const newImage = await Image.create({
      amount: dataObj.amount,
      imgList: dataObj.imgList,
    });
    console.log(`result : ${newImage}`);
  } catch (error) {
    console.log(error);
  }
};

export default getResults;
