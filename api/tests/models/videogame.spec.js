const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });
    });
  });
});
//se agregan nuevos test para released, rating y description
describe("released", () => {
  it("should throw an error if released is null", (done) => {
    Videogame.create({})
      .then(() =>
        done(
          new Error("notNull Violation released")
        )
      )
      .catch(() => done());
  });
  it("should throw an error if type of date is not valid", (done) => {
    Videogame.create({})
      .then(() =>
      done(
        new Error("type of date is not valid")
      ))
      .catch(() => done())
  })

  it("should work when its a valid released value", () => {
    Videogame.create({ released: "2018/12/12" });
  });
});
describe("rating", () => {
  it("should throw an error if rating is null", (done) => {
    Videogame.create({})
      .then(() =>
        done(
          new Error("notNull Violation rating")
        )
      )
      .catch(() => done());
  });
  it("should work when its a valid rating value", () => {
    Videogame.create({ rating: "3.7" });
  });
});
describe('description', () => {
  it('should throw an error if description is null', (done) => {
    Videogame.create({})
      .then(() => done(new Error('It requires a valid description')))
      .catch(() => done());
  });
});
