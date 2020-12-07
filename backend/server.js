const express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    app = express(),
    rateLimit = require("express-rate-limit")

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(express.json({ limit: '300kb' }));
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://www.google-analytics.com 'unsafe-inline' 'unsafe-eval'");
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com 'unsafe-inline' 'unsafe-eval'");
    return next();
});

app.use(express.static(__dirname + "/dist"));
const db = require("./app/models");
db.sequelize.sync();


require("./app/routes/pets.routes")(app);
require("./app/routes/dictionary.routes")(app);
require("./app/routes/shelters.routes")(app);
require("./app/routes/docx.routes")(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/dist/petFinder");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});