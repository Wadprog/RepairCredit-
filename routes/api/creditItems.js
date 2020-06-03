const express = require(`express`);
const router = express.Router();
const CreditItems = require("../../models/creditItems");

const { fillData } = require(`../../controller/creditItems`);

router.get(`/`, async (req, res) => {
  try {
    const creditItems = await CreditItems.find().populate("persorn");
    return res.json(creditItems);
  } catch (error) {
    console.log(error);
  }
});
/*
router.delete(`/`, async (req, res) => {
  try {
    await CreditItems.deleteMany();
    return res.json("ok");
  } catch (error) {
    console.log(error);
  }
});*/

router.post(`/`, fillData);

module.exports = router;
