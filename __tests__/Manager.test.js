// importing Manager constructor

const Manager = require("../lib/Manager");

describe("Manager", () => {
  //creating an object for manager
  it("creates an Manager object", () => {
    const manager = new Manager("David", 10, "davidChepte@gmail", 8);

    expect(manager.officeNumber).toEqual(expect.any(Number));
  });
  // gets the role of the manager
  it("gets role of employee", () => {
    const manager = new Manager("David", 10, "davidChepte@gmail", 8);

    expect(manager.getRole()).toEqual("Manager");
  });
});
