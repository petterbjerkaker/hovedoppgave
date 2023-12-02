const contactButton = document.querySelector("#contact-button");
const errorMessage = document.querySelector(".error-message");
const contactInputs = document.querySelectorAll(".contact-input");
const contactToastContent = document.querySelector("#contact-toast-content");

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

Array.from(contactInputs).forEach((contactInput) =>{
	contactInput.addEventListener("input", ()=>{
		errorMessage.style.display = "none";
	})
});

function showContactToast(){
	contactToastContent.classList.add("show");
	setTimeout(function(){
		contactToastContent.classList.remove("show");
	}, 6000);
}



