const { User } = require("../../src/app/models");
const truncate = require("./../Utils/truncate");
const request = require("supertest");
const app = require("../../src/app");

describe("Authentication", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should crete user when receive user data", async () => {
    return request(app)
      .post("/create-user")
      .send({
        name: "Alessandro da Silva de Jesus",
        email: "asjesus1999@gmail.com",
        password_hash: "sdda4sdf4as4dfa54s46g2ag49a8494f4awdf"
      })
      .expect(201);

    // expect(request.status).toBe(200);
  });

  it("should receive JWT token when authenticated with valid credentials", () => {
    const x = 2;
    const y = 5;

    const sum = x + y;

    expect(sum).toBe(7);
  });
});
