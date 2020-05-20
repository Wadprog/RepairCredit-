const puppeteer = require("puppeteer");
const USERNAME_SELECTOR = "#txtUsername";
const PASSWORD_SELECTOR = "#txtPassword";
const CTA_SELECTOR = "#imgBtnLogin";
const CODE_SELECTOR = "#FBfbforcechangesecurityanswer_txtSecurityAnswer";
const SUBMIT_SELECTOR = "#FBfbforcechangesecurityanswer_ibtSubmit";
const LINKREPORT = "#dbCreditScore > div.dashboard_box > div:nth-child(4) > a";

exports.scrapper = async ({ username, password, last4 }) => {
  // Create an instance of the chrome browser
  // But disable headless mode !
  let dbObj = {};
  const browser = await puppeteer.launch({
    headless: true,
  });

  // Create a new page
  const page = await browser.newPage();
  try {
    // Configure the navigation timeout
    await page.setDefaultNavigationTimeout(0);
    // Configure the navigation timeout
    await page.goto("https://www.identityiq.com/login.aspx", {
      waitUntil: "load",
      timeout: 0,
    });

    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type(username);
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(password);
    await page.click(CTA_SELECTOR);
    await page.waitForNavigation();

    await page.click(CODE_SELECTOR);
    await page.keyboard.type(last4);
    await page.click(SUBMIT_SELECTOR);

    await page.goto("https://www.identityiq.com/CreditReport.aspx", {
      waitUntil: "load",
      timeout: 0,
    });
    // Bureau  Experian
    await page.waitForXPath(
      `/html/body/form/div[6]/div/div[3]/div[2]/div/div/div[5]/div/transunion-report/div[2]/div[5]/table[2]/tbody/tr[2]/td[3]`
    );
    const [experian] = await page.$x(
      `/html/body/form/div[6]/div/div[3]/div[2]/div/div/div[5]/div/transunion-report/div[2]/div[5]/table[2]/tbody/tr[2]/td[3]`
    );
    const expeHandle = await experian.getProperty(`textContent`);
    const expeValue = await expeHandle.jsonValue();
    //TransUnion
    await page.waitForXPath(
      `/html/body/form/div[6]/div/div[3]/div[2]/div/div/div[5]/div/transunion-report/div[2]/div[5]/table[2]/tbody/tr[2]/td[2]`
    );
    const [elementHandleUnion] = await page.$x(
      `/html/body/form/div[6]/div/div[3]/div[2]/div/div/div[5]/div/transunion-report/div[2]/div[5]/table[2]/tbody/tr[2]/td[2]`
    );
    const propertyHandle = await elementHandleUnion.getProperty(`textContent`);
    const propertyValue = await propertyHandle.jsonValue();
    //Bureau EquiFax
    await page.waitForXPath(
      `/html/body/form/div[6]/div/div[3]/div[2]/div/div/div[5]/div/transunion-report/div[2]/div[5]/table[2]/tbody/tr[2]/td[4]`
    );
    const [equifax] = await page.$x(
      `/html/body/form/div[6]/div/div[3]/div[2]/div/div/div[5]/div/transunion-report/div[2]/div[5]/table[2]/tbody/tr[2]/td[4]`
    );
    const equifaxHandle = await equifax.getProperty(`textContent`);
    const equifaxValue = await equifaxHandle.jsonValue();
    //Print everything

    console.log(
      `TransUnion : ${propertyValue} ---- Experian : ${expeValue} ---- Equifax : ${equifaxValue} `
    );
  } catch (error) {
    console.log(`${error}`);
  }
  await browser.close();
  return dbObj;
};
