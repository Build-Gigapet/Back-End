const router = require('express').Router();
const restricted = require('../auth/restricted.js');
const kidDB = require('./kids-model.js');


router.get('/', restricted , (req, res) => {
    kidDB.allKids()
    .then(kids => {
        res.status(200).json(kids)
    })
    .catch(err =>{
        res.status(500).json({
            error: 'can not get all the kids'
        })
    })
})

router.get('/:id', restricted , (req, res) =>{
    const id = req.params.id

    kidDB.kidID(id)
    .then(kid =>{
        res.status(200).json(kid)
    })
    .catch(err =>{
        res.status(500).json({
            error: `Can not get kid by id of ${id}`
        })
    })
})

router.get('/:id/user', restricted, (req, res) =>{
    kidDB.kidsByUser(req.params.id)
    .then(kid =>{
        res.status(200).json(kid)
    })
    .catch(err =>{
        res.status(500).json({
            error: 'can not get all kid for that user'
        })
    })
})

router.post('/:id/user', restricted, (req, res) =>{
    const body = req.body;
    const id = req.params.id;

    if(!body.kid_name || !body.age || !body.pet_name){
        res.status(400).json({
            message: 'Please proved Kid name, age, petname'
        })
    }else{
        kidDB.addKid(id, body)
        .then(add =>{
            res.status(201).json({
                message: 'Your Kids has been added',
                add
            })
        })
        .catch(err => {
            res.status(500).json({
                error: 'Can not add new Kid'
            })
        })
    }

})

router.put('/:id', restricted, (req, res) =>{
    const body = req.body;
    const id = req.params.id;

    if(!body.kid_name || !body.age || !body.pet_name){
        res.status(400).json({
            message: 'Please proved Kid name, age, petname'
        })
    }else{
        kidDB.updateKid(id, body)
        .then(updated =>{
            res.status(200).json({
                message: 'Kids data has been updated'
            })
        })
        .catch(err => {
            res.status(500).json({
                error: 'Can not update the Kids data'
            })
        })
    }
})


router.delete('/:id', restricted, (req, res) =>{

    kidDB.removeKid(req.params.id)
    .then(removed => {
        res.status(200).json({
            message: 'The kids has been removed',
            removed
        })
    })
    .catch(err =>{
        res.status(500).json({
            error: 'Can not remove the kids'
        })
    })
})


module.exports = router;