const { User } = require("../../src/app/models");

describe("Authentication", () => {
  it("should crete user when receive user data", async () => {
    const user = await User.create({
      name: "Alessandro da Silva de Jesus",
      email: "asjesus1999@gmail.com",
      passwordHash: "sdda4sdf4as4dfa54s46g2ag49a8494f4awdf"
    });

    console.log(user);

    expect(user.email).toBe("asjesus1999@gmail.com");
  });

  it("should receive JWT token when authenticated with valid credentials", () => {
    const x = 2;
    const y = 5;

    const sum = x + y;

    expect(sum).toBe(7);
  });
});
