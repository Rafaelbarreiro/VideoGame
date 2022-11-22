const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');
const axios = require("axios");

const videogame = {
  name: 'Super Mario Bros',
  description: "cool",                //agregado
  platforms: ["PC", "PlayStation"], 
  released : "2013-09-17" //agregado
};

describe ('Videogame Model', () => {
  it('should throw an error if name is null', () =>{
    axios.post('http://localhost:3001/videogame').then(res =>
    console.log(res)
    //expect(res.Status).to.be.equal('250')
   
    )
    
  }
  )
}

);

// describe('Videogame model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));
//   describe('Validators', () => {
//     /* before(() => Videogame.sync({ force: true })); */
//     describe('name', () => {
//       it('should throw an error if name is null', (done) => {
//         Videogame.create({})
//           .then(() => done(new Error('It requires a val')))
//           .catch(() => done());
//       });
//       it('should work when its a valid name', () => {
//         Videogame.create({ name: 'Super Mario Bros' });
//       });
//     });
//   });
// });
// //se agregan nuevos test para released, rating y description
// describe("released", () => {
//   xit("should throw an error if released is null", (done) => {
//     Videogame.create({})
//       .then(() =>
//         done(
//           new Error("notNull Violation released")
//         )
//       )
//       .catch(() => done());
//   });
//   xit("should throw an error if type of date is not valid", (done) => {
//     Videogame.create({released: "hola"})
//       /* .then(() =>
//       done(
//         new Error("type of date is not valid")
//       ))
//       .catch(() => done()) */
//   })

//   it("should work when its a valid released value", () => {
//     Videogame.create({ released: "hola" }); 
//   });
// });
// describe("rating", () => {
//   it("should throw an error if rating is null", (done) => {
//     Videogame.create({})
//       .then(() =>
//         done(
//           new Error("notNull Violation rating")
//         )
//       )
//       .catch(() => done());
//   });
//   it("should work when its a valid rating value", () => { 
//     Videogame.create({ rating: "hola" });
//   });
// });
// describe('description', () => {
//   it('should throw an error if description is null', (done) => {
//     Videogame.create({})
//       .then(() => done(new Error('It requires a valid description')))
//       .catch(() => done());
//   });
//});
