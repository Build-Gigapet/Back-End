const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userDB = require('../users/users-model.js');
const restricted = require('../auth/restricted.js');

const router = express.Router();

router.post('/register', (req, res) => {
    const body = req.body;
    const hash = bcrypt.hashSync(body.password, 8);

   if(!body.name || !body.password ){
       res.status(400).json({
            message: 'please provied name and password'
       })
   }else{
        
    body.password = hash

       userDB.addUser(body)
       .then(user => {
           res.status(201).json(user)
       })
       .catch(err => {
           res.status(500).json({
               error: 'can not sign up'
           })
       })
   }
})

router.post('/login', (req, res) =>{
    const {name, password} = req.body;

    if(!name || !password){
        res.status(400).json({
            message: 'please prove name or password'
        })
    }else{
        
        userDB.FindByName({name}).first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){

                const token = signToken(user)

                res.status(201).json({
                    message: `Welcome back ${user.name}`,
                    token,
                    // user
                })

            }else{
                
                res.status(401).json({
                    message: 'wrong name or password'
                })

            }
        })
        .catch(err => {
            res.status(500).json({
                error: 'user can not login'
            })
        })
    }

})

router.delete('/:id', restricted, (req, res) => {
    const id = req.params.id;

    userDB.deleteUser(id)
    .then(deleted => {
        if (deleted) {
          res.status(200).json({ mess: `${id} was removed from project` });
        } else {
          res.status(404).json({ message: 'Could not find scheme with given id' });
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to delete scheme' });
      });
})

function signToken(user){

    const payload = {
        name: user.name,
    }

    const secret = process.env.JWT_SECRET || ' this is a secret, you are not support to know'

    const options = {
        expiresIn: "9h",
    }

    return jwt.sign(payload, secret, options)
}

module.exports = router;