const stars = document.querySelectorAll(".fa-star-o, .fa-star");
const selectedValueText = document.querySelector(".selected-rating-value");

let currentTotalSelectedStars = -1;

stars.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1;

  starItem.addEventListener("mouseover", handleMouseOver);
  starItem.addEventListener("click", handleClick);
  starItem.addEventListener("mouseleave", handleMouseLeave);
  starItem.addEventListener("dblclick", handleDoubleClick); 
});

function handleMouseOver(event) {
  const currentRatingValue = event.target.dataset.rating;
  if (!currentRatingValue) return;
  handleUpdateRating(currentRatingValue);
}

function handleUpdateRating(getCurrentRatingValue) {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentRatingValue) {
      stars[i].classList.replace("fa-star-o", "fa-star");
    } else {
      stars[i].classList.replace("fa-star", "fa-star-o");
    }
  }
}

function handleClick(event) {
  const currentRatingValue = event.target.dataset.rating;
  currentTotalSelectedStars = currentRatingValue;
  handleUpdateRating(currentTotalSelectedStars);
  selectedValueText.textContent = currentTotalSelectedStars;
}

function handleMouseLeave(event) {
  handleUpdateRating(currentTotalSelectedStars);
}


function handleDoubleClick(event) {
  currentTotalSelectedStars = 0; 
  handleUpdateRating(0);         
  selectedValueText.textContent = 0; 
}
