require('dotenv').config();
require('./utils/MongoDb');
const express = require('express');
const path = require('path');
const landings = require('./controllers/controllers_landings');
const neas = require('./controllers/controllers_neas');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({extended:true}));//Estas dos son para los métodos put y post, para que el servidor pueda leer la información nueva que le mandamos
app.use(express.json());

const port = process.env.PORT || 3000;


app.use(cors());


app.get('/api/astronomy/landings/mass/:mass?', landings.getLandingsMass)
app.get('/api/astronomy/landings/class/:recclass?', landings.getLandingClass)
app.get('/api/astronomy/landings', landings.getLandingsQuery)

app.post('/api/astronomy/landings/create', landings.createNewLanding)
app.put('/api/astronomy/landings/edit/:id', landings.editLanding)
app.post('/api/astronomy/landings/delete/:id', landings.deleteLanding)

app.post('/api/astronomy/neas/create', neas.createNewNea)
app.put('/api/astronomy/neas/edit/:designation', neas.editNea)
app.post('/api/astronomy/neas/delete/:designation', neas.deleteNea)

app.get('/api/astronomy/neas', neas.getNeas)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });