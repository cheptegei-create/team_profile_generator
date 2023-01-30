//importing Engineer constructor

const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  //creating the engineer object
  it("creates an Engineer object", () => {
    const engineer = new Engineer(
      "David",
      10,
      "davidchepte@gmail.com",
      "cheptegei-create"
    );

    expect(engineer.github).toEqual(expect.any(String));
  });
  //gets github information
  it("gets engineer github value", () => {
    const engineer = new Engineer(
      "David",
      10,
      "davidchepte@gmail.com",
      "cheptegei-create"
    );

    expect(engineer.getGithub()).toEqual(
      expect.stringContaining(engineer.github.toString())
    );
  });
  //gets the role of the engineer
  it("gets role of employee", () => {
    const engineer = new Engineer(
      "David",
      10,
      "davidchepte@gmail.com",
      "cheptegei-create"
    );

    expect(engineer.getRole()).toEqual("Engineer");
  });
});
