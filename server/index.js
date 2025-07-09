// const puppeteer = require('puppeteer');

// (async () => {
//   // Launch a new browser instance
//   const browser = await puppeteer.launch({
//     headless: false,  // set to false so you can see the browser open
//     defaultViewport: null // opens in full screen
//   });

//   // Open a new page
//   const page = await browser.newPage();

//   // Navigate to the desired website
// //   await page.goto('https://www.amazon.in/');
//     await page.goto('https://www.amazon.in/s?k=s24', { waitUntil: 'domcontentloaded' });

//   await page.waitForSelector('.s-result-item');

//   const items = await page.$$('.s-result-item');



//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];

//     try {
//       const symbol = await item.$eval('.a-price-symbol', el => el.innerText);
//       // const whole = await item.$eval('.a-price-whole', el => el.innerText);
//       const whole = await item.$eval('.a-price-whole', el => el.innerText.replace(/[^0-9]/g, ''));
//         const priceInt = parseInt(whole);
//       if (isNaN(priceInt)) {
//         console.log(`Item ${i + 1}: Invalid price, skipping.`);
//         continue;
//       }

//       const img=await item.$eval('.s-image',el=>el.alt)
//       const imgData = await item.$eval('.s-image', el => ({
//         alt: el.alt || '',
//         src: el.src || ''
//         }));
//         const title = await item.$eval(
//           '.s-title-instructions-style .a-size-base-plus span',
//           el => el.innerText.trim()
//         );

//       const link = await item.$eval(
//       '[data-component-type="s-product-image"] a',
//       (el) => el.href
//       );

//         const results = [];

//          results.push({
//         title,
//         price: whole,
//         currency: symbol,
//         image: imgData,
//         link
//       });


//       // console.log(`Result is ${results} `);
//       console.log('Result is:', results);

//       // console.log(`Item ${i + 1}: Price = ${symbol}${whole} : Title :${link} `);
//     } catch (err) {
//       console.log(`Item ${i + 1}: Price not found`);
//     }
//   }

// })();



const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });

  const page = await browser.newPage();
  await page.goto('https://www.amazon.in/s?k=s24+', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('.s-result-item');

  const results = await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('.s-result-item'));

    return items.map(item => {
      try {
    
        const isSponsored = item.innerText.includes('Sponsored');
        if (isSponsored) return null;

        const symbol = item.querySelector('.a-price-symbol')?.innerText || '';
        const wholeRaw = item.querySelector('.a-price-whole')?.innerText || '';
        const price = wholeRaw.replace(/[^0-9]/g, '');
        const priceInt = parseInt(price);
        if (isNaN(priceInt)) return null;

        const imageEl = item.querySelector('.s-image');
        const image = {
          alt: imageEl?.alt || '',
          src: imageEl?.src || ''
        };

        const title = item.querySelector('.s-title-instructions-style span')?.innerText?.trim();

        const link = item.querySelector('[data-component-type="s-product-image"] a')?.href || '';

        return {
          title,
          price,
          currency: symbol,
          image,
          link
        };
      } catch (err) {
        return null;
      }
    }).filter(Boolean); // remove nulls
  });

  console.log('Results:', JSON.stringify(results, null, 2));

  // Optionally: write to file or close browser
  // await browser.close();
})();
