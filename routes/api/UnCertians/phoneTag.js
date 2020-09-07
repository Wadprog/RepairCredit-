const express = require(`express`);
const router = express.Router();
const Tags = require("../../../models/phoneTag");

router.get("/", async (req, res) => {
  try {
    let phonetags = await Tags.find();
    return res.json(phonetags);
  } catch (error) {
    console.log(`Error in list phone tag ${error}`);
    return res.json({ msg: `Error in list phone tag ${error}` });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, description } = req.body;
    let phonetags = new Tags({ name, description });
    await phonetags.save();
    return res.json(phonetags);
  } catch (error) {
    console.log(`Error creating new phone tag ${error}`);
    return res.json({ msg: `Error creating new phone tag ${error}` });
  }
});

module.exports = router;
