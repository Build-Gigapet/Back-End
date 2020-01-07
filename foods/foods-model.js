const database = require('../database/dbConfig.js');

module.exports = {
    allFood,
    foodID,
    deleteFood,
    foodByKid,
    updateFood,
    addFood
}

function allFood(){
    return database('foods')
}

function foodID(id){
    return database('foods').where({id}).first()
}

function foodByKid(id){
    return database('foods')
            .select(
                'foods.id',
                'foods.food_name',
                'foods.food_type',
                'foods.date',
                'foods.kid_id',
                'kids.kid_name',
                'kids.score',
            )
            .join('kids', 'kids.id', 'foods.kid_id')
            .where('kid_id', id)
            .then(foods =>{
                return foods
            })
}

function addFood(id, body){
    return database('foods').insert({...body, kid_id: id})
            .then(ids =>({
                id: ids[0]
            }))
}

function updateFood(id, body){
    return database('foods').where({id}).update(body)
}

function deleteFood(id){
    return database('foods').where({id}).del()
}