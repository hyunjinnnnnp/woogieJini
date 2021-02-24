import { webScraper } from "./webScraper";
import { getResults } from "./results";
let pageUrl = "https://band.us/band/75139994/album/total";

webScraper(pageUrl)
  .then((result) => getResults(result))
  .catch(console.error);
