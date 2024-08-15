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
  autoplay: {
    delay: 5000,
  },
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

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);
