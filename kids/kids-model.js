const kidDB = require('../database/dbConfig.js');

module.exports = {
    allKids,
    kidID,
    removeKid,
    kidsByUser,
    updateKid,
    addKid
}

function allKids(){
    return kidDB('kids')
}

function kidID(id){
    return kidDB('kids')
            .select('*')
            .where('kids.id', id)
}

function kidsByUser(id){
    return kidDB('kids')
            .select(
                'kids.id',
                'kids.kid_name',
                'kids.age',
                'kids.pet_name',
                'kids.score',
                'kids.height',
                'kids.fav_food',
                'kids.weight',
                'kids.parent_id',
                'users.name as parent_name'
            )
            .join('users', 'users.id', 'kids.parent_id')
            .where('parent_id', id)
            .then(kids =>{
                return kids
            })
}

function addKid(id, body){
    return kidID('kids').insert({...body, parent_id: id})
            .then(ids => ({
                id: ids[0]
            }))
}


function updateKid(id, body){
    return kidDB('kids').where({id}).update(body)
}

function removeKid(id){
    return kidDB('kids').where({id}).del()
}