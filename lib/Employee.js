// employee class constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // function to get the name
    getName () {
        return this.name;
    }

    // function to get the is
    getId () {
        return this.id;
    }   

    // function to get the email
    getEmail () {
        return this.email;
    }

    // returning employee 
    getRole () {
        return 'Employee'; 
    }
};

// Exporting
module.exports = Employee; 