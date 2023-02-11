const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const url = "mongodb://localhost/emailTestingDB";
const router = require("./Routes/EmailRoutes");
const imagerouter = require("./Routes/Imagerouter");

const port = 3030;

const app = express();
mongoose.connect(url).then(() => {
	console.log("connected");
});

app.use(express.json());
app.use(cors());

app.use("/api", router);
app.use("/api/image", imagerouter);

app.listen(port, () => {
	console.log(`listenning on ${port}`);
});
