






function showRegistrationToast(){
	const registrationToastContent = document.querySelector("#toast-content");
	registrationToastContent.className = "show";
	setTimeout(function(){
		registrationToastContent.className = registrationToastContent.className.replace("show", "");}, 6000);
	}
