const express = require(`express`);
const router = express.Router();
const Employees = require("../../models/employee");

router.get(`/:id`, async (req, res) => {
  try {
    const employees = await Employees.findById(req.params.id);
    return res.json(employees);
  } catch (error) {
    console.log(`Error ${error}`);
    res.json({ msg: `Error creating new employee ${error}` });
  }
});

router.get(`/`, async (req, res) => {
  try {
    const employees = await Employees.find();
    return res.json(employees);
  } catch (error) {
    console.log(`Error ${error}`);
    res.json({ msg: `Error creating new employee ${error}` });
  }
});
router.post(`/`, async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      dob,
      email,
      levelAccess,
      username,
      password,
      phones,
      address,
    } = req.body;

    let employee = await Employees.findOne({ email: email });
    if (employee)
      return res
        .status(409)
        .json({ msg: `This Email is already exist ${email}..` });

    employee = new Employees({
      firstname,
      lastname,
      dob,
      email,
      levelAccess,
      username,
      password,
    });

    employee.addresses.push(address);
    phones.map((phone) => {
      employee.phones.push(phone);
    });

    await employee.save();
    return res.json(employee);
  } catch (error) {
    console.log(`Error creating new employee${error}`);
    res.json({ msg: `Error creating new employee ${error}` });
  }
});

module.exports = router;
