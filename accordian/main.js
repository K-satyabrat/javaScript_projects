const accordionData = [
  {
    id: 1,
    title: "What is your project about?",
    content:
      "This project is focused on building a scalable web application using modern technologies like Node.js, Express, MongoDB, and React.",
  },
  {
    id: 2,
    title: "Which technologies are used?",
    content:
      "The stack includes Node.js for backend, Express.js as the framework, MongoDB as the database, and React for the frontend.",
  },
  {
    id: 3,
    title: "How is the data stored?",
    content:
      "All the data is stored in MongoDB collections and accessed via Mongoose in the Node.js backend.",
  },
  {
    id: 4,
    title: "Does it support real-time features?",
    content:
      "Yes, real-time communication is handled using Socket.io for chat and notification systems.",
  },
  {
    id: 5,
    title: "Is the project mobile-friendly?",
    content:
      "Absolutely! The frontend is responsive, and there’s also a mobile version built using React Native.",
  },
];

const accordionWrapper = document.querySelector(".accordion");

function createaccordion() {
  accordionWrapper.innerHTML = accordionData
    .map(
      (dataItem) => `
    <div class="accordion-item">
    <div class= "accordion-title">
    <h3>${dataItem.title}</h3>
    <i class= "fa-solid fa-arrow-up"></i>
     </div>
      <div class= "accordion-content">
      <p> ${dataItem.content}</p>
    </div>
    </div>
    `
    )
    .join("   ");
}

createaccordion();

const getAccordianTitle = document.querySelectorAll(".accordion-title");
console.log(getAccordianTitle);

getAccordianTitle.forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove(".active");
    } else {
      let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");
      getAlreadyAddedActiveClasses.forEach((currentActiveItem) => {
        currentActiveItem.classList.remove("active");
      });
      currentItem.classList.add("active");
    }
  });
});
