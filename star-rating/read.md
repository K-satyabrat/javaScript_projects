
# Star Rating System: Code Explanation

### 🔧 1. Initial Setup

```js
const stars = document.querySelectorAll(".fa-star-o");
const selectedValueText = document.querySelector(".selected-rating-value");

let currentTotalSelectedStars = -1;
```

- `stars`: Selects all elements with class `.fa-star-o` (empty stars).
- `selectedValueText`: Gets the DOM element showing selected rating.
- `currentTotalSelectedStars`: -1 initially means no rating is selected.

---

### 🔁 2. Loop Over Each Star

```js
stars.forEach((starItem, index) => {
  starItem.dataset.rating = index + 1;
```

- Assigns `data-rating` to each star (1 to 5).

#### ➕ Add Event Listeners

```js
  starItem.addEventListener("mouseover", handleMouseOver);
  starItem.addEventListener("click", handleClick);
  starItem.addEventListener("mouseleave", handleMouseLeave);
});
```

Each star listens for:

- `mouseover`: Hover preview
- `click`: Final selection
- `mouseleave`: Reset to selected

---

### 🖱️ 3. handleMouseOver

```js
function handleMouseOver(event) {
  const currentRatingValue = event.target.dataset.rating;
  if (!currentRatingValue) return;
  else handleUpdateRating(currentRatingValue);
}
```

- Gets rating from `data-rating`
- Calls `handleUpdateRating()` to highlight stars up to that rating

---

### ⭐ 4. handleUpdateRating

```js
function handleUpdateRating(getCurrentRatingValue) {
  for (let i = 0; i < 5; i++) {
    if (i < getCurrentRatingValue) {
      stars[i].classList.replace("fa-star-o", "fa-star");
    } else {
      stars[i].classList.replace("fa-star", "fa-star-o");
    }
  }
}
```

- Loops over 5 stars
- Fills stars less than rating index, empties rest

---

### 🖱️✅ 5. handleClick

```js
function handleClick(event) {
  const currentRatingValue = event.target.dataset.rating;
  currentTotalSelectedStars = currentRatingValue;
  handleUpdateRating(currentTotalSelectedStars);
  selectedValueText.textContent = currentTotalSelectedStars;
}
```

- Saves selected rating
- Updates stars visually
- Displays selected value in DOM

---

### 🖱️❌ 6. handleMouseLeave

```js
function handleMouseLeave(event) {
  handleUpdateRating(currentTotalSelectedStars);
}
```

- Resets stars back to last selected value on mouse leave

---

### ✅ Summary of Flow

1. **Hover** → Temporarily fills stars.
2. **Click** → Sets selected rating.
3. **Mouse leaves** → Resets to selected rating.
4. **Text** → Shows selected value.

---

### ✅ Example UI HTML

```html
<div class="star-container">
  <i class="fa fa-star-o"></i>
  <i class="fa fa-star-o"></i>
  <i class="fa fa-star-o"></i>
  <i class="fa fa-star-o"></i>
  <i class="fa fa-star-o"></i>
</div>
<p>Selected rating: <span class="selected-rating-value">0</span></p>
```
