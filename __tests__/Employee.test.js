// importing Employee constructor

const Employee = require("../lib/Employee");

describe("Employee", () => {
  //creates employee object
  it("creates an employee object", () => {
    const employee = new Employee("David", 10, "davidchepte@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  });
  //gets the name of the employee
  it("gets employee name", () => {
    const employee = new Employee("David", 10, "davidchepte@gmail.com");

    expect(employee.getName()).toEqual(expect.any(String));
  });
  //gets the id of the employee
  it("gets employee ID", () => {
    const employee = new Employee("David", 10, "davidchepte@gmail.com");

    expect(employee.getId()).toEqual(expect.any(Number));
  });
  //gets the email of the employee
  it("gets employee email", () => {
    const employee = new Employee("David", 10, "davidchepte@gmail.com");

    expect(employee.getEmail()).toEqual(
      expect.stringContaining(employee.email.toString())
    );
  });
  //gets the role of the employee
  it("gets role of employee", () => {
    const employee = new Employee("David", 10, "davidchepte@gmail.com");

    expect(employee.getRole()).toEqual("Employee");
  });
});
