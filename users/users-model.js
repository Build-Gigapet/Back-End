const database = require('../database/dbConfig.js');

module.exports = {
    allUser,
    FindByName,
    addUser,
    updateUser,
    deleteUser
}

function allUser(){
    return database('users').select('id', 'name', 'email').orderBy('id')
}

function FindByName(name){
    return database('users').select('id', 'name', 'password').where(name);
}

function addUser(data){
    return database('users').insert(data, 'id')
    .then(ids => {
        const [id] = ids;
        return userId(id)
    })
}

function userId(id){
    return database('users').select('id', 'name', 'email').where({ id }).first()
}

function updateUser(id, body){
    return database('users').where('id', Number(id)).update(body);
}

function deleteUser(id){
    return database('users').where('id', Number(id)).del()
}