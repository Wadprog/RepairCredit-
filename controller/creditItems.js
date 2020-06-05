const Persorns = require(`../models/person`);
const CreditItems = require(`../models/creditItems`);
const { Scrapper } = require("./scrappes/identityIq");

exports.fillData = async (req, res) => {
  try {
    const { persorn, username, password, code } = req.body;
    const tempPersorn = await Persorns.findById(persorn);
    if (!tempPersorn)
      return res
        .status(404)
        .json({ msg: `persorn doesn't exist ${persorn}..` });
    const data = await Scrapper(username, password, code);
    let creditItem = new CreditItems({ persorn });
    let i = 0;
    data.map((item) => {
      creditItem.creditBureauData.push(item);
      item.creditData.map((a) => {
        creditItem.creditBureauData[i].creditData.push(a);
      });
      i++;
    });
    await creditItem.save();
    return res.json(creditItem);
  } catch (error) {
    console.log(`${error}`);
  }
};
