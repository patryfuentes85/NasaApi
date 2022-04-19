const Landing = require('../models/models_landings')


const getLandingsMass = async(req, res) => {
    let data;
    try {
        if(req.params.mass){
            console.log(req.params.mass)
            data = await Landing.find({'mass': {$gte: req.params.mass}}, '-_id')
            console.log(data)
            res.status(200).json(data);
        }else{
            data = await Landing.find({})
            console.log(data)
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
            data = await Landing.find({'recclass':req.params.recclass}, '-_id')
            res.status(200).json(data);
        }else{
            data = await Landing.find({}, '-_id')
            res.status(200).json(data)
        }
    } catch (error) {
        res.status(400).json({'error': error})
    }
};

module.exports = { getLandingsMass, getLandingClass};



