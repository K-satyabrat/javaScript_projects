const postListContainer = document.querySelector(".post-list-container");

//fetch using xhr

function fetchUsingXhr() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      displayData(xhr.response);
    } else {
      console.log(" error occured");
    }
  };
}

function fetchUsingFetchMethod() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  fetchRequest
    .then((response) => response.json())
    .then((result) => displayData(result))
    .catch((e) => console.log(e));
}

async function fetchUsingAsynCAwaitMethod(){
  
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
      });

      const result = await response.json();
      displayData(result)
}

function displayData(post) {
  postListContainer.innerHTML = post
    .map(
      (postItem) => `
<div class="post-item">
<h3>${postItem.title}</h3>
<p>${postItem.title}</p>
</div>`
    )
    .join("");
}

// fetchUsingXhr();
// fetchUsingFetchMethod()
fetchUsingAsynCAwaitMethod()

/*🔴 Problem:
The .map() method returns an array, but innerHTML expects a string, not an array. So when you assign it directly, the array is implicitly converted to a string using .toString(), which joins array items with commas.

✅ Solution:
You need to .join("") the mapped array to combine it into a single string without commas. */
