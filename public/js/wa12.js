const button               = document.querySelector('.button');
const output               = document.querySelector('.output');
const alert                = document.querySelector('.phone-form-response');
const phone_error_response = document.querySelector('.phone-error-response');
let phone_content          = document.querySelector('.phone');

button.addEventListener('click', updateOutput);


function updateOutput() {
	console.log("updateOutput() called");
	computePhoneNumber();
	output.textContent = phone_content.value;
}


function phoneNumberRegex(number) {
	console.log("phoneNumberRegex() called");
	let regex = /^\d{3}-\d{3}-\d{4}$/;  // 123-456-7890
	return regex.test(number);  // False: if number does not match regex pattern (123-456-789)
                                // True: if number matches regex pattern (123-456-7890)
}


function alertDisappear() {
	console.log("alertDisappear() called");
	phone_error_response.textContent = "";
	alert.style.display              = "none";

}


function computePhoneNumber() {
	console.log("computePhoneNumber() called");
	let number = phone_content.value;
	if (phoneNumberRegex(number)) {
		output.textContent = number;
	}
	else {
		alert.style.display              = "block";
		phone_error_response.textContent = "Invalid phone number";
		output.textContent               = "";

		setTimeout(alertDisappear, 3000);
	}
}
