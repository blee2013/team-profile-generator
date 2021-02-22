const { test, expect } = require("@jest/globals");
const { exec } = require("child_process");
const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/engineer.js");

test("can I create a new instance of my object from my class", () => {
    const engineer = new Engineer("Sam", "1", "email@email.com", "github");

    expect(engineer.name).toBe("Sam");
    expect(engineer.id).toBe("1");
    expect(engineer.email).toBe("email@email.com");
})

test("can get funtion getName", () => {
    const testName = "Sam";
    const engineer = new Engineer(testName, "1", "email@email.com", "github");

    expect(engineer.getName()).toBe(testName);
})

test("can get funtion getId", () => {
    const testId = "1";
    const engineer = new Engineer("Sam", testId, "email@email.com", "github");

    expect(engineer.getId()).toBe(testId);
})

test("can get funtion getEmail", () => {
    const testEmail = "email@email.com";
    const engineer = new Engineer("Sam", "1", testEmail, "github");

    expect(engineer.getEmail()).toBe(testEmail);
})

test("can get funtion getRole", () => {
    const testRole = "Engineer";
    const engineer = new Engineer("Sam", "1", "email@email.com", "github");

    expect(engineer.getRole()).toBe(testRole);
})

test("can get funtion Github", () => {
    const testGithub = "github";
    const engineer = new Engineer("Sam", "1", "email@email.com", testGithub);

    expect(engineer.getGithub()).toBe(testGithub);
})