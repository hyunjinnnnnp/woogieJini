const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://nid.naver.com/nidlogin.login");

  await page.evaluate(
    (id, pw) => {
      document.querySelector("#id").value = "";
      document.querySelector("#pw").value = "";
    },
    naver_id,
    naver_pw
  );

  await page.click(".btn_global");
  await page.waitForNavigation();

  await page.goto("https://naver.com");
})();
