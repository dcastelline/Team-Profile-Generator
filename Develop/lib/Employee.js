// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        console.log(`${data.name}`);
    }
    getID() {
        console.log(`${data.id}`);
    }
    getEmail() {
        console.log(`${data.email}`);
    }
    getRole() {
        console.log(`${data.role}`);
    }
}

module.exports = Employee;