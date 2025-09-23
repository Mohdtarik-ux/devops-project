const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  res.render('index', { date: currentDate, time: currentTime });
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running at http://localhost:' + (process.env.PORT || 8080));
});