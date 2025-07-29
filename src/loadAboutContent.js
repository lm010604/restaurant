export function loadAboutContent() {
    const contentDiv = document.querySelector("#content");
    const header = document.createElement("h1");
    header.textContent = "About";
    const text = document.createElement("p");
    text.textContent = "We are the best restaurant in the world";
    contentDiv.appendChild(header);
    contentDiv.appendChild(text);
}