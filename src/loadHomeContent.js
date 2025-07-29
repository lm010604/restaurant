import restaurantImage from "../restaurant.jpg";

export function loadHomeContent() {
    const contentDiv = document.querySelector("#content");
    const header = document.createElement("h1");
    header.textContent = "My Restaurant";
    const img = document.createElement("img");
    img.src = restaurantImage;
    img.alt = "Image of restaurant";
    const text = document.createElement("p");
    text.textContent = "My restaurant";
    contentDiv.appendChild(header);
    contentDiv.appendChild(img);
    contentDiv.appendChild(text);
}
