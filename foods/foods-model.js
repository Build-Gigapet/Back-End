const database = require('../database/dbConfig.js');

module.exports = {
    allFood
}

function allFood(){
    return database('foods')
}