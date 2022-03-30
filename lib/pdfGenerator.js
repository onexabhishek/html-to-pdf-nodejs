const puppeteer = require("puppeteer")

const pdfGenerator = async (link) => {
    const pdfPath = Date.now()
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    
    const page = await browser.newPage();
    await page.goto(link);
    await page.emulateMediaType('screen');
    await page.pdf({
        format: 'a4',
        printBackground: true,
        path: `${pdfPath}.pdf`,
    });
    await browser.close();
    return `/${pdfPath}.pdf`;
}

module.exports = pdfGenerator;