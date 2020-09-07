const express = require(`express`);
const cheerio = require("cheerio");
const router = express.Router();
const CreditItems = require("../../models/creditItems");
const Client = require("../../models/client");
const { Scrapper } = require("../../controller/scrappes/identityIq");
const { fillData } = require(`../../controller/creditItems`);

router.get(`/`, async (req, res) => {
  try {
    const creditItems = await CreditItems.find().populate("person");
    return res.json(creditItems);
  } catch (error) {
    console.log(error);
  }
});

router.get(`/:id`, async (req, res) => {
  try {
    const creditItem = await CreditItems.findById(req.params.id).populate(
      "person"
    );
    return res.json(creditItem);
  } catch (error) {
    console.log(error);
  }
});

router.get(`/person/:id`, async (req, res) => {
  console.log("I feel the call ");
  try {
    /*let creditItems = await CreditItems.find({
      person: req.params.id,
    }).populate("person");
    const temp = creditItems;
    creditItems = [];
    creditItems.push(temp);
    if (creditItems.length > 0) return res.json(creditItems);
*/
    let client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ msg: "Client does not exist" });

    let [creditItem] = await CreditItems.find({ person: req.params.id });
    console.log(creditItem);
    if (!creditItem) {
      const { userName, password, code } = client.monitoringService;
      const data = await Scrapper(userName, password, code);
      creditItem = new CreditItems({ person: req.params.id });
      data.map(item => {
        creditItem.creditBureauData.push(item);
      });
      await creditItem.save();
    }

    return res.json(creditItem);
  } catch (error) {
    console.log(error);
  }
});

router.get(`/all/person/:id`, async (req, res) => {
  console.log("I feel the call ");
  try {
    let client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ msg: "Client does not exist" });

    let creditItems = await CreditItems.find({ person: req.params.id });
    console.log(creditItems);
    if (!creditItems) {
      const { userName, password, code } = client.monitoringService;
      const data = await Scrapper(userName, password, code);
      creditItems = new CreditItems({ person: req.params.id });
      data.map(item => {
        creditItem.creditBureauData.push(item);
      });
      await creditItem.save();
    }

    return res.json(creditItems);
  } catch (error) {
    console.log(error);
  }
});

router.post(`/manual`, async (req, res) => {
  const { monitoringService, htmlData } = req.body;
  manualScrapping(htmlData, monitoringService, res);
});

router.post(`/`, fillData);

const manualScrapping = (html, monitoringService, res) => {
  try {
    const $ = cheerio.load(html);
    if (monitoringService.includes("mart")) {
      //Getting the scores:
      const scoreRows = $(".crTableHeader").parent().next();
      const creditBureauScoreValues = getScoresByBureau(scoreRows, $);
      console.log(creditBureauScoreValues);

      console.log("SmartCredit");
      return res.json({ msg: "Good" });
    } else {
      const scores = $(".crTableHeader");
      console.log(scores.html());
      return res.json({ msg: "Good" });
    }
    const paragraph = $(".crTableHeader");
    console.log(paragraph.html());
  } catch (error) {
    console.log(error);
  }
};

const getScoresByBureau = (socres, $) => {
  const creditBureaus = ["tranunion", "experian", "equifax"];
  const creditBureauScoreValues = {
    tranunion: "",
    experian: "",
    equifax: "",
  };

  const scoreRows = $(".crTableHeader").parent().next();
  const scores = scoreRows.find("td");
  scores.each((idx, el) => {
    if (idx > 0 && idx < 4) {
      const item = $(el).text();
      creditBureauScoreValues[creditBureaus[idx - 1]] = item;
    }
  });
  return creditBureauScoreValues;
};
module.exports = router;
