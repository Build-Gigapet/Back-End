const request = require('supertest');
const server = require('./server.js');

describe('server', () =>{
    describe('Doing a server check ', () =>{
       it('Should get back 200 for GET', async() =>{
           await request(server).get('/')
           expect(200)
       })

       it('should return a H1 tag', done => {
        request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch("text/html");
                done();
            });
        });
    })
})


