const scrapper = require(`./scrappeToIdentityIQ`);
const { fillData } = require(`../controller/creditItems`);
const { getClients } = require(`../controller/client`);

const searchFill = ({
  username,
  password,
  last4,
  monitoringService: { name },
}) => {
  const data = scrapper(username, password, last4, name);
  let req = {},
    res = {};
  const { client, creditor, ...rest } = data;
  req.body.data = rest;
  req.body.client = client;
  req.body.creditor = creditor;

  fillData(req, res);
};

const searchFillAll = () => {
  const clients = getClients();
  clients.map((client) => {
    searchFill(client);
  });
};
