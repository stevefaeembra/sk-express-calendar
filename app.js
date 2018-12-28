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


app.use('/', (req,res) => {
  const it = calendarIterator(new Date(),180);
  res.render("calendar",{data:it});
});

app.listen(port, function () {
  console.log(`Started server on port ${port}`);
});
