const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createServer } = require("http");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 4923;
const server = createServer(app);

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(bodyParser.json());
app.use(routes);

server.listen(PORT, () => console.log(`Server already running at http://localhost:${PORT}`));