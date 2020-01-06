const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).send(`<h1> Gigapet is up and running </h1>`)
})

server.use('/api/auth', authRouter);

module.exports = server;
