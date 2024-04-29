document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".hero .list");
  let currentIndex = 0;
  let isFirstSlideDisplayed = false; // Flag to track if the initial slide has been displayed

  // Select the logo-box element
  const logoBox = document.querySelector(".logo-box");
  const navBox = document.querySelector(".nav-box");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
        if (isFirstSlideDisplayed || i !== 0) {
          slide.classList.add("slide-in"); // Add class to trigger animation for slides other than the first one or if the initial slide has been displayed
          slide.classList.remove("slide-out"); // Remove class to reset animation
          logoBox.classList.add("fade-in");
          navBox.classList.add("black-background");
        }
      } else if (i === currentIndex) {
        slide.classList.add("slide-out"); // Add class to trigger slide-out animation for the current slide
        slide.classList.remove("slide-in"); // Remove class to reset slide-in animation
      } else {
        slide.style.display = "none";
        slide.classList.remove("slide-out"); // Remove class to reset slide-out animation
        slide.classList.remove("slide-in"); // Remove class to reset slide-in animation
      }
    });
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 1; // Reset index to loop back to the second slide
      isFirstSlideDisplayed = true; // Set the flag to true after the initial slide has been displayed
    }
    showSlide(currentIndex);
  }

  // Initial slide display after a delay
  setTimeout(function () {
    showSlide(0); // Display the first slide without animation
    // Start automatic sliding after the initial display
    setInterval(nextSlide, 7000); // Change slide every 7 seconds
  }, 1000); // Wait for 1 second (1000 milliseconds) before displaying the first slide
});

document.addEventListener("DOMContentLoaded", function () {
  const navBox = document.querySelector(".nav-box");
  const scrollThreshold = 50; // Adjust this value as needed

  window.addEventListener("scroll", function () {
    console.log("Scroll event detected!");
    console.log("Scroll Y position:", window.scrollY);

    if (window.scrollY > scrollThreshold) {
      navBox.classList.add("black-background");
      console.log("Added black-background class");
    } else {
      navBox.classList.remove("black-background");
      console.log("Removed black-background class");
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const slides = document.querySelectorAll(".hero .list");
//   let currentIndex = 0;

//   function showInitialSlide() {
//     slides.forEach((slide, i) => {
//       if (i === 0) {
//         slide.style.display = "block"; // Display the first slide without animation
//       } else {
//         slide.style.display = "none"; // Hide other slides initially
//       }
//     });
//   }

//   function showSlide(index) {
//     slides.forEach((slide, i) => {
//       if (i === index) {
//         slide.classList.add("slide-in"); // Add class to trigger animation
//         slide.style.display = "block";
//       } else {
//         slide.classList.remove("slide-in"); // Remove class to reset animation
//         slide.style.display = "none";
//       }
//     });
//   }

//   function nextSlide() {
//     currentIndex++;
//     if (currentIndex >= slides.length) {
//       currentIndex = 0;
//     }
//     showSlide(currentIndex);
//   }

//   function startAutomaticSliding() {
//     setInterval(nextSlide, 5000); // Change slide every 5 seconds
//   }

//   // Initial slide display after a delay
//   setTimeout(function () {
//     showInitialSlide(); // Display the first slide without animation
//     // Start automatic sliding after the initial display
//     setTimeout(startAutomaticSliding, 1000); // Wait for 1 second before starting the automatic sliding
//   }, 1000); // Wait for 1 second (1000 milliseconds) before displaying the first slide
// });
