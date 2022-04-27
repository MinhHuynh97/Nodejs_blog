const { engine } = require('express-handlebars');
const express = require('express')
const path = require('path');
const app = express()

const route= require('./routes');

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json())


app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route
route(app);

app.listen(3000)