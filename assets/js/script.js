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
