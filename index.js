import "./db";
import { webScraper } from "./webScraper";
import { getResults } from "./results";
let pageUrl = "https://band.us/band/75139994/album/total";

webScraper(pageUrl)
  .then((dataObj) => {
    getResults(dataObj);
  })
  .catch(console.error);
