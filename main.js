//adds an event Listener to the object.
document.addEventListener("DOMContentLoaded", function () {
    
    // Declares an empty array.
    let kidsData = []; // Store all kids data fetched from the endpoint.
  
    // Asynchronous function is being declared
    async function fetchKids() {//fetches kids data from the remote endpoint.
      try {
          //Requests kids' data from a specific endpoint.
        const response = await fetch("https://project-backend-eta.vercel.app/kids");
        kidsData = await response.json();//kids' data array is assigned.
        displayKids(kidsData);
      } catch (error) {
        console.error("Error fetching kids:", error);
      }
    }
  
    // Function to display kids in the browser.
    //An array is taken as an argument.
    function displayKids(kidsData) {
      const kidsContainer = document.getElementById("kidsContainer");//A variable is assigned from the HTML element.
      kidsContainer.innerHTML = "";//An empty string from the HTML element is set clearing its contents.
        
      kidsData.forEach((kid) => {//Executes the function of each element in the array.
        const kidElement = document.createElement("div");//creates new HTML and assigns it a variable.
        kidElement.classList.add("kid");//Adds the CSS class.

          //Sets the HTML element into a string for displaying Kids' data.
        kidElement.innerHTML = `
          <img src="${kid.image}" alt="${kid.name}" style="width: 300px; height: 200px;">
          <p>Name: ${kid.name}</p>
          <p>Age: ${kid.age}</p>
          <p>County: ${kid.county}</p>
          <p>Hobbies: ${kid.hobbies.join(", ")}</p>
          <button class="like-button" data-id="${kid.id}">Like (${kid.likes})</button>
          <button class="begin-button">BEGIN PROCESS</button>
        `;
        kidsContainer.appendChild(kidElement);//Appends the 'kidElement' to the 'kidsContainer' element.
  
                  //A variable is assigned when an HTML element with the class 'begin-button' is selected.
          const beginButton = kidElement.querySelector(".begin-button");

          //Adds an event listener and executes a function when a button is clicked.
         beginButton.addEventListener("click", function () {

             //Displays an alert box that includes the child's name
          alert(`Thank you for choosing ${kid.name}. You can now begin your process.`);
        });
      });
  
      // Add event listeners to  the like buttons
      const likeButtons = document.querySelectorAll(".like-button");
      likeButtons.forEach((button) => {
          //Adds event listener to the 'button' element when clicked.
        button.addEventListener("click", () => {

            //Assigns a kid variable extracted from the 'data-id'.
          const kidId = button.getAttribute("data-id");
          const kid = kidsData.find((kid) => kid.id === kidId);
            //Increases the 'likes' property of the kid.
          kid.likes++;
          button.textContent = `Like (${kid.likes})`;//reflects a newlike count.
        });
      });
    }
  
    const submitButton = document.querySelector(".form-submit");
    submitButton.addEventListener("click", function () {
      alert("Thank you for contacting us. We will get back to you as soon as possible.");
    });
  
    // Fetches kids' data from the remote endpoint.
    fetchKids();
  
    // Get the search input element
    const searchInput = document.getElementById("searchInput");
  
    // Add event listener for input change
    searchInput.addEventListener("input", function () {// Adds an event listener when the input value changes.

        //Variable is assigned 'searchString'.
      const searchString = searchInput.value.trim().toLowerCase();
        
        //Filters 'kidsData' array t 
      const filteredKids = kidsData.filter((kid) =>
        kid.county.toLowerCase().includes(searchString)
      );

        //An array is passed as an argument.
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

    //Adds the hover effects to split-screen element.
  splitScreen();
  });
