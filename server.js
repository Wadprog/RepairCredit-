const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const pdf = require('html-pdf');
const pdfTemplate = require('./utils/pdf-documents');

//using express
const app = express();
app.use(express.json({ extended: false }));
// setting the aplication for cors errors.
app.use(cors());

// connection to database;
connectDB();

//POST - Pdf generation and fetching data
app.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
    if (err) {
      return console.log('Error');
    }
    res.send(Promise.resolve());
  });
});
//GET- send the generate pdf to the client
app.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});
//use the routes

app.use('/api/client', require('./routes/api/client'));
app.use('/api/phoneTag', require('./routes/api/phoneTag'));
app.use('/api/user', require('./routes/api/user'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/credit-items', require('./routes/api/creditItems'));
//app.use("/api/employee", require("./routes/api/employee"));
app.use('/api/person', require('./routes/api/person'));
app.use('/api/customer', require('./routes/api/customer'));
app.use('/api/monitoringService', require('./routes/api/monitoringService'));

// Serve static assets in production
//if (process.env.NODE_ENV === "production") {
const path = require('path');
app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
//}
const PORT = process.env.Port || 5000;
app.listen(PORT, () => console.log(`Connected with success`));
