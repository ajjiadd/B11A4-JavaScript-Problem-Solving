
**JavaScript-Problem-Solving**
===============

**Project Overview**
-------------------

This project provides a collection of utility functions for various tasks, including calculating VAT, validating contact numbers, determining success based on marks, validating marriage proposals, and calculating sleep time.

**Functions**
-------------

### 1. `calculateVAT(price)`

Calculates the VAT (Value-Added Tax) for a given price.

* Parameters: `price` (number) - the price for which to calculate VAT
* Returns: `vat` (number) - the calculated VAT, or "Invalid" if the input is invalid

### 2. `validContact(contact)`

Validates a contact number.

* Parameters: `contact` (string) - the contact number to validate
* Returns: `true` if the contact number is valid, `false` otherwise, or "Invalid" if the input is invalid

### 3. `willSuccess(marks)`

Determines whether a student will succeed based on their marks.

* Parameters: `marks` (array of numbers) - the student's marks
* Returns: `true` if the student will succeed, `false` otherwise, or "Invalid" if the input is invalid

### 4. `validProposal(person1, person2)`

Validates a marriage proposal between two people.

* Parameters:
	+ `person1` (object) - the first person's details (age and gender)
	+ `person2` (object) - the second person's details (age and gender)
* Returns: `true` if the proposal is valid, `false` otherwise, or "Invalid" if the input is invalid

### 5. `calculateSleepTime(times)`

Calculates the total sleep time from an array of time intervals.

* Parameters: `times` (array of numbers) - the time intervals in seconds
* Returns: an object with `hour`, `minute`, and `second` properties representing the total sleep time, or "Invalid" if the input is invalid

**Usage**
-----

To use these functions, simply call them with the required parameters. For example:
```javascript
const vat = calculateVAT(100);
console.log(vat); // Output: 7.5

const isValidContact = validContact("01234567890");
console.log(isValidContact); // Output: true

const willStudentSucceed = willSuccess([50, 60, 70]);
console.log(willStudentSucceed); // Output: true

const isValidProposal = validProposal({ age: 25, gender: "male" }, { age: 22, gender: "female" });
console.log(isValidProposal); // Output: true

const sleepTime = calculateSleepTime([3600, 1800, 900]);
console.log(sleepTime); // Output: { hour: 2, minute: 30, second: 0 }
```
**Contributing**
------------

To contribute to this project, please fork the repository and submit a pull request with your changes. Make sure to follow the existing coding style and add tests for any new functionality.

**License**
-------

This project is licensed under the MIT License. See the LICENSE file for details.