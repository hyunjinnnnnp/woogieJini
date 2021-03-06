const imgContainer = document.querySelector(".img-container");
const images = imgContainer.querySelectorAll("img");

function defaultShowingImg() {
  for (let i = 0; i < 5; i++) {
    images[i].src = images[i].dataset.src;
  }
}

// IntersectionObserver의 options를 설정합니다.
const options = {
  root: imgContainer, //default: null. viewport
  // 타겟 이미지 접근 전 이미지를 불러오기 위해 rootMargin을 설정했습니다.
  rootMargin: "100px 100px 100px 100px",
  threshold: 0,
};

// IntersectionObserver 를 등록한다.
const io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // 관찰 대상이 viewport 안에 들어온 경우 image 로드
    if (entry.intersectionRatio > 0) {
      // data-src 정보를 타켓의 src 속성에 설정
      entry.target.src = entry.target.dataset.src;
      // 이미지를 불러왔다면 타켓 엘리먼트에 대한 관찰을 멈춘다.
      //   observer.unobserve(entry.target);
    } else {
      entry.target.src = "";
    }
  });
}, options);

function init() {
  defaultShowingImg();
  if ("IntersectionObserver" in window) {
    images.forEach((target) => {
      io.observe(target);
    });
  }
}
// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.

if (images) {
  init();
}
