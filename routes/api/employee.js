const express = require(`express`);
const router = express.Router();

const { getEmployees, postEmployee } = require(`../../controller/employee`);

router.post(`/`, fillData);

module.exports = router;
