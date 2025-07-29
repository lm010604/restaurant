import "./styles.css";
import { loadHomeContent } from "./loadHomeContent.js";
import { loadMenuContent } from "./loadMenuContent.js";
import { loadAboutContent } from "./loadAboutContent.js";

window.addEventListener("DOMContentLoaded", () => {
  loadHomeContent();
});

const homeTab = document.querySelector("#home-tab");
const menuTab = document.querySelector("#menu-tab");
const aboutTab = document.querySelector("#about-tab");

homeTab.addEventListener("click", () => {
    document.querySelector("#content").innerHTML = "";
    loadHomeContent();
})

menuTab.addEventListener("click", () => {
    document.querySelector("#content").innerHTML = "";
    loadMenuContent();
})

aboutTab.addEventListener("click", () => {
    document.querySelector("#content").innerHTML = "";
    loadAboutContent();
})
