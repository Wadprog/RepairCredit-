const express = require(`express`);
const router = express.Router();
const MoniteringService = require("../../models/monitoringService");

router.get(`/`, async (req, res) => {
  try {
    const moniteringServices = await MoniteringService.find();
    return res.json(moniteringServices);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error });
  }
});

router.get(`/:id`, async (req, res) => {
  try {
    const moniteringService = await MoniteringService.findById(req.params.id);
    return res.json(moniteringService);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error });
  }
});

router.post(`/`, async (req, res) => {
  try {
    let monitoringService;

    /*= await MoniteringService.find({
      name: req.body.name,
    });
    if (monitoringService)
      return res
        .status(400)
        .json({ msg: `Monitoring service already exists${monitoringService}` });*/

    monitoringService = new MoniteringService(req.body);
    await monitoringService.save();
    return res.json(monitoringService);
  } catch (error) {}
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
module.exports = router;
