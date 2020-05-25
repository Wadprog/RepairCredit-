const express = require("express");
const connectDB = require("./config/db");

const cors = require("cors");

//using express
const app = express();
app.use(express.json({ extended: false }));
// setting the aplication for cors errors.
app.use(cors());
// connection to database;
connectDB();

/*app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With,x-auth-token, Content-Type, Accept, Authorization'
	);
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});*/

//use the routes

app.use("/api/client", require("./routes/api/client"));
app.use("/api/employee", require("./routes/api/employee"));
//app.use("/api/employee", require("./routes/api/employee"));
//app.use("/api/afilliate", require("./routes/api/afiliate"));

// Serve static assets in production
/*if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}*/
const PORT = process.env.Port || 5000;
app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
