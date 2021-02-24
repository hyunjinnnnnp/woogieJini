import puppeteer from "puppeteer";

const wsChromeEndpointurl =
  "ws://127.0.0.1:9222/devtools/browser/a719293d-0995-4220-bed7-a2ccf2a1a037";

function extractItems() {
  const items = [];
  try {
    const extractedElements = document.querySelectorAll(".album img");
    extractedElements.forEach((item) => items.push(item.src));
  } catch (e) {
    console.log(e);
  }
  return items;
}

async function scrapInfiniteScrollItems(
  page,
  extractItems,
  scrollDelay = 1000
) {
  let items = [];
  let storedItems = [];
  try {
    let previousHeight;
    const targetCount = await page.evaluate(
      "document.querySelector('.count').textContent"
    );
    while (items.length < targetCount) {
      items = await page.evaluate(extractItems);
      //items의 내용물 item이 arr안의 storedItem에 없으면 storedItems에 저장
      for (const item of items) {
        if (!storedItems.includes(item)) {
          storedItems.push(item);
        }
      }
      // console.log(storedItems.length);
      previousHeight = await page.evaluate("document.body.scrollHeight");
      await page.evaluate(`window.scrollTo(0, document.body.scrollHeight)`);
      //30초 동안 height값이 증가하지 않으면 false -> 루프 중단
      await page.waitForFunction(
        `document.body.scrollHeight  > ${previousHeight}`
      );
      await page.waitFor(scrollDelay);
    }
    // eslint-disable-next-line no-empty
  } catch (error) {}
  return storedItems;
}

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
    // Configure the navigation timeout
    await page.setDefaultNavigationTimeout(0);
    await page.goto(pageUrl, {
      //새 페이지로 이동할 때 페이지가 로드 된 후 상호작용 시작
      waitUntil: "networkidle0",
    });
    const items = await scrapInfiniteScrollItems(page, extractItems);
    return items;
  } catch (e) {
    console.log(e);
  }
};

export { webScraper };
