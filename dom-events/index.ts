// get element by tag name
document.getElementsByTagName("h1")[0];

// get element by css selector
document.querySelector("#list");

// crate new paragraph and save it in conastant
const newParagraph: HTMLParagraphElement = document.createElement("p");

// Add text to the new pargraph
newParagraph.textContent = "Hello, this is the created paragraph";

// append element
const addItemsContent: HTMLCollectionOf<Element> =
  document.getElementsByClassName("add-items");

addItemsContent[0].append(newParagraph);

//remove element
const spanElement: HTMLSpanElement = document.getElementsByTagName("span")[0];
spanElement.remove();

// Add Eventlistener on key
document.addEventListener("keypress", (event) => {
  console.log("enent", event);
});

// Add and remove list items
const itemInput = document.querySelector("#itemInput") as HTMLInputElement;
const addButton = document.querySelector("#addButton") as HTMLButtonElement;
const list = document.querySelector("#list") as HTMLUListElement;

function addListItem() {
  const listItem: HTMLLIElement = document.createElement("li");
  const listItemValue: string | null = itemInput.value;

  newParagraph.remove();

  if (listItemValue !== "") {
    // added input value as list item text
    listItem.textContent = listItemValue;
    // display listlitem on the screen
    list.append(listItem);
    // clear input value after adding it to the list
    itemInput.value = "";
    itemInput.focus();
    const deleteButton: HTMLButtonElement = document.createElement("button");
    deleteButton.textContent = "Delete";
    listItem.append(deleteButton);
    deleteButton.style.margin = "5px";
    deleteButton.addEventListener("click", () => {
      listItem.remove();
    });
  }
}

addButton.addEventListener("click", () => addListItem());

itemInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addListItem();
  }
});
