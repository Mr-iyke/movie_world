"use strict";

let log = console.log;

const hamburger = document.querySelector(".nav-btn");
const menu = document.querySelector("nav");
const search = document.querySelector(".material-symbols-outlined");
const searchbar = document.querySelector(".search-container");
const bars = document.getElementsByClassName(".bar");
let isShow = false;

hamburger.addEventListener("click", (e) => {
  if (isShow) {
    isShow = false;
    menu.style.display = "none";
    searchbar.style.display = "none";

  } else {
    isShow = true;
    menu.style.display = "flex";
  }
});

menu.addEventListener("click", (e) => {
  if (isShow) {
    isShow = false;
    menu.style.display = "none";
  } else {
    isShow = true;
    menu.style.display = "flex";
  }
});

search.addEventListener("click", (e) => {
  if (isShow) {
    isShow = false;
    searchbar.style.display = "none";
    menu.style.display = "none";
  } else {
    isShow = true;
    searchbar.style.display = "flex";
  }
});

searchbar.addEventListener("click", (e) => {
  if (isShow) {
    isShow = false;
    searchbar.style.display = "none";
  } else {
    isShow = true;
    searchbar.style.display = "flex";
  }
});
