const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const api_route = require("./routes/api.route");

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./uploads")));
app.use(bodyParser.json());
app.use(express.json());

api_route(app);

app.listen(port, () => {
    console.log(`API app is running on: http://localhost:${port}`);
});