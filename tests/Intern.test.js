const Employee = require("../lib/Employee.js");
const Intern = require("../lib/Intern.js");

test("can I create a new instance of my object from my class", () => {
    const intern = new Intern("Sam", "1", "email@email.com", "school");

    expect(intern.name).toBe("Sam");
    expect(intern.id).toBe("1");
    expect(intern.email).toBe("email@email.com");
})

test("can get funtion getName", () => {
    const testName = "Sam";
    const intern = new Intern(testName, "1", "email@email.com", "school");

    expect(intern.getName()).toBe(testName);
})

test("can get funtion getId", () => {
    const testId = "1";
    const intern = new Intern("Sam", testId, "email@email.com", "school");

    expect(intern.getId()).toBe(testId);
})

test("can get funtion getEmail", () => {
    const testEmail = "email@email.com";
    const intern = new Intern("Sam", "1", testEmail, "school");

    expect(intern.getEmail()).toBe(testEmail);
})

test("can get funtion getRole", () => {
    const testRole = "Intern";
    const intern = new Intern("Sam", "1", "email@email.com", "school");

    expect(intern.getRole()).toBe(testRole);
})

test("can get funtion school", () => {
    const testSchool = "school";
    const intern = new Intern("Sam", "1", "email@email.com", testSchool);

    expect(intern.getSchool()).toBe(testSchool);
})