console.log("userController.js");


const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.User
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {

    db.User
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
    console.log("OH NO ROBOTS, THE SEQUEL");
    console.log(req.body);
    db.User
        .create(req.body)
        .then(function(data){
            res.json(data);
        })
        // .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
    db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    addkeytag: function(req,res){
    db.User
        .findOneAndUpdate({_id: req.params.id}, {$push: {"technologiesKeywords": req.body}})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    // db.places.update({"country": "Morocco"}, {$push: {"majorcities":"Agadir"}})
    
    remove: function(req, res) {
    db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }    
};