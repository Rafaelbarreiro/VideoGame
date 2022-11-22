/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const request = require('supertest');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');
const axios = require("axios");
const {API_KEY} = process.env


const agent = session(app);
const videogame = {
  name : "nuevo", 
    description: "de prueba",
    released: "2013-09-17",
    rating: "4.48",
    platforms: ["PlayStation 4, PlayStation 3"], 
    genre: "Action",
    img: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg"
};
const videoFail = {
  description:"cool",
  platforms: ["PC", "PlayStation"]
};
//se corrige el test original, error descripcion y platforms not null
//se refactoriza al ser async con  function done(), sino daban error por pasar 2seg, error timeOut
 describe('Videogame GET routes', () => {
    before(() => conn.authenticate()
   .catch((err) => {
    console.error('Unable to connect to the database:', err);
   }));
   before(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));  
  describe('GET all videoGames', () => {
      it('should get 200 when getting all games', async () => {
        const res = await request(app).get('/videogames');
        expect(res.statusCode).to.eql(200);
      });
      it('the response should be an array', async () => {
        const res = await request(app).get('/videogames');
        expect(res.body).to.be.an('array');
      });
    })
  describe('Videogame by name', () =>{
    it('should be 200 when it finds a game by name', async() =>{
      const res = await request(app).get('/videogames?name=super');
      expect(res.statusCode).to.eq(200);
    });
    it('should be 404 when it doesnt finds a game by name', async() =>{
      const res = await request(app).get('/videogames?name=xaxxaxaxxaxaxaxaxa');
      expect(res.statusCode).to.eq(404);
    }); 
  });
  describe('Get Videogame by ID', () =>{
    it('shoul be 200 when it finds a game by ID', async() =>{
      const res = await request(app).get('/videogames/3498');
      expect(res.statusCode).to.eq(200);
    });

  })
/*it('get 200 a all games', (done) =>{
  axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`).then(res =>{
    expect(res.status).to.be.equal(200)
    done()
  }).catch(err =>{
    done(err)
  })
});
describe('VideoGames by name', () =>{
  xit('Get 200 if find a game', (done) =>{
    axios.get(`https://api.rawg.io/api/games?search=super&key=${API_KEY}`).then(res => {
      expect(res.status).to.be.equal(200)
      done()
    }).catch(err =>{
      done(err)  
    })
  });
  it('Get 200 if find a game', (done) =>{
    axios.get('/videogames').then(res => {
      expect(res.status).to.be.equal(250)
      done()
    }).catch(err =>{
      done(err)  
    })
  });
  xit('Get 404 if not find a game', (done) =>{
    axios.get(`https://api.rawg.io/api/games?search=zhzhzhhzhzhhzhzhz&key=${API_KEY}`).then(res => {
      expect(res).to.be.equal([])
      done()
    }).catch(err =>{
      done(err)  
    })
  });
  it('should get 200 otra vez',function (done) {
          const res =  agent.get('/videogames');
          console.log(res)
         expect (res).to.equal(250)
        })
}) */

  // before(() => conn.authenticate()
  // .catch((err) => {
  //   console.error('Unable to connect to the database:', err);
  // }));
   /* before(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));  */
//   describe('GET /videogames',  () => {
//     //it('responds with 200', () => agent.get('/videogames').expect(200));
//     it('should get 200',function (done) {
//       () => agent.get('/videogames').expect(400)
//     /* const res =  request(app).get('/videogames');
//       expect(res.statusCode).toBe(200); */
//       done();
//     }
//     );
//     it('should get 200 otra vez',function (done) {
//       const res =  agent.get('/videogames');
//       expect (res.status).to.equal(250)
      
//      /*  expect(res.statusCode).equal(250); */
//       done();
    
//     }
//     );
//   });
// });
// //se agregan 2 test del GET by Id y GET by name
// describe("Obtain a Videogame by id or name", () => {
//   describe("GET /api/videogames/:id", () => {
//    xit("response 200 if id", function (done) {
//    agent.get("/videogames/3498").expect(400);
//    done();}
//   );
// });
//   describe ("GET /api/videogames?name=nnn", () => {
//     xit("response 200 if name", function (done) {
//       agent.get("/videogames?name=Grand").expect(200);
//       done();
//     });
//   })
// });
// describe("/api/genres",  () => {
//   xit("GET respond with a status 200 if you find genres", function (done) {
//     agent.get("/genres").expect(200);
//     done();
//   });
// });
// //test del form
// describe("POST news videogames", () =>{
//   xit("response 'Some required information is missing' ", function(done){
//     agent.post("/videogame").expect(200);
//     done()
//   } )

}
)
