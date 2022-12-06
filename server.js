const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, '/public')));

app.use((req, res, next) => {
  res.show = (fileName) => {
    res.sendFile(path.join(__dirname, `/views/${fileName}`));
  };
  next();
});

app.get('/', (req, res) => {
  res.show('index.html');
});

app.get('/home', (req, res) => {
  res.show('index.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.use('/user', (req, res) => {
  res.show('login.html')
});

app.use((req, res) => {
  res.status(404).show('notfound.html');
})

app.listen(port, () => {
  console.log("Server is running on port: " + port)
});