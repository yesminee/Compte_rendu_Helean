const http = require("http");
const express = require('express');
const routes = require('./routes/routes');

const port = 8000;

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/api', routes)
app.use(express.json());

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})