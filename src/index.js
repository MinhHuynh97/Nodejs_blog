const { engine } = require('express-handlebars');
const express = require('express')
const path = require('path');
const app = express()


app.use(express.static(path.join(__dirname, 'public')));
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/views', (req, res) => {
  res.render('views');
});
app.listen(3000)