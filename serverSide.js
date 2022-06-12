// Requires
const express = require("express");
const app = express();
const fs = require("fs");


// Static paths
app.use('/images', express.static('./images'));
app.use('/pages', express.static('./pages'));
app.use('/scripts', express.static('./scripts'));
app.use('/styles', express.static('./styles'));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


// Index page
app.get('/', function (req, res) {
    let indexPage = fs.readFileSync("./pages/index.html", "utf8");

    res.set("Server", "Monicode Engine");
    res.set("X-Powered-By", "Monicode");
    res.send(indexPage);
});


// About page
app.get('/about', function (req, res) {
    let aboutPage = fs.readFileSync("./pages/about.html", "utf8");
    res.send(aboutPage);
});


let port = process.env.PORT || 3000;
app.listen(port);