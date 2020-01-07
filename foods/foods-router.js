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

router.get('/:id/kid', restricted, (req, res) =>{

    foodDB.foodByKid(req.params.id)
    .then(food =>{
        res.status(200).json(food)
    })
    .catch(err =>{
       res.status(500).json({
        error: 'Can not get this food for this kid'
       })
    })
})

router.post('/:id/kid', restricted, (req, res) =>{
    const id = req.params.id;
    const body = req.body;

    if(!body.food_name || !body.food_type){
        res.status(400).json({
            message: 'Please proved Food name and type'
        })
    }else{
        foodDB.addFood(id, body)
        .then(add =>{
            res.status(201).json({
                message: 'Your Kids food has been added',
                add
            })
        })
        .catch(err =>{
            res.status(500).json({
                error: 'Can not add new food to your kids'
            })
        })
    }
})

router.put('/:id', restricted, (req, res) =>{
    const id = req.params.id;
    const body = req.body;

    if(!body.food_name || !body.food_type){
        res.status(400).json({
            message: 'Please proved Food name and type'
        })
    }else{
        foodDB.updateFood(id, body)
        .then(updated =>{
            res.status(200).json({
                message: 'Your kids food has been updated'
            })
        })
        .catch(err =>{
            res.status(500).json({
                error: 'can not update the kid food'
            })
        })
    }
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