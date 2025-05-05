function changeContent() {
    const paragraph = document.getElementById("intro");
    paragraph.textContent = "The text and style have been updated!";
    paragraph.style.color = "white";
    paragraph.style.backgroundColor = "green";
    paragraph.style.padding = "10px";
}

function addItem() {
    const ul = document.getElementById("item-list");
    const li = document.createElement("li");
    li.textContent = "New Item";
    ul.appendChild(li);
}

function removeItem() {
    const ul = document.getElementById("item-list");
    if (ul.lastElementChild) {
        ul.removeChild(ul.lastElementChild);
    }
}
