const puppeteer = require('puppeteer');
var emoji = require('node-emoji');

async function run(){
const browser = await puppeteer.launch( {
	headless: true //make sure the browser is running on headless mode
	});
console.log(emoji.emojify(":package: Fetching Apple EarPods with Lightning Connector - White Latest Price"));
const page = await browser.newPage();
	
//Wait till network becomes Idle
await page.goto('https://www.amazon.com/Apple-EarPods-Lightning-Connector-White/dp/B01M0GB8CC/', { waitUntil: 'networkidle2' });
blockingWait(5);
const selector = '#priceblock_ourprice'

// Wait for 10 Seconds
await page.waitForTimeout(10000);

try {
  await page.waitForSelector(selector)
  const [text] = await page.$$eval(selector, elements => elements.map(el => el.innerText))
  console.log(emoji.emojify(":moneybag: Today Price is: " + text));
} catch (e) {
  console.error(e)
}
//Close the Browser
await browser.close(); 	
};

// Init Wait Function
function blockingWait(seconds) {
  //simple blocking technique (wait...)
  var waitTill = new Date(new Date().getTime() + seconds * 1000);
  while(waitTill > new Date()){}

}


run();
