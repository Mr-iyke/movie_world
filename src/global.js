"use strict";

let log = console.log;

const hamburger = document.querySelector(".nav-btn");
const menu = document.querySelector("nav");
const list = document.querySelector(".order");
const search = document.querySelector(".material-symbols-outlined");
const searchbar = document.querySelector(".search-container");
const searchbox = document.querySelector(".search-box");
const bars = document.getElementsByClassName(".bar");
const listers = document.querySelectorAll(".listers");
const texts = document.querySelectorAll(".list-icon");
let isMenuOpen = false; // Track menu state
let isSearchOpen = false; // Track menu state

document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with class "clickers"
  var clickers = document.querySelectorAll(".clickers");

  // Add click event listener to each "clickers" element
  clickers.forEach(function (clicker) {
    clicker.addEventListener("click", function () {
      // Toggle the visibility of the next sibling element with class "listers"
      var listers = this.nextElementSibling;
      listers.classList.toggle("show");

      // Toggle the rotation for the .list-icon inside the clicked clicker
      var text = this.querySelector(".list-icon");
      text.classList.toggle("rotate");
    });
  });
});

function openMenu() {
  if (isSearchOpen) {
    // Close search bar if open before opening menu
    isSearchOpen = false;
    searchbar.style.transform = "translateX(100%)";
    searchbar.classList.add("slider-close");
    searchbar.classList.remove("slider-open");
    searchbox.classList.add("slider-close");
    searchbox.classList.remove("slider-open");
  }

  if (!isMenuOpen) {
    isMenuOpen = true;
    menu.style.transform = "translateX(0)";
    menu.classList.remove("slider-close-nav");
    menu.classList.add("slider-open-nav");
    list.classList.remove("slider-close-nav");
    list.classList.add("slider-open-nav");
  } else {
    isMenuOpen = false;
    menu.style.transform = "translateX(100%)";
    menu.classList.add("slider-close-nav");
    menu.classList.remove("slider-open-nav");
    list.classList.add("slider-close-nav");
    list.classList.remove("slider-open-nav");
    listers.forEach((lister) => lister.classList.remove("show"));
    texts.forEach((text) => text.classList.remove("rotate"));
  }
}

function openSearch() {
  if (isMenuOpen) {
    // Close menu if open before opening search
    openMenu(); // Call openMenu to close menu
  }

  if (!isSearchOpen) {
    searchbar.style.transform = "translateX(0)";
    searchbar.classList.remove("slider-close");
    searchbar.classList.add("slider-open");
    searchbox.classList.remove("slider-close");
    searchbox.classList.add("slider-open");
    isSearchOpen = true;
  } else {
    searchbar.style.transform = "translateX(100%)";
    searchbar.classList.add("slider-close");
    searchbar.classList.remove("slider-open");
    searchbox.classList.add("slider-close");
    searchbox.classList.remove("slider-open");
    isSearchOpen = false;
    listers.forEach((lister) => lister.classList.remove("show"));
    texts.forEach((text) => text.classList.remove("rotate"));
  }
}

hamburger.addEventListener("click", openMenu);
search.addEventListener("click", openSearch);

menu.addEventListener("click", function (event) {
  if (event.target === menu) {
    openMenu();
  }
});

searchbar.addEventListener("click", function (event) {
  if (event.target === searchbar) {
    openSearch();
  }
});
