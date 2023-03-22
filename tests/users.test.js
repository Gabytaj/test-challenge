// You already have the methods imported
const { default: expect } = require('expect');
const {getUser, getUsers} = require('../users');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

test("regresa el array de users", () => {
    expect(getUsers()).toEqual(users);
});

test("Muestra el usuario con su ID especifico", () => {
    expect(getUser(5)).toEqual({ id: 3, username: "goosemotionless"});
});
// READ documentation