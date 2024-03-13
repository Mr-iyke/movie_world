"use strict";

let log = console.log;

const hamburger = document.querySelector(".nav-btn");
const menu = document.querySelector("nav");
const list = document.querySelector(".order");
const search = document.querySelector(".material-symbols-outlined");
const searchbar = document.querySelector(".search-container");
const searchbox = document.querySelector(".search-box");
const bars = document.getElementsByClassName(".bar");
let isMenuOpen = false; // Track menu state
let isSearchOpen = false; // Track menu state

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
  }
}

hamburger.addEventListener("click", openMenu);
search.addEventListener("click", openSearch);