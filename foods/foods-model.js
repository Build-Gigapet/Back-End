const database = require('../database/dbConfig.js');

module.exports = {
    allFood,
    foodID,
    deleteFood
}

function allFood(){
    return database('foods')
}

function foodID(id){
    return database('foods').where({id}).first()
}

function deleteFood(id){
    return database('foods').where({id}).del()
}