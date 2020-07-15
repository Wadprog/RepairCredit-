/*const puppeteer = require("puppeteer");
const scrollPageToBottom = require("puppeteer-autoscroll-down");
const USERNAME_SELECTOR = "#txtUsername";
const PASSWORD_SELECTOR = "#txtPassword";
const CTA_SELECTOR = "#imgBtnLogin";
const CODE_SELECTOR = "#FBfbforcechangesecurityanswer_txtSecurityAnswer";
const SUBMIT_SELECTOR = "#FBfbforcechangesecurityanswer_ibtSubmit";
*/

const puppeteer = require("puppeteer");
const scrollPageToBottom = require("puppeteer-autoscroll-down");
const USERNAME_SELECTOR = "#txtUsername";
const PASSWORD_SELECTOR = "#txtPassword";
const CTA_SELECTOR = "#imgBtnLogin";
const CODE_SELECTOR = "#FBfbforcechangesecurityanswer_txtSecurityAnswer";
const SUBMIT_SELECTOR = "#FBfbforcechangesecurityanswer_ibtSubmit";

exports.Scrapper = async function (username, password, last4) {
  // Create an instance of the chrome browser
  // But disable headless mode !
  let dbObj = {};
  const browser = await puppeteer.launch({
    headless: true,
    width: 2500,
    height: 2500,
    args: ["--no-sandbox"],
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

    await page.waitForSelector(
      `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(9) > table.rpt_content_table.rpt_content_header.rpt_table4column > tbody > tr:nth-child(2) > td:nth-child(2)`
    );
    let score = await page.evaluate(() => {
      let transunion = document.querySelector(
        `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(9) > table.rpt_content_table.rpt_content_header.rpt_table4column > tbody > tr:nth-child(2) > td:nth-child(2)`
      ).innerText;
      let experian = document.querySelector(
        `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(9) > table.rpt_content_table.rpt_content_header.rpt_table4column > tbody > tr:nth-child(2) > td:nth-child(3)`
      ).innerText;
      let equifax = document.querySelector(
        `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(9) > table.rpt_content_table.rpt_content_header.rpt_table4column > tbody > tr:nth-child(2) > td:nth-child(4)`
      ).innerText;
      / Returning an object filled with the scraped data /;
      let obj = {};

      obj.transunion = transunion;
      obj.experian = experian;
      obj.equifax = equifax;

      return obj;
    });

    //Bureau EquiFax
    await autoScroll(page);
    await page.waitForSelector(
      `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat`
    );
    await autoScroll(page);
    let creditReport = await page.evaluate(() => {
      let credits = document.querySelectorAll(
        `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat`
      );
      let creditItems = [];
      let i = 0;
      credits.forEach(creditElement => {
        i++;
        let item = {};
        let bureauData = [];
        try {
          item.creditor = document.querySelector(
            `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > div`
          ).innerText;
          for (let a = 2; a < 5; a++) {
            let name = "";
            let bureau = {};
            try {
              let account = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(2) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let detail = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(4) > td:nth-child(${a}) > ng-repeat > ng`
              ).innerText;

              let bureauCode = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(5) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let accountStatus = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(6) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let accountType = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(3) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let payment = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(7) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let dateOpened = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(8) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let balance = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(9) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let terms = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(10) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let highCredit = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(11) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let creditLimit = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(12) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let pastDue = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(13) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let paymentStatus = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(14) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let lastReported = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(15) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let dateLastActive = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(16) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let dateOfLastPayment = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(17) > td:nth-child(${a}) > ng-repeat`
              ).innerText;
              if (a === 2) {
                name = "transUnion";
              } else if (a === 3) {
                name = "experian";
              } else {
                name = "equifax";
              }
              bureau.name = name;
              bureau.account = account;
              bureau.accountStatus = accountStatus;
              bureau.accountType = accountType;
              bureau.accountTypeDetail = detail;
              bureau.bureauCode = bureauCode;
              bureau.payment = payment;
              bureau.dateOpened = dateOpened;
              bureau.balance = balance;
              bureau.terms = terms;
              bureau.highCredit = highCredit;
              bureau.creditLimit = creditLimit;
              bureau.pastDue = pastDue;
              bureau.paymentStatus = paymentStatus;
              bureau.lastReported = lastReported;
              bureau.dateLastActive = dateLastActive;
              bureau.dateOfLastPayment = dateOfLastPayment;
              bureauData.push(bureau);
            } catch (error) {
              console.log(error);
            }
          }
          item.creditData = bureauData;
        } catch (exception) {}
        creditItems.push(item);
      });
      return creditItems;
    });
    dbObj = creditReport;
    dbObj.score = score;
    console.log(dbObj);
  } catch (error) {
    console.log(`${error}`);
  }
  await browser.close();
  return dbObj;

  /*
  // Create an instance of the chrome browser
  // But disable headless mode !
  let dbObj = {};
  const browser = await puppeteer.launch({
    headless: true,
    width: 2500,
    height: 2500,
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
    //Bureau EquiFax
    await autoScroll(page);
    await page.waitForSelector(
      `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat`
    );
    await autoScroll(page);
    let creditReport = await page.evaluate(() => {
      let credits = document.querySelectorAll(
        `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat`
      );
      let creditItems = [];
      let i = 0;
      credits.forEach(creditElement => {
        i++;
        let item = {};
        let bureauData = [];
        try {
          item.creditor = document.querySelector(
            `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > div`
          ).innerText;
          for (let a = 2; a < 5; a++) {
            let name = "";
            let bureau = {};
            try {
              let account = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(2) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let detail = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(4) > td:nth-child(${a}) > ng-repeat > ng`
              ).innerText;

              let bureauCode = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(5) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let accountStatus = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(6) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let accountType = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(3) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let payment = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(7) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let dateOpened = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(8) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let balance = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(9) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let terms = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(10) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let highCredit = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(11) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let creditLimit = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(12) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let pastDue = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(13) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let paymentStatus = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(14) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let lastReported = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(15) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let dateLastActive = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(16) > td:nth-child(${a}) > ng-repeat`
              ).innerText;

              let dateOfLastPayment = document.querySelector(
                `#ctrlCreditReport > transunion-report > div.ng-binding.ng-scope > div:nth-child(15) > div:nth-child(3) > address-history > div > ng-repeat:nth-child(${i}) > ng-include > table > tbody > tr > td > ng-include > table > tbody > tr:nth-child(17) > td:nth-child(${a}) > ng-repeat`
              ).innerText;
              if (a === 2) {
                name = "transUnion";
              } else if (a === 3) {
                name = "experian";
              } else {
                name = "equifax";
              }
              bureau.name = name;
              bureau.account = account;
              bureau.accountStatus = accountStatus;
              bureau.accountType = accountType;
              bureau.accountTypeDetail = detail;
              bureau.bureauCode = bureauCode;
              bureau.payment = payment;
              bureau.dateOpened = dateOpened;
              bureau.balance = balance;
              bureau.terms = terms;
              bureau.highCredit = highCredit;
              bureau.creditLimit = creditLimit;
              bureau.pastDue = pastDue;
              bureau.paymentStatus = paymentStatus;
              bureau.lastReported = lastReported;
              bureau.dateLastActive = dateLastActive;
              bureau.dateOfLastPayment = dateOfLastPayment;
              bureauData.push(bureau);
            } catch (error) {
              console.log(error);
            }
          }
          item.creditData = bureauData;
        } catch (exception) {}
        creditItems.push(item);
      });
      return creditItems;
    });
    dbObj = creditReport;
  } catch (error) {
    console.log(`${error}`);
  }
  await browser.close();
  return dbObj;
  */
};
/*
async function autoScroll(page) {
  try {
    await page.evaluate(async () => {
      try {
        await new Promise((resolve, reject) => {
          var totalHeight = 0;
          var distance = 1000;
          var timer = setInterval(() => {
            var scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              resolve();
            }
          }, 500);
        });
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
*/
async function autoScroll(page) {
  try {
    await page.evaluate(async () => {
      try {
        await new Promise((resolve, reject) => {
          var totalHeight = 0;
          var distance = 1000;
          var timer = setInterval(() => {
            var scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              resolve();
            }
          }, 500);
        });
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
