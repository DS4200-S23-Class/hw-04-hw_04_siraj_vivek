var e = document.getElementById("framework1");
var text = e.options[e.selectedIndex].text;
console.log(text);
function buttonClicked() {
  console.log("button was clicked!");

  // select the element
  let buttonDiv = document.getElementById("button-div");

  buttonDiv.innerHTML = concat;
}


// adds new points based on input
function submitPoint() {
    // gets new coordinate points
    let xInput = document.getElementById("framework1");
    var xOutput = xInput.options[xInput.selectedIndex].text;
    let xCoor = (xOutput * 40) + 5
    let yInput = document.getElementById("framework2");
    var yOutput = yInput.options[yInput.selectedIndex].text;
    let yCoor = ((10 - yOutput) * 40) + 5
    console.log(xCoor);
    console.log(yCoor);
    let graph = document.getElementById("graph");
    graph.innerHTML += "<circle class='point' cx='" + xCoor + "' cy='" + yCoor + "' r='10'></circle>"
}



