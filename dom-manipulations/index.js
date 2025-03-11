var bodyElement = document.body;
bodyElement.style.backgroundColor = "#000";
bodyElement.style.color = "#fff";
console.log(bodyElement.style.backgroundColor);
var divElements = document.getElementsByTagName("div");
console.log(divElements);
var buttonElement = document.getElementsByTagName("button")[0];
buttonElement.style.backgroundColor = "green";
buttonElement.textContent = "About me";
var shops = document.getElementById("shops");
var items = document.getElementsByClassName("list-item");
var secondItem = document.getElementsByClassName("list-item")[1];
var thirdItem = items[2];
var firstItem = document.querySelector("#shops > .list-item");
console.log(firstItem);
var firstDiv = document.querySelector("div");
if (firstDiv) {
  firstDiv.style.backgroundColor = "green";
}
