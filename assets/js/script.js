document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-list a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      navLinks.forEach(function (navLink) {
        navLink.classList.remove("active-link");
      });

      this.classList.add("active-link");

      var targetId = this.getAttribute("href").substring(1);

      var targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  navLinks[0].classList.add("active-link");

  window.addEventListener("scroll", function () {
    navLinks.forEach(function (navLink) {
      var targetId = navLink.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      if (
        targetElement.offsetTop <= window.scrollY &&
        targetElement.offsetTop + targetElement.offsetHeight > window.scrollY
      ) {
        navLinks.forEach(function (navLink) {
          navLink.classList.remove("active-link");
        });

        navLink.classList.add("active-link");
      }
    });
  });

  var continueButton = document.querySelector(".continue");

  continueButton.addEventListener("click", function () {
    var projectsElement = document.getElementById("projects");

    projectsElement.scrollIntoView({
      behavior: "smooth",
    });
  });
});


// TypeWtriter
document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("passion");
  const texts = ["Coding", "Problem Solving", "Teamwork", "UI/UX Designer"];
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 1000; // Initial delay before typing starts

  function type() {
    const currentText = texts[currentIndex];
    if (isDeleting) {
      textElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      delay = 50; // Speed of deleting
      if (charIndex === 0) {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        delay = 1000; // Delay before typing the next text
      }
    } else {
      textElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      delay = 50; // Speed of typing
      if (charIndex === currentText.length) {
        isDeleting = true;
        delay = 1500; // Delay before deleting
      }
    }

    setTimeout(type, delay);
  }

  setTimeout(type, delay);
});
