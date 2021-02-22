import puppeteer from "puppeteer";

const wsChromeEndpointurl =
  "ws://127.0.0.1:9222/devtools/browser/6098439b-9933-4663-b9e3-a5a936979c31";
let dataObj = {};

const webScraper = async (pageUrl) => {
  try {
    const browser = await puppeteer.connect({
      browserWSEndpoint: wsChromeEndpointurl,
    });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1080,
      height: 1080,
    });
    await page.goto(pageUrl, {
      waitUntil: "networkidle0", //새 페이지로 이동할 때 페이지가 로드 된 후 상호작용 시작
    });
    const imgList = await page.evaluate(() => {
      const objList = document.querySelectorAll(".album img");
      let img = [];
      objList.forEach((item) => {
        img.push(item.src);
      });

      return img;
    });
    dataObj = {
      amount: imgList.length,
      imgList,
    };
  } catch (e) {
    console.log(e);
  }

  return dataObj;
};
// webScraper();

export { webScraper, dataObj };
