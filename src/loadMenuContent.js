export function loadMenuContent() {
    const contentDiv = document.querySelector("#content");
    const header = document.createElement("h1");
    header.textContent = "Menu";
    const text = document.createElement("p");
    text.textContent = "My restaurant";
    contentDiv.appendChild(header);
    contentDiv.appendChild(text);
}