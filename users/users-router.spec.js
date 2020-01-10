const request = require('supertest');
const server = require('../api/server.js');

let token 
describe('doing GET request', () =>{


    beforeEach(done => {
        request(server)
          .post("/api/auth/login")
          .send({ name: "Sonic", password: "Sonic" })
          .end((req, res) => {
            token = res.body.token;
            done();
          });

        })



        it("should GET a list of users", async () => {
            await request(server)
              .get("/api/auth/users")
              .set("authorization", token)
              .expect(200);
          });

        //   it("should Delete a Users", async () => {
        //     await request(server)
        //       .delete("/api/auth/6")
        //       .set("authorization", token)
        //       .expect(200);
        //   });
})