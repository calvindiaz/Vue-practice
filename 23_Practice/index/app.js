const swiper = new Swiper(".swiper", {
  // Optional parameters
  centeredSlides: true,
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

let secondSwiper = new Swiper(".mySwiper", {
  freeMode: true,

  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 60,
    },

    768: {
      slidesPerView: 5,
      spaceBetween: 130,
    },
  },
});

// 輪播的iframe modal視窗
let video = document.querySelector(".film");
let video2 = document.querySelector(".film2");
let video3 = document.querySelector(".film3");
let video4 = document.querySelector(".film4");
let video5 = document.querySelector(".film5");

let slide = document.querySelector(".slide");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");
let slide4 = document.querySelector(".slide4");
let slide5 = document.querySelector(".slide5");

document.addEventListener("click", (e) => {
  if (e.target == slide) {
    video.classList.toggle("open");
  } else if (e.target == slide2) {
    video2.classList.toggle("open");
  } else if (e.target == slide3) {
    video3.classList.toggle("open");
  } else if (e.target == slide4) {
    video5.classList.toggle("open");
  } else if (e.target == slide5) {
    video4.classList.toggle("open");
  }
});

window.onclick = function (event) {
  if (event.target == video) {
    video.classList.toggle("open");
    video.querySelector("iframe").src =
      "https://www.youtube.com/embed/ymVnEm4nGgQ";
  } else if (event.target == video2) {
    video2.classList.toggle("open");
    video2.querySelector("iframe").src =
      "https://www.youtube.com/embed/edZnUXuhVXc";
  } else if (event.target == video3) {
    video3.classList.toggle("open");
    video3.querySelector("iframe").src =
      "https://www.youtube.com/embed/b91Qfs4lMQA";
  } else if (event.target == video5) {
    video5.classList.toggle("open");
    video5.querySelector("iframe").src =
      "https://www.youtube.com/embed/4UZ2wT9Nef4";
  } else if (event.target == video4) {
    video4.classList.toggle("open");
    video4.querySelector("iframe").src =
      "https://www.youtube.com/embed/yBBcbb97hNU";
  }
};

// function closeBtn() {
//   video.style.display = "none";
//   video.querySelector("iframe").src =
//     "https://www.youtube.com/embed/ymVnEm4nGgQ";
// }

// function closeBtn2() {
//   videoSecond.style.display = "none";
//   videoSecond.querySelector("iframe").src =
//     "https://www.youtube.com/embed/edZnUXuhVXc";
// }

function closeBtn3() {
  videoThird.style.display = "none";
  videoThird.querySelector("iframe").src =
    "https://www.youtube.com/embed/b91Qfs4lMQA";
}

function closeBtn4() {
  videoFour.style.display = "none";
  videoFour.querySelector("iframe").src =
    "https://www.youtube.com/embed/yBBcbb97hNU";
}

function closeBtn5() {
  videoFive.style.display = "none";
  videoFive.querySelector("iframe").src =
    "https://www.youtube.com/embed/4UZ2wT9Nef4";
}

// click menu 漢堡 事件
let menu = document.querySelector(".menu");
let rwdNav = document.querySelector(".rwd-nav");
menu.addEventListener("click", () => {
  menu.classList.toggle("cross");

  rwdNav.classList.toggle("open");
});

// 在行動版，click search事件
let search = document.querySelector(".search");
let rwdSearch = document.querySelector(".rwd-search");

search.onclick = () => {
  rwdSearch.classList.toggle("open");
};

// 捲動至頁頂
let toTop = document.querySelector(".scroll-to-top");
toTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// 在415px以下捲動視窗，logo可以消失
let logo = document.querySelector("img.logo");

window.addEventListener("scroll", () => {
  if (window.matchMedia("(max-width: 415px)").matches) {
    if (window.scrollY >= 550) {
      logo.classList.add("slideup");
      toTop.style.display = "block";
    } else {
      logo.classList.remove("slideup");

      toTop.style.display = "none";
    }
  }
});
