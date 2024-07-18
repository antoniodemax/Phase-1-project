//adds an event Listener to the object
document.addEventListener("DOMContentLoaded", function () {
    
  
    // Kids data and related functions
    let kidsData = []; // Store all kids data
  
    // Function to fetch kids data from the specified endpoint
    async function fetchKids() {
      try {
        const response = await fetch("https://project-backend-eta.vercel.app/kids");
        kidsData = await response.json();
        displayKids(kidsData);
      } catch (error) {
        console.error("Error fetching kids:", error);
      }
    }
  
    // Function to display kids in the browser
    function displayKids(kidsData) {
      const kidsContainer = document.getElementById("kidsContainer");
      kidsContainer.innerHTML = "";
      kidsData.forEach((kid) => {
        const kidElement = document.createElement("div");
        kidElement.classList.add("kid");
        kidElement.innerHTML = `
          <img src="${kid.image}" alt="${kid.name}" style="width: 300px; height: 200px;">
          <p>Name: ${kid.name}</p>
          <p>Age: ${kid.age}</p>
          <p>County: ${kid.county}</p>
          <p>Hobbies: ${kid.hobbies.join(", ")}</p>
          <button class="like-button" data-id="${kid.id}">Like (${kid.likes})</button>
          <button class="begin-button">BEGIN PROCESS</button>
        `;
        kidsContainer.appendChild(kidElement);
  
        const beginButton = kidElement.querySelector(".begin-button");
        beginButton.addEventListener("click", function () {
          alert(`Thank you for choosing ${kid.name}. You can now begin your process.`);
        });
      });
  
      // Add event listeners to like buttons
      const likeButtons = document.querySelectorAll(".like-button");
      likeButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const kidId = button.getAttribute("data-id");
          const kid = kidsData.find((kid) => kid.id === kidId);
          kid.likes++;
          button.textContent = `Like (${kid.likes})`;
        });
      });
    }
  
    const submitButton = document.querySelector(".form-submit");
    submitButton.addEventListener("click", function () {
      alert("Thank you for contacting us. We will get back to you as soon as possible.");
    });
  
    // Fetch kids data from the specified endpoint when the page loads
    fetchKids();
  
    // Get the search input element
    const searchInput = document.getElementById("searchInput");
  
    // Add event listener for input change
    searchInput.addEventListener("input", function () {
      const searchString = searchInput.value.trim().toLowerCase();
      const filteredKids = kidsData.filter((kid) =>
        kid.county.toLowerCase().includes(searchString)
      );
      displayKids(filteredKids);
    });
  
    // New hover effect functionality
    function splitScreen(){
    const leftSection = document.querySelector(".split-landing-left");
    const rightSection = document.querySelector(".split-landing-right");
    const container = document.querySelector(".split-landing-container");
  
    // Add event listeners for hover effects
    leftSection.addEventListener("onclick", () => {
      container.classList.add("split-landing-hover-left");
    });
  
    leftSection.addEventListener("onclick", () => {
      container.classList.remove("split-landing-hover-left");
    });
  
    rightSection.addEventListener("onclick", () => {
      container.classList.add("split-landing-hover-right");
    });
  
    rightSection.addEventListener("onclick", () => {
      container.classList.remove("split-landing-hover-right");
    });
  }
  splitScreen();
  });
