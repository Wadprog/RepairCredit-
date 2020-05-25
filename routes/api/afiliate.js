const express = require(`express`);
const router = express.Router();

const { addData } = require(`../../controller/afilliate`);

router.post(`/afilliate`, addData);

module.exports = router;

