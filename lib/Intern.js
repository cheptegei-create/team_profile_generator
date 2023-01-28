// importing Employee constructor 
const Employee = require('./Employee');

// extending from employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // function to get the school
    getSchool () {
        return this.school;
    }

    // function to get the role
    getRole () {
        return "Intern";
    }
}

// exporting
module.exports = Intern; 