const express = require('express');
const app = express();
const path = require('path');
const pug=require('pug');
const calendarIterator=require('./calendar');

app.set('views','./views');
app.set('view engine','pug');

const publicPath = path.join(__dirname, './public');

app.use('/', express.static(publicPath));
const port = process.env.PORT || 3000


app.use('/:year', (req,res) => {
  const year = req.params["year"];
  const it = calendarIterator(new Date(year,0,1),730);
  console.log(it);
  res.render("calendar",{data:it, message: `for ${year}`});
});

app.use('/', (req,res) => {
  const it = calendarIterator(new Date(),730);
  res.render("calendar",{data:it, message: "from today"});
});


app.listen(port, function () {
  console.log(`Started server on port ${port}`);
});
