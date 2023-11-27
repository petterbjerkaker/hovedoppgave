
const newWebpageRegistration = document.querySelector(".new-website__registration");
newWebpageRegistration.addEventListener("click", ()=>{
	window.open(
		"registration-page.html",
		"RegistrationMelhusMarathon2024",
		
	);
});


const newWebpageContact = document.querySelector(".new-website__contact");
newWebpageContact.addEventListener("click", ()=>{
	window.open(
		"contact-page.html",
		"ContactMelhusMarathon2024",
		
	);
});


const newWebpageInformation = document.querySelector(".new-website__information");
newWebpageInformation.addEventListener("click", ()=>{
	window.open(
		"information-page.html",
		"InformationMelhusMarathon2024",
		
	);
});

function showRegistrationToast(){
	const registrationToastContent = document.querySelector("#toast-content");
	registrationToastContent.className = "show";
	setTimeout(function(){
		registrationToastContent.className = registrationToastContent.className.replace("show", "");}, 6000);
	}



function showContactToast(){
	const contactToastContent = document.querySelector("#contact-toast-content");
	contactToastContent.className = "show";
	setTimeout(function(){
		contactToastContent.className = contactToastContent.className.replace("show", "");}, 6000);
}