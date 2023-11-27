
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
	const toastContent = document.querySelector("#toast-content");
	toastContent.className = "show";
	setTimeout(function(){
		toastContent.className = toastContent.className.replace("show", "");}, 6000);
	}