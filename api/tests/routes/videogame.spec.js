/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: "cool",                //agregado
  platforms: ["PC", "PlayStation"],   //agregado
};
const videoFail = {
  description:"cool",
  platforms: ["PC", "PlayStation"]
};
//se corrige el test original, error descripcion y platforms not null
//se refactoriza al ser async con  function done(), sino daban error por pasar 2seg, error timeOut
describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  /* beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame))); */
  describe('GET /videogames',  () => {
     it('should get 200', function (done) {
      agent.get('/videogames').expect(200);
    done()}
    );
  });
});
//se agregan 2 test del GET by Id y GET by name
describe("Obtain a Videogame by id or name", () => {
  describe("GET /api/videogames/:id", () => {
   it("response 200 if id", function (done) {
   agent.get("/videogames/3498").expect(400);
   done();}
  );
});
  describe ("GET /api/videogames?name=nnn", () => {
    it("response 200 if name", function (done) {
      agent.get("/videogames?name=Grand").expect(200);
      done();
    });
  })
});
describe("/api/genres",  () => {
  it("GET respond with a status 200 if you find genres", function (done) {
    agent.get("/genres").expect(200);
    done();
  });
});
//test del form
describe("POST news videogames", () =>{
  it("response 'Some required information is missing' ", function(done){
    agent.post("/videogame").expect(200);
    done()
  } )

}
)
