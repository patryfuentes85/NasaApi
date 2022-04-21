const Nea = require('../models/models_neas');

const getNeas = async(req, res) => {
    let data;
    try {
        if (req.query.class){
            console.log(req.query.class);
            data = await Nea.find({orbit_class: req.query.class}, 'designation period_yr -_id')
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({'error': error})
    }
}

module.exports = {getNeas};