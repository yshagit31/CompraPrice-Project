const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null
  });

  const page = await browser.newPage();

  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36');


  await page.goto('https://www.amazon.in/s?k=s24+', { waitUntil: 'networkidle2' });

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
