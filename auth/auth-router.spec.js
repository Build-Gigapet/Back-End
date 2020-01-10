const request = require('supertest');
const server = require('../api/server.js');
// const database = require('../database/dbConfig.js');

describe('Checking auth', () =>{
    describe('redister a new user', () =>{
        // it('should add new User to database', async () =>{
        //     await request(server).post('/api/auth/register')
        //             .send({
        //                 name: 'Krunal',
        //                 email: 'krunal@gmail.com',
        //                 password: 'LoveAnime'
        //             })
        //             .expect(201)
        // })

        // it('Can not register a new User with no name or password', async () =>{
        //     await request(server).post('/api/auth/register')
        //             .send({
        //                 name: 'Mario'
        //             })
        //             .expect(500)
        // })

        it('Should let me login in', async () =>{
            await request(server).post('/api/auth/login')
                    .send({
                        name: 'jackey',
                        password: 'jackey'
                    })
                    .expect(201)
        })

        it('should get me a 400 for not having name or password', async () =>{
            await request(server).post('/api/auth/login')
            .send({
                name: 'jackey'
            })
            .expect(400)
        })

        it('shoud not let me login in if i have not register', async () =>{
            await request(server).post('/api/auth/login')
            .send({
                name: 'orange',
                password: 'orange'
            })
            .expect(401)
        })
    })
})