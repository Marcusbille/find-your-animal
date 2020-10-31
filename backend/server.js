const express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    app = express(),
    helmet = require('helmet'),
    rateLimit = require("express-rate-limit")

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});

//app.use(express.static(path.join(__dirname, './dist/petFinder')));

app.use(helmet());
app.use(express.json({ limit: '300kb' }));
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = require("./app/models");
db.sequelize.sync();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');

});

require("./app/routes/pets.routes")(app);



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});