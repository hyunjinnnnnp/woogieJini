const puppeteer = require("puppeteer");
const wsChromeEndpointurl =
  "ws://127.0.0.1:9222/devtools/browser/fc7c9083-47ac-4a82-b0a3-e5526dec80a4";

const crawler = async () => {
  try {
    // const browser = await puppeteer.launch({
    //   headless: false,
    //   //   args: ["--window-size=1920, 1080"],
    //   slowMo: 50,

    //   // 크롬 자동 설치시 설치되는 경로
    //   // Puppeteer 사용하지 않고 기존 크롬 사용자 정보를 사용 auth 인증 패스하기 위함
    //   executablePath:
    //     "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",

    //   // 크롬 사용자 정보를 가지는 경로 //크롬 디렉토리
    //   userDataDir: "C:/Users/Sujin/AppData/Local/Google/Chrome/User Data",
    // });
    const browser = await puppeteer.connect({
      browserWSEndpoint: wsChromeEndpointurl,
    });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1080,
      height: 1080,
    });
    await page.goto("https://band.us/band/75139994/album/total", {
      waitUntil: "networkidle0", //새 페이지로 이동할 때 페이지가 로드 된 후 상호작용 시작
    });
    // await page.waitForSelector("#login_list li:nth-child(3) a");
    // await page.evaluate(() => {
    //   document.querySelector("#login_list li:nth-child(3) a").click();
    // });
    // await page.waitForSelector(".id_area input[name=id]");
    // await page.evaluate(() => {
    //   document.querySelector(".id_area input[name=id]").value = '';
    //   document.querySelector(".pw_area input[name=pw]").value = '';
    //   document.querySelector(".login_form input[type=submit]").click();
    // });
    // await page.waitForSelector(".album");
    // await page.evaluate(() => {
    //   document.querySelector(".album img").click();
    // });
  } catch (e) {
    console.log(e);
  }
};
crawler();
