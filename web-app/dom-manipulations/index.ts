const bodyElement: HTMLElement = document.body;
bodyElement.style.backgroundColor = "#000";
bodyElement.style.color = "#fff";

console.log(bodyElement.style.backgroundColor);

let divElements: HTMLCollectionOf<HTMLDivElement> =
  document.getElementsByTagName("div");
console.log(divElements);

let buttonElement: HTMLButtonElement =
  document.getElementsByTagName("button")[0];
buttonElement.style.backgroundColor = "green";
buttonElement.textContent = "About me";

const shops: HTMLElement | null = document.getElementById("shops");

const items: HTMLCollectionOf<Element> =
  document.getElementsByClassName("list-item");
const secondItem: Element = document.getElementsByClassName("list-item")[1];
const thirdItem: Element = items[2];

const firstItem: Element | null = document.querySelector("#shops > .list-item");
console.log(firstItem);

const firstDiv = document.querySelector("div") as HTMLDivElement;
if (firstDiv) {
  firstDiv.style.backgroundColor = "green";
}
