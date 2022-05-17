import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox'],
    });
    page = await browser.newPage();
  });

  it("/ contains Driessen in header", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("header");
    const text = await page.$eval("header", (el) => el.innerHTML);
    expect(text).toContain("Driessen");

  });


  describe('/Claims', () => { 
      it("should contain h3 tag with 'Declaraties'", async () => {
        await page.goto("http://localhost:3000/claims");
        await page.waitForSelector("h3");
        const text = await page.$eval("h3", (el) => el.innerHTML);
        expect(text).toBe("Declaraties");
      })

    
    /* It will work when we have testing environment */
    //   it("should contain atleast one claim", async () => {
    //     await page.goto("http://localhost:3000/claims");
    //     await page.waitForSelector("div.MuiDataGrid-row");
    //     const entryId = await page.$eval('div.MuiDataGrid-row', (el) => {
    //         return el.getAttribute('data-id')
    //     });
    //     // Regular expression to check if string is a valid UUID
    //     const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
    //     expect(regexExp.test(entryId)).toBeTruthy();
    //   })

    //   it("claim should be clickable", async () => {
    //     await page.goto("http://localhost:3000/claims");
    //     await page.waitForSelector("div.MuiDataGrid-row");
    //     const entryEl = await page.$('div.MuiDataGrid-row');

    //     console.log("entryel", entryEl)
    //     await entryEl.click({clickCount: 2});

    //     await page.waitForSelector("h6");
    //     expect(page.url()).toContain("/claims/");        
    //   })
   })

  afterAll(() => browser.close());
});