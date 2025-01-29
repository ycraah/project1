/* 헤드 로고 - hover 효과 */
const fills = ["#763DB5", "#EF1FA2", "#E4FE5A"];
const logo = document.getElementById("logo");
const paths = logo.querySelectorAll("path");
const delay = 80;
let index = paths.length;

paths.forEach((path, i) => {
  path.style.transition = "fill 0.2s";
  path.style.fill = fills[i];
});

function changePathColor(i, color, delay) {
  setTimeout(() => {
    paths[i].style.fill = color;
  }, delay);
}

function pathFadeLeftStart() {
  for (let i = 0; i < index; i++) {
    changePathColor(i, "#000", delay * i);
  }
  for (let i = 0; i < index; i++) {
    changePathColor(i, fills[i], delay * index + delay * i);
  }
}

function pathFadeRightStart() {
  for (let i = index - 1; i >= 0; i--) {
    changePathColor(i, "#000", delay * (index - 1 - i));
  }
  for (let i = index - 1; i >= 0; i--) {
    changePathColor(i, fills[i], delay * index + delay * (index - 1 - i));
  }
}

logo.addEventListener("mouseenter", pathFadeLeftStart);
logo.addEventListener("mouseleave", pathFadeRightStart);

/* 헤드 메뉴 - 텍스트 hover시 sgv 파일을 활용하여 밑줄 긋기 */
const texts = document.getElementsByClassName("text-animate");
for (let i = 0; i < texts.length; i++) {
  const underline = texts[i].nextElementSibling;
  if (underline && underline.classList.contains("underline")) {
    texts[i].addEventListener("mouseenter", function () {
      underline.style.opacity = "1";
    });
    texts[i].addEventListener("mouseleave", function () {
      underline.style.opacity = "0";
    });
  }
}

/* 헤드 검색 - 아이콘 mouseenter 시 검색창 길이 늘이기 */
const textInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".search-bar__circle");
const placeholder = document.querySelector(
  ".search-bar__typing-space .placeholder"
);

/* 헤드 검색 - input창 mouseenter 시 아래에서 글자 올라오는 효과 */
searchIcon.addEventListener("mouseenter", () => {
  textInput.style.width = "250px";
  placeholder.style.display = "block";
  setTimeout(() => {
    placeholder.style.top = "5px";
  }, 1000);
});

/* 헤드 검색 - input창에 입력 시작하면 placeholder 내용 지우기 */
textInput.addEventListener("input", () => {
  if (textInput.value.trim()) {
    placeholder.style.display = "none";
  }
});
