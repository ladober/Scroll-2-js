const section = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
    console.log(item);

    if (item.isIntersecting) {
      item.target.classList.add("show");
    } else {
      item.target.classList.remove("show");
    }
  });
});

section.forEach((el) => observer.observe(el));
