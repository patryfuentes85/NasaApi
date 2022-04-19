require('dotenv').config();
const express = require('express');
const path = require('path');
const landings = require('./controllers/controllers_landings');
const neas = require('./controllers/controllers_neas.js');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
require('./utils/MongoDb');

app.use(cors());



app.get('/', (req,res) =>{
});

app.get('/api/astronomy/landings/mass/:mass?', landings.getLandingsMass)
app.get('/api/astronomy/landings/class/:recclass?', landings.getLandingClass)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });