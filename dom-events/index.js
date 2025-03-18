// get element by tag name
document.getElementsByTagName("h1")[0];
// get element by css selector
document.querySelector("#list");
// crate new paragraph and save it in conastant
var newParagraph = document.createElement("p");
// Add text to the new pargraph
newParagraph.textContent = "Hello, this is the created paragraph";
// append element
var addItemsContent = document.getElementsByClassName("add-items");
addItemsContent[0].append(newParagraph);
//remove element
var spanElement = document.getElementsByTagName("span")[0];
spanElement.remove();
// Add Eventlistener on key
document.addEventListener("keypress", function (event) {
    console.log("enent", event);
});
// Add and remove list items
var itemInput = document.querySelector("#itemInput");
var addButton = document.querySelector("#addButton");
var list = document.querySelector("#list");
function addListItem() {
    var listItem = document.createElement("li");
    var listItemValue = itemInput.value;
    newParagraph.remove();
    if (listItemValue !== "") {
        // added input value as list item text
        listItem.textContent = listItemValue;
        // display listlitem on the screen
        list.append(listItem);
        // clear input value after adding it to the list
        itemInput.value = "";
        itemInput.focus();
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        listItem.append(deleteButton);
        deleteButton.style.margin = "5px";
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });
    }
}
addButton.addEventListener("click", function () { return addListItem(); });
itemInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addListItem();
    }
});
