const express = require(`express`);
const router = express.Router();
const Client = require("../../models/client");

//const { fillData } = require(`../../controller/creditItems`);
//router.post(`/`, fillData);

/*----------------------------------------------------------
                         Routes||||||||||||||||||||||||||||
------------------------------------------------------------*/

//@routes get api/client/
//@desc get all client route
//@desc access public temp=> employee acess level
router.get("/", async (req, res) => {
  try {
    let clients = await Client.find();
    res.json(clients);
  } catch (error) {
    console.log(`Could not find any get all client`);
    res.json({ msg: "Server error ${error}" });
  }
});

//@routes get api/client/:id
//@desc Get  a  Client by id route
//@desc access public temp employee acess level

router.get("/:id", async (req, res) => {
  try {
    let client = await Client.findById(req.params.id).populate(["person"]);

    if (!client) res.status(404).json({ msg: "This client does not exist" });
    return res.json(client);
  } catch (error) {
    console.log(`Could not get this client with id: ${req.params.id}`);
    res.json({ msg: "Server error ${error}" });
  }
});
//@routes post api/Client/
//@desc Create new  Client route
//@desc access public temp
router.post("/", async (req, res) => {
  try {
    let client = new Client(req.body);
    await client.save();
    return res.json(client);
  } catch (error) {
    console.log(`Error creating new client`);
    res.json({ msg: `Server error ${error}` });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let client = await Client.findById(id);
    if (!client)
      res.status(404).json({ msg: "Cannot Edit none- existing client" });

    const modified = [];

    if (req.body.moniteringService) {
      console.log("we are entering the mServ");
    }

    Object.keys(req.body).forEach(field => {
      const { body } = req;
      if (!fieldEmptyOrEqual(field, client, body)) {
        console.log("new Field not mServ");
      }
    });

    await client.save();

    res.json({ modified, client });
  } catch (error) {
    console.log(`Error updating client ${error}`);
    return res.status(400).json({ error });
  }
});

module.exports = router;

const fieldEmptyOrEqual = (field, model, data) => {
  return model[field] === data[field] || data[field] === "";
};
