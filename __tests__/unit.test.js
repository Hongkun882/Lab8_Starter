// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2

test("check if the phone number is valid 1", () => {
  expect(functions.isPhoneNumber("(123)793898")).toBe(false);
});

test("check if the phone number is valid 2", () => {
  expect(functions.isPhoneNumber("82ji2j0020j")).toBe(false);
});

test("check if the phone number is valid 3", () => {
  expect(functions.isPhoneNumber("(123)793-3898")).toBe(true);
});

test("check if the phone number is valid 4", () => {
  expect(functions.isPhoneNumber("(123)799-9898")).toBe(true);
});

test("check if the email is valid 1", () => {
  expect(functions.isEmail("asdkfnmkadnfkd")).toBe(false);
});

test("check if the email is valid 2", () => {
  expect(functions.isEmail("wmefokm03i40mf")).toBe(false);
});

test("check if the email is valid 3", () => {
  expect(functions.isEmail("abcdefd@gmail.com")).toBe(true);
});

test("check if the email is valid 4", () => {
  expect(functions.isEmail("jj8f34@outlook.com")).toBe(true);
});

test("check if the password is strong 1", () => {
  expect(functions.isStrongPassword("123")).toBe(false);
});

test("check if the password is strong 2", () => {
  expect(functions.isStrongPassword("asdklfnfsdalkfadsfnffd")).toBe(false);
});

test("check if the password is strong 3", () => {
  expect(functions.isStrongPassword("abcdefdbb")).toBe(true);
});

test("check if the password is strong 4", () => {
  expect(functions.isStrongPassword("jin8u8jb")).toBe(true);
});

test("check if the date is valid 1", () => {
  expect(functions.isDate("1234567")).toBe(false);
});

test("check if the date is valid 2", () => {
  expect(functions.isDate("0987335")).toBe(false);
});

test("check if the date is valid 3", () => {
  expect(functions.isDate("11/04/2022")).toBe(true);
});

test("check if the date is valid 4", () => {
  expect(functions.isDate("12/09/3003")).toBe(true);
});

test("check if the hex color code is valid 1", () => {
  expect(functions.isHexColor("e9wr8j")).toBe(false);
});

test("check if the hex color code is valid 2", () => {
  expect(functions.isHexColor("ewri98n")).toBe(false);
});

test("check if the hex color code is valid 3", () => {
  expect(functions.isHexColor("#9B4E3E")).toBe(true);
});

test("check if the hex color code is valid 4", () => {
  expect(functions.isHexColor("#60413B")).toBe(true);
});
 

