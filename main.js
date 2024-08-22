// Saving the HTML elements into variables
const inputColor = document.getElementById("input-color");
const colorSchemeBtn = document.getElementById("color-scheme-btn");
const selectElement = document.getElementById("select-element");
const colorsContainer = document.getElementById("colors-container");
const footerEl = document.getElementById("footer");

// Declaring an empty array
let colorsArr = [];

// Adding an event to the scheme button
colorSchemeBtn.addEventListener("click", function () {
 
  //Getting the value of the select element
  const selectElementVal = selectElement.value;

  //Getting the value of the input element
  let colorCode = inputColor.value.slice(1);

  //fetching data from www.thecolorapi.com
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${selectElementVal}&format=json`
  )
    .then((response) => response.json())
    .then((data) => {
      
      for (let color of data.colors) {
        //Pushing the colors into the arry
        colorsArr.push(color.hex.value);

        //displaying  the color-wrapper div into the DOM
        colorsContainer.innerHTML += `<div class='color-wrapper'></div>`;

        //displaying the footer-element div into the DOM
        footerEl.innerHTML += `<div class='footer-element'>${color.hex.value}</div>`;
      }

      //Destructuring colorArr
      const [firstColor, secondColor, thirdColor, fourthColor, fifthColor] =
        colorsArr;

      // displaying the background color for each color-wrapper div
      const boxes = document.getElementsByClassName("color-wrapper");
      
      for (let i = 0; i < boxes.length; i++) {
        if (i === 0) {
          boxes[i].style.backgroundColor = firstColor;
        } else if (i === 1) {
          boxes[i].style.backgroundColor = secondColor;
        } else if (i === 2) {
          boxes[i].style.backgroundColor = thirdColor;
        } else if (i === 3) {
          boxes[i].style.backgroundColor = fourthColor;
        } else {
          boxes[i].style.backgroundColor = fifthColor;
        }
      }
    });
    
  // Reassignment of the colorsArr, colorsContainer and footer elements
  colorsArr = [];
  colorsContainer.innerHTML = ``;
  footerEl.innerHTML = ``;
});
