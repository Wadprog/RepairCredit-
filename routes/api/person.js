const express = require(`express`);
const router = express.Router();
const Persorns = require("../../models/person");
const Clients = require("../../models/client");
let ObjectId = require("mongodb").ObjectID;

//get one client
router.get(`/client/:id`, async (req, res) => {
  try {
    let client = await Clients.findById(req.params.id).populate(`persorn`);
    return res.json(client);
  } catch (error) {
    console.log(`Error ${error}`);
    res.json({
      msg: `The server is crash thus we can't fecth the clients' list ${error}`,
    });
  }
});

// get every clients
router.get(`/`, async (req, res) => {
  try {
    let clients = await Clients.find().populate(`persorn`);

    return res.json(clients);
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

    phones.map(phone => {
      persorn.phones.push(phone);
    });

    await persorn.save();

    if (levelAccess !== "client") return res.json(persorn);
    else {
      clientData.persorn = persorn._id;
      clientData.referredBy = referredBy;
      clientData.assignedTo = assignedTo;
      console.log(`jnjnjasd ${clientData.ssn}`);
      let client = new Clients(clientData);

      monitoringService
        ? monitoringService.map(item => {
            client.monitoringService.add(item);
          })
        : null;

      client.addresses.push(address);
      await client.save();
      return res.json({ persorn, client });
    }
  } catch (error) {
    console.log(`Error creating new employee${error}`);
    res.json({ msg: `Error creating new employee ${error}` });
  }
});

// get one cowrocker
router.get(`/cowrorker/:id`, async (req, res) => {
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

// get every every cowrockers.
router.get(`/cowrokers`, async (req, res) => {
  try {
    let persorns = await Persorns.find({
      $or: [{ levelAccess: "employee" }, { levelAccess: "affiliate" }],
    });
    return res.json(persorns);
  } catch (error) {
    console.log(`Error ${error}`);
    res.json({
      msg: `The server is crash thus we can't fecth the cowrockers' list ${error}`,
    });
  }
});

module.exports = router;
