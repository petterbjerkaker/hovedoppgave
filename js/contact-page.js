/*Contact-page contact form*/

const contactButton = document.querySelector("#contact-button");
const errorMessage = document.querySelector(".error-message");
const contactInputs = document.querySelectorAll(".contact-input");
const contactToastContent = document.querySelector("#contact-toast-content");


/*If any of the inputs are empty when submit-button is clicked, show error-message. 
If all inputs are filled, show success toast*/

contactButton.addEventListener("click", ()=>{
	const isInputEmpty = Array.from(contactInputs).some(
		(input)=>input.value.trim()===""
	);
	if (isInputEmpty){
		errorMessage.style.display = "block";
	}else{
		errorMessage.style.display = "none";
		showContactToast();
	}
});

/*If input begins, error-message disappears.*/

Array.from(contactInputs).forEach((contactInput) =>{
	contactInput.addEventListener("input", ()=>{
		errorMessage.style.display = "none";
	})
});


/*Success toast appears for six seconds, before disappearing*/

function showContactToast(){
	contactToastContent.classList.add("show");
	setTimeout(function(){
		contactToastContent.classList.remove("show");
	}, 6000);
}



