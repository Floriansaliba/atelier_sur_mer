const projects = document.querySelectorAll(".project");

let options = {
  // root : null
  rootMargin: "-15% 0px",
  threshold: 0,
};

const HandleIntersect = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    } else {
      entry.target.style.opacity = 0;
    }
  });
};

const observer = new IntersectionObserver(HandleIntersect, options);

projects.forEach((project) => {
  observer.observe(project);
});
