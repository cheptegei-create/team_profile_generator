// importing Intern constructor

const Intern = require("../lib/Intern");

describe("Intern", () => {
  //creating intern object
  it("creates an Intern object", () => {
    const intern = new Intern("David", 10, "davidchepte@gmail.com", "Edx");

    expect(intern.school).toEqual(expect.any(String));
  });
  //gets the school of the intern
  it("gets employee school", () => {
    const intern = new Intern("David", 10, "davidchepte@gmail.com", "Edx");

    expect(intern.getSchool()).toEqual(
      expect.stringContaining(intern.school.toString())
    );
  });
  //gets the role of the intern
  it("gets role of employee", () => {
    const intern = new Intern("David", 10, "davidchepte@gmail.com", "Edx");

    expect(intern.getRole()).toEqual("Intern");
  });
});
