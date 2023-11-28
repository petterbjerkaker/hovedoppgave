
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



const slideshow = document.querySelector(".slideshow");
const slides = slideshow.querySelectorAll(".slideshow__slide");
const controls = slideshow.querySelectorAll(".slideshow__control-button");


let index = 6;
const totalSlides = slides.length;
const lastIndex = slides.length - 1;



const goToPreviousSlide = () => {
	if(index === 0){
		index = lastIndex;
	}else{
		index = index - 1;
	}

	slides.forEach(slide=>{
		slide.classList.remove("slideshow__slide--visible");
	 });
	slides[index].classList.add("slideshow__slide--visible");
};

const goToNextSlide = () => {
	if (index < lastIndex) {
		index = index + 1;
	}else{
		index = 0;
	}
	

	slides.forEach(slide=>{
		slide.classList.remove("slideshow__slide--visible");
	 });
	slides[index].classList.add("slideshow__slide--visible");
};


const changeSlide = (event) =>{
	const button = event.currentTarget;

	if (button.dataset.direction === "previous"){
		goToPreviousSlide();
	}

	if (button.dataset.direction === "next"){
		goToNextSlide();
	}
}


controls.forEach(button =>{
	button.addEventListener("click", changeSlide);
})