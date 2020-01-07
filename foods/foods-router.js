const router = require('express').Router();
const foodDB = require('./foods-model.js');
const restricted = require('../auth/restricted.js');

router.get('/', restricted, (req, res) =>{
    foodDB.allFood()
    .then(foods =>{
        res.status(200).json(foods)
    })
    .catch(err =>{
        res.status(500).json({
            error: 'can not get all foods'
        })
    })
})

router.get('/:id', restricted, (req, res) =>{
    foodDB.foodID(req.params.id)
    .then(food =>{
        res.status(200).json(food)
    })
    .catch(err =>{
        res.status(500).json({
            error: 'Can not get the food by id'
        })
    })
})

router.delete('/:id', restricted, (req, res) =>{
    foodDB.deleteFood(req.params.id)
    .then(reoved =>{
        res.status(200).json({
            message: 'You have throw that food successfully'
        })
    })
    .catch(err => {
        res.status(500).json({
            error: 'can not remove that food'
        })
    })
})



module.exports = router;