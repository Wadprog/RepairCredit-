const Clients = require(`../models/client`);
const CreditItems = require(`../models/creditItems`);
exports.fillData = async (req, res) => {
  try {
    const { client, creditor, data } = req.body;
    const tempClient = await Clients.findById(client);
    if (!tempClient)
      return res.status(404).json({ msg: `Client doesn't exist ${client}..` });
    if (data === null || data.length === 0)
      return res.status(417).json({ msg: `Expectation failed data...` });
    if (!creditor)
      return res.status(417).json({ msg: `Expectation failed  creditor...` });
    let creditItem = new CreditItems({ client, creditor });
    data.map((item) => {
      creditItem.creditBureauData.push(item);
    });
    await creditItem.save();
    return res.json(creditItem);
  } catch (error) {
    console.log(`${error}`);
  }
};
