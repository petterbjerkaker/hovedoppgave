//change class names!!

/*Filtering for inspiration-page */
const filterButtons = document.querySelectorAll(".filter-button");
const listItems = document.querySelectorAll(".list-item");
const listItemsContainer = document.querySelector(".list-items");

/*If button with data-filter-by "*" is clicked, all distances are shown. 
A button which clears specified distances, and shows the list in its entirety.
Each of the buttons are assigned their designated list of distances. 
Clicking a button filters the list to show only the distance of the button.*/

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