const Landing = require('../models/models_landings')


const getLandingsMass = async(req, res) => {
    let data;
    try {
        if(req.params.mass){
            data = await Landing.find({'mass': {$gte: req.params.mass}}, 'name mass -_id')
            console.log(data)
            res.status(200).json(data);
        }else{
            data = await Landing.find({})
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(400).json({"error":error})
    }
};

const getLandingClass = async(req, res) => {
    console.log(req.params);
    let data;
    try {
        if(req.params.recclass){
            data = await Landing.find({'recclass':req.params.recclass}, 'name recclass -_id')
            res.status(200).json(data);
        }else{
            data = await Landing.find({}, '-_id')
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(400).json({'error': error})
    }
};

const getLandingsQuery = async(req, res) => {
    let data;
    try {
        if(req.query.from){
            data = await Landing.find({'year': {$gte: req.query.from}}, 'name mass year -_id')
            res.status(200).json(data);
        } else if(req.query.from && req.query.to){
            data = await Landing.find({'year': {$gte: req.query.from, $lte: req.query.to}}, 'name mass year -_id')
            res.status(200).json(data);
        } else if(req.query.to){
            data = await Landing.find({'year': {$lte: req.query.to}}, 'name mass year -_id')
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(400).json({'error': error})
    }
};

const createNewLanding = async (req, res) => {
    try {
        const newLanding = new Landing({
            name: req.body.name,
            id: req.body.id,
            nametype: req.body.nametype,
            recclass: req.body.recclass,
            mass: req.body.mass,
            fall: req.body.fall,
            year: req.body.year,
            reclat: req.body.reclat,
            reclong: req.body.reclong,
            geolocation: {
                latitude: req.body.latitude,
                longitude: req.body.longitude,
            }
        })
        const land = await newLanding.save();
        res.status(201).json({land})
    } catch (err) {
        res.status(400).json({message:err});
    }
}

module.exports = { getLandingsMass, 
                   getLandingClass,
                   getLandingsQuery,
                   createNewLanding
                };



