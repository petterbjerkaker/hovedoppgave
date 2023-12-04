/*Registration-page registration-form */

const registrationButton = document.querySelector("#submit-registration-button");
const errorMessage = document.querySelector(".error-message");
const registrationInputs = document.querySelectorAll(".registration-input");
const registrationToastContent = document.querySelector("#registration-toast-content")
const registrationRadioInputs = document.querySelectorAll(".radio-input");


/*If any of the inputs are empty when submit-button is clicked, show error-message. 
If all inputs are filled, show success toast*/

registrationButton.addEventListener("click",()=>{
	const isRadioEmpty = Array.from(registrationRadioInputs).every(
		(input) => !input.checked
	);

	const isInputEmpty = Array.from(registrationInputs).some(
		(input) => input.value.trim() === ""
	);

	if (isRadioEmpty || isInputEmpty) {
		errorMessage.style.display = "block";
	}else{
		errorMessage.style.display = "none";
		showRegistrationToast();
	}
});


/*If input begins, error-message disappears.*/

Array.from(registrationInputs).forEach((registrationInput)=>{
	registrationInput.addEventListener("input", ()=>{
		errorMessage.style.display = "none";
	});
});

/*Success toast appears for six seconds, before disappearing*/

function showRegistrationToast(){
	registrationToastContent.className = "show";
	setTimeout(function(){
		registrationToastContent.className = registrationToastContent.className.replace("show", "");
	}, 6000);
}


