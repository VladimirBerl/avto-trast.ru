const html = document.documentElement;
const body = document.body;
const header = document.getElementById("header");
const navbar = document.getElementById("navbar");
const toggleButton = document.getElementById("navbar-toggle");
const navLinks = navbar.querySelectorAll(".nav-link");

const toggleModal = () => {
  const isActive = toggleButton.classList.toggle("active");
  navbar.classList.toggle("active", isActive);
  html.classList.toggle("hidden", isActive);
};

toggleButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleModal();
});

body.addEventListener("click", (event) => {
  if (
    !navbar.contains(event.target) &&
    toggleButton.classList.contains("active")
  ) {
    toggleModal();
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    event.target.classList.add("active");
    toggleModal();
  });
});

let lastScrollTop = 0;
let isScrolling;
const onScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Проверяем направление скролла
  if (scrollTop > lastScrollTop) {
    // Скролл вниз - скрываем хедер
    header.classList.add("hidden");
  } else {
    // Скролл вверх - показываем хедер
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Не позволяем lastScrollTop становиться отрицательным
};
window.addEventListener("scroll", () => {
  if (!isScrolling) {
    isScrolling = true;

    requestAnimationFrame(() => {
      onScroll();
      isScrolling = false;
    });
  }
});

// lib
const swiper = new Swiper(".swiper", {
  spaceBetween: 20,
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

