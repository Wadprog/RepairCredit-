const Employees = require("../models/employee");

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employees.find();
    return res.json(employees);
  } catch (error) {
    console.log(`Error ${error}`);
    res.json({ msg: `Error creating new employee ${error}` });
  }
};

exports.postEmployee = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      ssn,
      dob,
      email,
      levelAccess,
      username,
      password,
      phones,
      address,
    } = req.body;

    let employee = await Employees.findOne({ username: username });
    if (employee)
      return res
        .status(409)
        .json({ msg: `This username is already exist ${username}..` });

    employee = new Employees({
      firstname,
      lastname,
      ssn,
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
};
