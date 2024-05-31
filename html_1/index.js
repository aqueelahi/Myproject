<script
let hairLength = {20 15; // Length of hair in centimeters
let isHairClean = true; // Boolean indicating if hair is clean

// Integrate distinct data types
let hairColor = "brown"; // String representing hair color
let numHaircuts = 3; // Number of haircuts

// Implement Mathematical Operations
let hairGrowthRate = 0.5; // Hair growth rate in centimeters per month
let totalHairLength = hairLength + (hairGrowthRate * numHaircuts); // Calculating total hair length after haircuts

// Create decision making with decision structures
if (isHairClean) {
  console.log("Your hair is clean!");
} else {
  console.log("Your hair is dirty. Please wash it.");
}

// Utilize Logical Operators for Complex Condition Evaluation
let isLongHair = (totalHairLength > 20); // Checking if hair length is greater than 20 centimeters
let isBrownHair = (hairColor === "brown"); // Checking if hair color is brown

if (isLongHair && isBrownHair) {
  console.log("You have long brown hair!");
} else {
  console.log("Your hair is either not long enough or not brown.");
}

// Showcase JavaScript Output Techniques
// let outputElement = document.createElement('p');
// outputElement.textContent = `Total hair length after ${numHaircuts} haircuts: ${totalHairLength} cm`;
// document.body.appendChild(outputElement);

document.addEventListener('DOMContentLoaded', function() {
  var dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function(dropdown) {
    var button = dropdown.querySelector('.dropbtn');

    button.addEventListener('click', function(event) {
      event.preventDefault();
      var content = dropdown.querySelector('.dropdown-content');
      content.classList.toggle('show');
    });
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdownContents = document.querySelectorAll('.dropdown-content');
      dropdownContents.forEach(function(content) {
        if (content.classList.contains('show')) {
          content.classList.remove('show');
        }
      });
    }
  });
});
script
