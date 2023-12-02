const registrationButton = document.querySelector("#submit-registration-button");
const errorMessage = document.querySelector(".error-message");
const registrationInputs = document.querySelectorAll(".registration-input");
const registrationToastContent = document.querySelector("#registration-toast-content")
const registrationRadioInputs = document.querySelectorAll(".radio-input");

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

Array.from(registrationInputs).forEach((registrationInput)=>{
	registrationInput.addEventListener("input", ()=>{
		errorMessage.style.display = "none";
	});
});

function showRegistrationToast(){
	registrationToastContent.className = "show";
	setTimeout(function(){
		registrationToastContent.className = registrationToastContent.className.replace("show", "");
	}, 6000);
}


