var firstNameEl = document.getElementByID("replacef");
var lastNameEl = document.getElementByID("replacel");

var firstName = document.getElementByID("firstname").value;
var lastName = document.getElementByID("lastname").value;

firstNameEl.innerHTML = firstName;
lastNameEl.innerHTML = lastName;