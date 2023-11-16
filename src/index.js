const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const { log } = require('console');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db')


// connect DB
db.connect();


app.use(express.static(path.join(__dirname, 'public')));

// app.use(morgan('combined'))

// template engine: handlebars
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
