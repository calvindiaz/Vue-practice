// 商品頁上方的圖片轉換
let topImage = document.querySelector("div.top-image");

setInterval(() => {
  if (
    topImage.style.backgroundImage == 'url("./picture/product/top-banner.png")'
  ) {
    topImage.style.backgroundImage = 'url("./picture/product/top-banner2.png")';
  } else if (
    topImage.style.backgroundImage == 'url("./picture/product/top-banner2.png")'
  ) {
    topImage.style.backgroundImage = 'url("./picture/product/top-banner3.jpg")';
  } else {
    topImage.style.backgroundImage = 'url("./picture/product/top-banner.png")';
  }
}, 2600);

// click menu 漢堡 事件
let menu = document.querySelector(".menu");
let rwdNav = document.querySelector(".rwd-nav");
menu.addEventListener("click", () => {
  menu.classList.toggle("cross");

  rwdNav.classList.toggle("open");
});

// 手機版，click search事件
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

// 在max-width:415px 往下捲動視窗，logo消失
// 手機版的分類列表出現
let logo = document.querySelector("img.logo");

let toggleButton = document.querySelector(".rwd-list-button");
let list = document.querySelector(".list");

window.addEventListener("scroll", () => {
  if (window.matchMedia("(max-width: 415px)").matches) {
    if (window.scrollY >= 200) {
      logo.classList.add("slideup");
      toTop.style.display = "block";
      toggleButton.style.display = "block";
    } else {
      logo.classList.remove("slideup");
      toTop.style.display = "none";
      toggleButton.style.display = "none";
    }
  }
});
// click toggleButton .list新增class="rwd-list"

toggleButton.onclick = () => {
  list.classList.toggle("rwd-list");
};

// click list 分類列表就能消失
window.onclick = function (event) {
  if (event.target == list) {
    list.classList.toggle("rwd-list");
  }
};
