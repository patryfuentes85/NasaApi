const Landing = require('../models/models_landings')
const { db } = require('../utils/MongoDb')

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
        if(req.query.from && req.query.to){
            data = await Landing.find({'year': {$gte: req.query.from, $lte: req.query.to}}, 'name mass year -_id')
            res.status(200).json(data);
        } else if(req.query.from){
            data = await Landing.find({'year': {$gte: req.query.from}}, 'name mass year -_id')
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
    console.log(req.body);
    try {
        const lan = req.body;
        await Landing.create(lan);
        res.status(201).json({"message":'landing creada'})
    } catch (err) {
        res.status(400).json({message:err});
    }
}

const editLanding = async (req, res) => {
    try {
      let query = { id: req.params.id };
      let update = req.body;
      const result = await Landing.findOneAndUpdate(query, update, {
        new: true,
        runValidators: true,
      });
      res.status(201).json({ message: "landing modificada" });
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };

  const deleteLanding = async (req, res) => {
    try {
      await Landing.deleteOne({ id: req.params.id })
      res.status(200).send('Landing Borrado');
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };

module.exports = { getLandingsMass, 
                   getLandingClass,
                   getLandingsQuery,
                   createNewLanding,
                   editLanding,
                   deleteLanding
                };



