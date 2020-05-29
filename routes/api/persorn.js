const express = require(`express`);
const router = express.Router();
const Persorns = require("../../models/persorn");
const Clients = require("../../models/client");
let ObjectId = require("mongodb").ObjectID;

// get every one affiliate or employee
router.get(`/person/:id`, async (req, res) => {
  try {
    let persorns = await Persorns.findById(req.params.id);
    return res.json(persorns);
  } catch (error) {
    console.log(`Error ${error}`);
    res.json({
      msg: `The server is crash thus we can't fecth data of the ${
        req.params.levelAccess === "employee" ? "employee" : "afilliate"
      }' list ${error}`,
    });
  }
});

// get every every affiliate or employee
router.get(`/cowrokers`, async (req, res) => {
  try {
    let persorns = await Persorns.find({ levelAccess: !"Client" });
    return res.json(persorns);
  } catch (error) {
    console.log(`Error ${error}`);
    res.json({
      msg: `The server is crash thus we can't fecth data of the ${
        req.params.levelAccess === "employee" ? "employee" : "afilliate"
      }' list ${error}`,
    });
  }
});

router.get(`/:id`, async (req, res) => {
  try {
    const persorns = await Persorns.findById(req.params.id);
    return res.json(persorns);
  } catch (error) {
    console.log(`Error ${error}`);
    res.json({
      msg: `The server is crash thus we can't fecth the data of the persorn ${error}`,
    });
  }
});

//get one client
router.get(`/client/:id`, async (req, res) => {
  try {
    Persorns.aggregate([
      {
        $match: {
          _id: ObjectId(req.params.id),
        },
      },
      {
        $lookup: {
          from: "clients",
          localField: "_id",
          foreignField: "persorn",
          as: "Clients",
        },
      },
      {
        $unwind: "$Clients",
      },
    ])
      .exec()
      .then((response) => {
        return res.json(response);
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (error) {
    console.log(`Error ${error}`);
    res.json({
      msg: `The server is crash thus we can't fecth the clients' list ${error}`,
    });
  }
});

// get every clients
router.get(``, async (req, res) => {
  try {
    Persorns.aggregate([
      {
        $match: {
          levelAccess: "client",
        },
      },
    ])
      .exec()
      .then((response) => {
        return res.json(response);
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (error) {
    console.log(`Error ${error}`);
    res.json({
      msg: `The server is crash thus we can't fecth the clients' list ${error}`,
    });
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
      referredBy,
      assignedTo,
      clientData,
      monitoringService,
    } = req.body;

    let persorn = await Persorns.findOne({ email: email });
    if (persorn)
      return res
        .status(409)
        .json({ msg: `This Email is already exist ${email}..` });

    persorn = new Persorns({
      firstname,
      lastname,
      dob,
      email,
      levelAccess,
      username,
      password,
    });

    persorn.addresses.push(address);
    phones.map((phone) => {
      persorn.phones.push(phone);
    });

    await persorn.save();

    if (!levelAccess === "client") return res.json(persorn);

    clientData.persorn = persorn._id;
    clientData.referredBy = referredBy;
    clientData.assignedTo = assignedTo;
    console.log(`jnjnjasd ${clientData.ssn}`);
    let client = new Clients(clientData);

    monitoringService
      ? monitoringService.map((item) => {
          client.monitoringService.add(item);
        })
      : null;

    await client.save();
    return res.json({ persorn, client });
  } catch (error) {
    console.log(`Error creating new employee${error}`);
    res.json({ msg: `Error creating new employee ${error}` });
  }
});

module.exports = router;
