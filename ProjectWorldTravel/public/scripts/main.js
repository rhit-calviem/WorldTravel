// Get the button element
var button = document.getElementById("start-button");

button.addEventListener("click", function() {
  // Remove the selected city from local storage
  localStorage.removeItem('selectedCity');
  // Redirect to the second page
  window.location.href = "search.html";
});


// Add a click event listener to the button
button.addEventListener("click", function() {
  // Redirect to the second page
  window.location.href = "search.html";
});


const destinationButtons = document.querySelectorAll('.destination-button');

// Add event listener to each button
destinationButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the city name from the button's data attribute
        const cityName = this.dataset.city;

        // Store the clicked city name in local storage
        localStorage.setItem('selectedCity', cityName);

        // Redirect to preference.html
        window.location.href = "search.html";
    });
});
