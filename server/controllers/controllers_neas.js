const Nea = require('../models/models_neas');
const { db } = require('../utils/MongoDb')

const getNeas = async (req, res) => {
    let data;
    try {
      if (req.query.class) {
        console.log(req.query.class);
        data = await Nea.find(
          { orbit_class: req.query.class },
          "designation discovery_date -_id"
        );
        res.status(200).json(data);
      } else if (req.query.from && req.query.to) {
        data = await Nea.find(
          { discovery_date: { $gte: req.query.from, $lte: req.query.to }},
          "designation discovery_date -_id"
        );
        res.status(200).json(data); 
    }else if (req.query.from) {
        data = await Nea.find(
          { discovery_date: { $gte: req.query.from } },
          "designation discovery_date -_id"
        );
        res.status(200).json(data);
      } else if (req.query.to) {
        data = await Nea.find(
          { discovery_date: { $lte: req.query.to } },
          "designation discovery_date -_id"
        );
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };

const createNewNea = async (req, res) => {
    console.log(req.body);
    try {
        const newNea = req.body
        await Nea.create(newNea);
        res.status(201).json({"message":'landing creada'})
    } catch (err) {
        res.status(400).json({message:err});
    }
};

const editNea = async (req, res) => {
    try {
      let query = { designation: req.params.designation };
      let update = req.body;
      const result = await Nea.findOneAndUpdate(query, update, {
        new: true,
        runValidators: true,
      });
      res.status(201).json({ message: "nea modificada" });
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };

  const deleteNea = async (req, res) => {
    try {
      await Nea.deleteOne({ designation: req.params.designation })
      res.status(200).send('Nea Borrado');
    } catch (err) {
      res.status(400).json({ message: err });
    }
  };
module.exports = {getNeas, createNewNea, editNea, deleteNea};