const Persons = require(`../models/person`);
const CreditItems = require(`../models/creditItems`);
const { Scrapper } = require("./scrappes/identityIq");

exports.fillData = async (req, res) => {
  try {
    const { person, username, password, code } = req.body;
    const tempPerson = await Persons.findById(person);
    if (!tempPerson)
      return res
        .status(404)
        .json({ msg: `person doesn't exist ${person}..` });
    const data = await Scrapper(username, password, code);
    let creditItem = new CreditItems({ person });
    let i = 0;
    data.map((item) => {
      creditItem.creditBureauData.push(item);
     /* item.creditData.map((a) => {
        creditItem.creditBureauData[i].creditData.push(a);
      });*/
      i++;
    });
    await creditItem.save();
    return res.json(creditItem);
  } catch (error) {
    console.log(`${error}`);
    return re.status(500).json({msg:error})
  }
};
