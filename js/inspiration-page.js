//change class names!!

const filterButtons = document.querySelectorAll(".filter-button");
const listItems = document.querySelectorAll(".list-item");
const listItemsContainer = document.querySelector(".list-items");

filterButtons.forEach(filterButton =>{
	const filterList = (event) => {
		const currentButton = event.currentTarget;
		const currentButtonFilterBy = currentButton.dataset.filterBy;
		const filteredItems = [...listItems].filter(item => {
			if(currentButtonFilterBy === "*") {
				return true;
			}else{
				return item.dataset.type === currentButton.dataset.filterBy;
			}
		});
		
		listItemsContainer.innerHTML = "";

		filteredItems.forEach(item => {
			listItemsContainer.appendChild(item);
		});

	}

	filterButton.addEventListener("click", filterList);
});