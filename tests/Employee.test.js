const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

//can create instance of obj (can I create a new instance of my object from my class)

test("can I create a new instance of my object from my class", ()=>{
    const employee = new Employee("Sam","1","email@email.com");
    expect(employee.name).toBe("Sam")
})

test("can set name via new instance of my object from my class ", () => {
    const testName="Sam"
    const employee = new Employee(testName, "1", "email@email.com");
    expect(employee.name).toBe(testName)
})

test("can get function getName = ", () => {
    const testName = "Sam"
    const employee = new Employee(testName, "1", "email@email.com");
    expect(employee.getName()).toBe(testName)
})

test("can get function getId = ", () => {
    const testId = "1"
    const employee = new Employee("Sam", testId, "email@email.com");
    expect(employee.getId()).toBe(testId)
})

test("can get function getName = ", () => {
    const testRole = "Employee"
    const employee = new Employee("Sam", "1", "email@email.com");
    expect(employee.getRole()).toBe(testRole)
})