var firstNameEl = document.getElementById("replacef");
var lastNameEl = document.getElementById("replacel");
var header = document.getElementById("hid");

header.onclick = function(){
	header.innerHTML = "Hello.";
};

var firstName = "Philip"; //document.getElementByID("firstname").value;
var lastName = "Moss"; //document.getElementByID("lastname").value;




firstNameEl.onclick = function(){
	firstNameEl.innerHTML = firstName;
};	

lastNameEl.onclick = function(){
	lastNameEl.innerHTML = lastName;
};

