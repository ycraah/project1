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

/* 헤드 검색 - 아이콘 mouseenter 시 검색창 길이 늘이기 
  헤드 검색 - input창 mouseenter 시 아래에서 글자 올라오는 효과
*/
const textInput = document.querySelector(".search-input");
const searchIcon = document.querySelector(".circle-icon");
const placeholder = document.querySelector(
  ".search-bar__typing-space .placeholder"
);

searchIcon.addEventListener("mouseenter", () => {
  textInput.style.width = "250px";
  if (!textInput.value) {
    placeholder.style.display = "block";
  }
  setTimeout(() => {
    placeholder.style.top = "5px";
  }, 1000);
});

/* 헤드 검색 - input창에 입력 시작하면 placeholder 내용 지우기 */
textInput.addEventListener("input", () => {
  if (textInput.value) {
    placeholder.style.display = "none";
  } else {
    placeholder.style.display = "block";
  }
});

/* 헤드 검색 - 헤드 검색 이외의 영역 클릭 시 박스 접기 및 입력 내용 제거*/
const body = document;
const searchBar = document.querySelector(".nav__search-bar");

body.addEventListener("click", (event) => {
  if (!searchBar.contains(event.target)) {
    textInput.style.width = 0;
    textInput.value = "";
    placeholder.style.display = "none";
  }
});

/* 섹션 compliations - 글자 배열 생성 및 hover시 글자 키우기*/
const compBox = document.querySelector(
  ".section__hover-text.compliations > .container"
);
const compTextArr = "compliations".toUpperCase().split("");
for (let i = 0; i < compTextArr.length; i++) {
  const span = document.createElement("span");
  span.textContent = compTextArr[i];
  span.style.display = "inline-block";
  span.style.transition = "transform .5s";
  span.style.fontWeight = "900";
  span.style.transform = "scaleY(1)";
  compBox.appendChild(span);

  span.addEventListener("mouseenter", () => {
    span.style.transform = "scaleY(2)";
    if (span.previousElementSibling) {
      span.previousElementSibling.style.transform = "scaleY(1.5)";
    }
    if (span.nextElementSibling) {
      span.nextElementSibling.style.transform = "scaleY(1.5)";
    }
  });
  span.addEventListener("mouseleave", () => {
    span.style.transform = "scaleY(1)";
    if (span.previousElementSibling) {
      span.previousElementSibling.style.transform = "scaleY(1)";
    }
    if (span.nextElementSibling) {
      span.nextElementSibling.style.transform = "scaleY(1)";
    }
  });
}

/* 섹션 compliations - 바깥 영역으로 나갔을 시 다시 원상 복귀  */
const compSpans = compBox.getElementsByTagName("span");
compBox.addEventListener("mouseleave", () => {
  for (let compSpan of compSpans) {
    compSpan.style.transform = "scaleY(1)";
  }
});

/* (임시) 섹션 아이템 여러개 복사 */
const category = document.querySelector(".category");
const firstItem = category.firstElementChild;

/* 섹션 아이템 - 마우스 enter시에 아이템에 hover효과 */
const items = category.getElementsByClassName("item-box");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseenter", () => {
    items[i].classList.add("is-active");
  });
  items[i].addEventListener("mouseleave", () => {
    items[i].classList.remove("is-active");
  });
}

/* 섹션 페이징 - 마우스 enter시 클래스 추가*/
const countingNumber = document.querySelectorAll(".paging .counting-box li");
for (let i = 0; i < countingNumber.length; i++) {
  countingNumber[i].addEventListener("click", () => {
    if (i == countingNumber.length - 1 || i == 3) return; //next Page
    countingNumber.forEach((item) => {
      item.classList.remove("is-active");
    });
    countingNumber[i].classList.add("is-active");
  });
}

/* 섹션 Subscribe now - 글자 배열 생성 및 hover시 글자 키우기*/
const subsBox = document.querySelector(
  ".section__hover-text.subscribe > .container .hover-text"
);
const subsTextArr = "subscribe now".toUpperCase().split("");
for (let i = 0; i < subsTextArr.length; i++) {
  const span = document.createElement("span");
  span.textContent = subsTextArr[i];
  span.style.display = "inline-block";
  span.style.transition = "transform .5s";
  span.style.fontWeight = "900";
  span.style.transform = "scaleY(2)";
  if (subsTextArr[i] === " ") {
    span.style.width = "15px";
  }
  subsBox.appendChild(span);

  span.addEventListener("mouseenter", () => {
    span.style.transform = "scaleY(3)";
    if (span.previousElementSibling) {
      span.previousElementSibling.style.transform = "scaleY(2.5)";
    }
    if (span.nextElementSibling) {
      span.nextElementSibling.style.transform = "scaleY(2.5)";
    }
  });
  span.addEventListener("mouseleave", () => {
    span.style.transform = "scaleY(2)";
    if (span.previousElementSibling) {
      span.previousElementSibling.style.transform = "scaleY(2)";
    }
    if (span.nextElementSibling) {
      span.nextElementSibling.style.transform = "scaleY(2)";
    }
  });
}

/* 섹션 Subscribe - 바깥 영역으로 나갔을 시 다시 원상 복귀  */
const subsSpans = subsBox.getElementsByTagName("span");
subsBox.addEventListener("mouseleave", () => {
  for (let subsSpan of subsSpans) {
    subsSpan.style.transform = "scaleY(2)";
  }
});

/* 반응형 작업 */
const navLists = document.querySelectorAll(".header .nav__list .nav__item");
const subscribeHoverTextCon = document.querySelector(".subscribe .container");
const subscribeBoxs = subscribeHoverTextCon.querySelectorAll("div");

window.addEventListener("resize", () => {
  if (window.innerWidth <= "1300") {
    for (let navList of navLists) {
      navList.classList.add("hidden");
    }
    subscribeHoverTextCon.classList.add("is-responsed");
    for (let subscribeBox of subscribeBoxs) {
      subscribeBox.classList.add("is-responsed");
    }
    category.classList.remove("grid-cols-3");
    category.classList.add("grid-cols-2");
    compBox.classList.remove("text-8xl");
    compBox.classList.add("text-[60px]");
  } else {
    for (let navList of navLists) {
      navList.classList.remove("hidden");
    }
    for (let subscribeBox of subscribeBoxs) {
      subscribeHoverTextCon.classList.remove("is-responsed");
      subscribeBox.classList.remove("is-responsed");
    }
    category.classList.remove("grid-cols-2");
    category.classList.add("grid-cols-3");
    compBox.classList.remove("text-[60px]");
    compBox.classList.add("text-8xl");
  }
});
