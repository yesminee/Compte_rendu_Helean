const http = require("http");
const express = require('express');
const routes = require('./routes/routes');

const port = 8000;

//initialiser express
const app = express();

//middleware pour permettre d'echanger avec un api dans le localhost
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

//creation du chemin racine des apis 
//tous les apis commencereont par /api
app.use('/api', routes);

//les donnés echangées seront sous format json
app.use(express.json());

//instatiation du serveur au port 8000
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})
