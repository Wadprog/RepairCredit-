const express = require(`express`);
const router = express.Router();

const { fillData } = require(`../../controller/creditItems`);

router.post(`/`, fillData);

module.exports = router;

