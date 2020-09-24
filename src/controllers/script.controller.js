const Script = require('../models/script.model');


exports.create = function (req, res) {
    const new_script = new Script(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else 
    {
        Script.create(new_script, function (err, script) {
            if (err)
                res.send(err);
            res.json({ error: false, message: "Script added successfully!", data: script });
        });
    }
};