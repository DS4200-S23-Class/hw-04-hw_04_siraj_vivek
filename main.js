

let svg = document.getElementById("graph");

// adds or removes border to a clicked circle.
svg.addEventListener("click", function(event) {
  if (event.target.tagName == "circle") {
    if (event.target.style.stroke) {
      event.target.style.stroke = "";
    } else {
      event.target.style.stroke = "MediumVioletRed";
      event.target.style.strokeWidth = "5px";
    }
  }
});


// Get the output div element by ID
let output = document.getElementById("lastCircle");
// retruns coordinate of a clicked cicle
svg.addEventListener("click", function(event) {
  if (event.target.tagName == "circle") {
    let x = event.target.getAttribute("cx");
    let y = event.target.getAttribute("cy");
    output.innerHTML = "last point clicked coordinates: (" + x + ", " + y + ")";
  }
});

// adds point to graph
// doesnt scale coordinates correctly
function submitPoint() {
  let graph = document.getElementById("graph");
  let xInput = document.getElementById("framework1");
  let xOutput = xInput.options[xInput.selectedIndex].text;
  let xCoor = (xOutput * 40) + 5;
  let yInput = document.getElementById("framework2");
  let yOutput = yInput.options[yInput.selectedIndex].text;
  let yCoor = ((10 - yOutput) * 40) + 5;
  console.log(xCoor);
  console.log(yCoor);
  graph.innerHTML += "<circle class='point' cx='" + xCoor + "' cy='" + yCoor + "' r='15'></circle>"
}


