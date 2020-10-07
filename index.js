const puppeteer = require('puppeteer');

async function run(){
const browser = await puppeteer.launch( {
	headless: false
	});
console.log("📦 Fetching Apple EarPods with Lightning Connector - White Latest Price")
const page = await browser.newPage();
await page.goto('https://www.amazon.com/Apple-EarPods-Lightning-Connector-White/dp/B01M0GB8CC/');
const selector = '#priceblock_ourprice'

await page.waitFor(10000) // waitForTimeout since pptr 5.3.0

try {
  await page.waitForSelector(selector)
  const [text] = await page.$$eval(selector, elements => elements.map(el => el.innerText))
  console.log("💰 Today Price is: " + text)
} catch (e) {
  console.error(e)
}
};

run();
