var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Animal = require('../models/animals');
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// get all animals
router.get('/animals', function(req, res, next) {
  Animal.find(function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});
// get single animal
router.get('/animal/:id', function(req, res, next) {
  Animal.findById(req.params.id,function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});
// post all animals
router.post('/animals', function(req, res, next) {
  newAnimal = new Animal({
    name: req.body.name,
    friendly: req.body.friendly
  });
  newAnimal.save(function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});
// put single animal
router.put('/animal/:id', function(req, res, next) {
  var update = {
    name: req.body.name,
    friendly: req.body.friendly
  };
  Animal.findByIdAndUpdate(req.params.id, update, function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});
// delete single animal
router.delete('/animal/:id', function(req, res, next) {
  Animal.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.json({
        'message': err
      });
    } else {
      res.json(data);
    }
  });
});
module.exports = router;
