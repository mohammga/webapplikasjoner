// Oppgave 1
document.getElementById("remove-btn").addEventListener("click", removeText);

function removeText() {
    document.getElementById("remove").innerHTML = "";
}

// Oppgave 2
document.getElementById("change-btn").addEventListener("click", changeText);

function changeText() {
    document.getElementById("change").innerHTML = "Jeg elsker JavaScript :)";
}

// Oppgave 3
document.getElementById("input").addEventListener("change", showText);

function showText() {
    document.getElementById("input-text").innerHTML = document.getElementById("input").value;
}

// Oppgave 4
const myList = ["item one", "item two", "item three"];
let hasListBeenWritten = false;

document.getElementById("write-list").addEventListener("click", writeList);

function writeList() {
    if (hasListBeenWritten) {
        return;
    }

    const ul = document.getElementById("ul");
    for (let i = 0; i < myList.length; i++) {
        let li = document.createElement("li");
        li.textContent = myList[i];
        ul.appendChild(li);
    }

    hasListBeenWritten = true;
    document.getElementById("write-list").removeEventListener("click", writeList);
}

// Oppgave 5
document.getElementById("create").addEventListener("click", createElement);

function createElement() {
    const elementType = document.getElementById("select").value;
    const textContent = document.getElementById("text").value;
    const newElement = document.createElement(elementType);

    newElement.textContent = textContent;
    document.getElementById("placeholder").appendChild(newElement);
}

// Oppgave 6
document.getElementById("remove-li").addEventListener("click", removeListElement);

function removeListElement() {
    const ul = document.getElementById("list");

    if (ul.children.length === 0) {
        return;
    }

    ul.removeChild(ul.lastElementChild);
}

// Oppgave 7
const inputBox = document.getElementById("name");
inputBox.addEventListener("keyup", validate);
const orderButton = document.getElementById("order");

function validate() {
    if (inputBox.value.length > 4) {
        orderButton.disabled = true;
        orderButton.style.border = "2px solid red";
    } else {
        orderButton.disabled = false;
        orderButton.style.border = "";
    }
}

// Oppgave 8
document.getElementById("color").addEventListener("click", function () {
    const listItems = document.querySelectorAll(".children li");

    listItems.forEach((item, index) => {
        if ((index + 1) % 2 === 0) {
            // Partall
            item.style.border = "2px solid pink";
        } else {
            // Oddetall
            item.style.border = "2px solid green";
        }
    });
});