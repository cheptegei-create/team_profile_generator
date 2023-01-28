// importing Employee constructor 
const Employee = require("./Employee");

// extending from employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // function to get the github info 
    getGithub () {
        return this.github;
    }

     // function to get the role
    getRole () {
        return "Engineer";
    }
}

// Exporting 
module.exports = Engineer; 
