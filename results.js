import Image from "./models/Image";
import mongoose from "mongoose";
import "./db";

export const getResults = async (storedItems) => {
  try {
    Image.find({}, function (error, imageList) {
      return imageList;
    }).then((imageList) => {
      //db에 저장된 이미지가 없을 경우
      if (imageList == "") {
        const newImages = Image.create({
          amount: storedItems.length,
          imgSrc: storedItems,
        }); //save() 해줘야함??
        return newImages.catch((error) => console.log(error));
      }
      const { amount, imgSrc } = storedItems;
      const dbId = imageList[0]._id;
      const dbAmount = imageList[0].amount;
      const dbImages = imageList[0].imgSrc;

      let catchDifference = false;

      if (dbAmount !== amount) {
        catchDifference = true;
      } else {
        dbImages.forEach((img, i) => {
          //???
          if (img !== imgSrc[i]) catchDifference = true;
        });
      }

      if (catchDifference) {
        mongoose.set("useFindAndModify", false);
        return Image.findOneAndUpdate(
          { _id: dbId },
          {
            amount: storedItems.length,
            imgSrc: storedItems,
          }
        );
      }
    });
  } catch (error) {
    console.log(error);
  }
};
