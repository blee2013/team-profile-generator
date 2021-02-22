const { test, expect } = require("@jest/globals");
const Manager = require("../lib/manager.js");



test("can I create a new instance of my object from my class", () => {
    const manager = new Manager("Sam", "1", "email@email.com","2");

    expect(manager.name).toBe("Sam");
    expect(manager.id).toBe("1");
    expect(manager.email).toBe("email@email.com");

})
test("can get function getName = ", () => {
    const testName = "Manager"
    const manager = new Manager(testName, "1", "email@email.com","2");

    expect(manager.getName()).toBe(testName);
})

test("can get function getId = ", () => {
    const testId = "1";
    const manager = new Manager("Sam", testId, "email@email.com", "2");

    expect(manager.getId()).toBe(testId);
})

test("can get function getEmail = ", () => {
    const testEmail = "email@email.com";
    const manager = new Manager("Sam", "1", testEmail, "2");

    expect(manager.getEmail()).toBe(testEmail);
})

test("can get function getRole= ", () => {
    const testRole = "Manager";
    const manager = new Manager("Sam", "1", "email@email.com", "2");

    expect(manager.getRole()).toBe(testRole);
})


test("can get function OfficeNumber = ", () => {
    const officeNumber = "2";
    const manager = new Manager("Sam", "1", "email@email.com", officeNumber);

    expect(manager.getofficeNumber()).toBe(officeNumber);
})


