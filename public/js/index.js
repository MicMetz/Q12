const button               = document.querySelector('.button');
const output               = document.querySelector('.output');
const alert                = document.querySelector('.phone-form-response');
const phone_error_response = document.querySelector('.phone-error-response');
let phone_content          = document.querySelector('.phone');

button.addEventListener('click', updateOutput);


function updateOutput() {
	console.log("updateOutput() called");
	computePhoneNumber(phone_content.value);
	output.textContent = phone_content.value;
}


function phoneNumberRegex(number) {
	console.log("phoneNumberRegex() called");
	let regex = /^\d{3}-\d{3}-\d{4}$/;  // 123-456-7890
	return regex.test(number);  // False: if number does not match regex pattern (123-456-789)
                                // True: if number matches regex pattern (123-456-7890)
}


function successAlertDisappear() {
	console.log("successAlertDisappear() called");

}


function errorAlertDisappear() {
	console.log("alertDisappear() called");
	phone_error_response.textContent = "";
	alert.style.display              = "none";

}


function computePhoneNumber(number) {
	/**
	 * Regex Caller Function
	 * Evaluates the phone number input by the user
	 * @param number: string
	 * @return: An alert message is displayed to the user
	 */
	console.log("computePhoneNumber() called");
	if (phoneNumberRegex(number)) {
		output.textContent = number;

	}
	else {
		alert.style.display              = "block";
		phone_error_response.textContent = "Invalid phone number";
		output.textContent               = "";

		setTimeout(errorAlertDisappear, 3000);
	}
}
