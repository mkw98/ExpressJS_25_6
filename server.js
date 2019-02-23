var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/login', function (req, res) {
    res.render('authentication');
});

app.get('/verified', function (req, res) {
    res.render('content');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego czego żądasz');
});