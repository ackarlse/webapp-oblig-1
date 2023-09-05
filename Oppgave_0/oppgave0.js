// Oppgave 1
let removeBtn = document.getElementById("remove-btn");
removeBtn.addEventListener("click", () => {
  let removeText = document.getElementById("remove");
  removeText.remove();
});
// Oppgave 2
let changeBtn = document.getElementById("change-btn");
changeBtn.addEventListener("click", () => {
  let changeText = document.getElementById("change");
  changeText.innerHTML =
    '“Be nice to nerds. Chances are you will end up working for one."';
});
// Oppgave 3
let inputBox = document.getElementById("input");
inputBox.addEventListener("input", () => {
  let inputText = document.getElementById("input-text");
  inputText.innerHTML = inputBox.value;
});
// Oppgave 4
let addItemBtn = document.getElementById("write-list");
addItemBtn.addEventListener("click", () => {
  let createList = document.getElementById("ul");
  const myList = ["item one", "item two", "item three"];
  myList.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.textContent = item;
    createList.appendChild(listItem);
  });
});

// Oppgave 5
const selectValue = document.getElementById("select");
const createButton = document.getElementById("create");
const section = document.getElementById("placeholder");
const addText = document.getElementById("text");

createButton.addEventListener("click", () => {
  let html = document.createElement(selectValue.value);
  html.innerHTML = addText.value;
  section.appendChild(html);
  console.log(section);
});

// Oppgave 6
const removeButton = document.getElementById("remove-li");

removeButton.addEventListener("click", () => {
  const removeList = document.querySelector("#list li");
  removeList.remove();
});

// Oppgave 7
const nameInput = document.getElementById("name");
const disButton = document.getElementById("order");
nameInput.addEventListener("keyup", () => {
  const inputValue = nameInput.value.length;
  if (inputValue > 4) {
    disButton.style.borderColor = "red";
    disButton.disabled = true;
  }
});

// Oppgave 8
const childrenList = document.querySelectorAll(".children li");
const nodeListToArray = Array.from(childrenList);
const childBtn = document.getElementById("color");

childBtn.addEventListener("click", () => {
  for (var i = 0; nodeListToArray.length > i; i++) {
    if (nodeListToArray.indexOf(nodeListToArray[i]) % 2 === 0) {
      nodeListToArray[i].style.border = "1px solid green";
    } else {
      nodeListToArray[i].style.border = "1px solid pink";
    }
  }
});
