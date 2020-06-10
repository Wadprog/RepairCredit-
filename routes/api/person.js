const express = require(`express`);
const router = express.Router();
const Person = require("../../models/person");
const Clients = require("../../models/client");
const Level = require("../../utils/consts/Permitions/AccessLevel"); //require("../../utils/consts/Permitions/AccessLevel");
console.log(10);
console.log("aaaaaaaaa" + Level.client);
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

router.post("/", async (req, res) => {
  const {
    firstName,
    lastName,
    middleName,
    dob,
    email,
    username,
    password,
    phoneH,
    phoneW,
    phoneM,
    address,
    referredBy,
    assignedTo,

    monitoringService,
    hasEmail,
    AccessLevel,
    fax,
  } = req.body;
  console.log(req.body);

  try {
    let person = {};
    if (hasEmail || email != "") {
      person = await Person.findOne({ email });

      if (person)
        return res
          .status(409)
          .json({ msg: `This Email is already taken ${email}..` });
    }

    person = new Person({ AccessLevel: AccessLevel });
    if (firstName) person.firstName = firstName.trim();
    if (lastName) person.lastName = lastName.trim();
    if (middleName) person.middleName = middleName.trim();
    if (dob) person.dob = dob;
    if (email) person.email = email.trim();
    if (username) person.username = username.trim();
    if (password) person.password = password.trim();
    if (phoneH) person.phoneH = phoneH.trim();
    if (phoneW) person.phoneW = phoneW.trim();
    if (phoneM) person.phoneM = phoneM.trim();
    if (fax) person.fax = fax.trim();
    if (address) person.address = address.trim();

    await person.save();

    if (AccessLevel < Level.Client) {
      return res.json(person);
    }
    let client = new Clients({
      person: person._id,
    });

    if (referredBy) client.referredBy = referredBy;
    if (assignedTo) client.assignedTo = assignedTo;
    if (monitoringService) client.monitoringService;
    await client.save();

    return res.json({ client });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: `Server error saving people ${error}` });
  }
});

router.post(`/i`, async (req, res) => {
  try {
    if (email === "") console.log("no mail");
    let person = await Persons.findOne({ email: email });

    persorn = new Persons({
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
    let people = await Person.find({
      AccessLevel: { $lte: Level.Afilliate },
    });
    return res.json(people);
  } catch (error) {
    console.log(`Error ${error}`);
    res.status(500).json({
      msg: `The server is crash thus we can't fecth the cowrockers' list ${error}`,
    });
  }
});

module.exports = router;
