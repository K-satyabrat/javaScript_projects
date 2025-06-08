const slider = document.querySelector(".slider");

async function fetchImages() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=5",
      {
        method: "GET",
      }
    );
    const result = await response.json();
    if (result && result.length > 0) displayImages(result);
  } catch (error) {
    console.log(error);
  }
}

function displayImages(getImages) {
  slider.innerHTML = getImages
    .map((item) => {
      return `<div class="slider">
        <img src=${item.download_url}  alt =${item.id} />
        </div>`;
    })
    .join("");
}

fetchImages();
