(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var imgContainer = document.querySelector(".img-container");
var images = imgContainer.querySelectorAll("img");

function defaultShowingImg() {
  for (var i = 0; i < 5; i++) {
    images[i].src = images[i].dataset.src;
  }
} // IntersectionObserver의 options를 설정합니다.


var options = {
  root: imgContainer,
  //default: null. viewport
  // 타겟 이미지 접근 전 이미지를 불러오기 위해 rootMargin을 설정했습니다.
  rootMargin: "100px 100px 100px 100px",
  threshold: 0
}; // IntersectionObserver 를 등록한다.

var io = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    // 관찰 대상이 viewport 안에 들어온 경우 image 로드
    if (entry.intersectionRatio > 0) {
      // data-src 정보를 타켓의 src 속성에 설정
      entry.target.src = entry.target.dataset.src; // 이미지를 불러왔다면 타켓 엘리먼트에 대한 관찰을 멈춘다.
      //   observer.unobserve(entry.target);
    } else {
      entry.target.src = "";
    }
  });
}, options);

function init() {
  defaultShowingImg();

  if ("IntersectionObserver" in window) {
    images.forEach(function (target) {
      io.observe(target);
    });
  }
} // 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.


if (images) {
  init();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMjIxMzkyM2MuanMiXSwibmFtZXMiOlsiaW1nQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW1hZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImRlZmF1bHRTaG93aW5nSW1nIiwiaSIsInNyYyIsImRhdGFzZXQiLCJvcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJpbyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsIm9ic2VydmVyIiwiZm9yRWFjaCIsImVudHJ5IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ0YXJnZXQiLCJpbml0Iiwid2luZG93Iiwib2JzZXJ2ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7QUFDQSxJQUFNQyxNQUFNLEdBQUdILFlBQVksQ0FBQ0ksZ0JBQWIsQ0FBOEIsS0FBOUIsQ0FBZjs7QUFFQSxTQUFTQyxpQkFBVCxHQUE2QjtBQUMzQixPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDMUJILElBQUFBLE1BQU0sQ0FBQ0csQ0FBRCxDQUFOLENBQVVDLEdBQVYsR0FBZ0JKLE1BQU0sQ0FBQ0csQ0FBRCxDQUFOLENBQVVFLE9BQVYsQ0FBa0JELEdBQWxDO0FBQ0Q7QUFDRixDLENBRUQ7OztBQUNBLElBQU1FLE9BQU8sR0FBRztBQUNkQyxFQUFBQSxJQUFJLEVBQUVWLFlBRFE7QUFDTTtBQUNwQjtBQUNBVyxFQUFBQSxVQUFVLEVBQUUseUJBSEU7QUFJZEMsRUFBQUEsU0FBUyxFQUFFO0FBSkcsQ0FBaEIsQyxDQU9BOztBQUNBLElBQU1DLEVBQUUsR0FBRyxJQUFJQyxvQkFBSixDQUF5QixVQUFDQyxPQUFELEVBQVVDLFFBQVYsRUFBdUI7QUFDekRELEVBQUFBLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixVQUFDQyxLQUFELEVBQVc7QUFDekI7QUFDQSxRQUFJQSxLQUFLLENBQUNDLGlCQUFOLEdBQTBCLENBQTlCLEVBQWlDO0FBQy9CO0FBQ0FELE1BQUFBLEtBQUssQ0FBQ0UsTUFBTixDQUFhYixHQUFiLEdBQW1CVyxLQUFLLENBQUNFLE1BQU4sQ0FBYVosT0FBYixDQUFxQkQsR0FBeEMsQ0FGK0IsQ0FHL0I7QUFDQTtBQUNELEtBTEQsTUFLTztBQUNMVyxNQUFBQSxLQUFLLENBQUNFLE1BQU4sQ0FBYWIsR0FBYixHQUFtQixFQUFuQjtBQUNEO0FBQ0YsR0FWRDtBQVdELENBWlUsRUFZUkUsT0FaUSxDQUFYOztBQWNBLFNBQVNZLElBQVQsR0FBZ0I7QUFDZGhCLEVBQUFBLGlCQUFpQjs7QUFDakIsTUFBSSwwQkFBMEJpQixNQUE5QixFQUFzQztBQUNwQ25CLElBQUFBLE1BQU0sQ0FBQ2MsT0FBUCxDQUFlLFVBQUNHLE1BQUQsRUFBWTtBQUN6QlAsTUFBQUEsRUFBRSxDQUFDVSxPQUFILENBQVdILE1BQVg7QUFDRCxLQUZEO0FBR0Q7QUFDRixDLENBQ0Q7OztBQUVBLElBQUlqQixNQUFKLEVBQVk7QUFDVmtCLEVBQUFBLElBQUk7QUFDTCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW1nLWNvbnRhaW5lclwiKTtcbmNvbnN0IGltYWdlcyA9IGltZ0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiaW1nXCIpO1xuXG5mdW5jdGlvbiBkZWZhdWx0U2hvd2luZ0ltZygpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICBpbWFnZXNbaV0uc3JjID0gaW1hZ2VzW2ldLmRhdGFzZXQuc3JjO1xuICB9XG59XG5cbi8vIEludGVyc2VjdGlvbk9ic2VydmVy7J2YIG9wdGlvbnPrpbwg7ISk7KCV7ZWp64uI64ukLlxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgcm9vdDogaW1nQ29udGFpbmVyLCAvL2RlZmF1bHQ6IG51bGwuIHZpZXdwb3J0XG4gIC8vIO2DgOqynyDsnbTrr7jsp4Ag7KCR6re8IOyghCDsnbTrr7jsp4Drpbwg67aI65+s7Jik6riwIOychO2VtCByb290TWFyZ2lu7J2EIOyEpOygle2WiOyKteuLiOuLpC5cbiAgcm9vdE1hcmdpbjogXCIxMDBweCAxMDBweCAxMDBweCAxMDBweFwiLFxuICB0aHJlc2hvbGQ6IDAsXG59O1xuXG4vLyBJbnRlcnNlY3Rpb25PYnNlcnZlciDrpbwg65Ox66Gd7ZWc64ukLlxuY29uc3QgaW8gPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAvLyDqtIDssLAg64yA7IOB7J20IHZpZXdwb3J0IOyViOyXkCDrk6TslrTsmKgg6rK97JqwIGltYWdlIOuhnOuTnFxuICAgIGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgIC8vIGRhdGEtc3JjIOygleuztOulvCDtg4DsvJPsnZggc3JjIOyGjeyEseyXkCDshKTsoJVcbiAgICAgIGVudHJ5LnRhcmdldC5zcmMgPSBlbnRyeS50YXJnZXQuZGF0YXNldC5zcmM7XG4gICAgICAvLyDsnbTrr7jsp4Drpbwg67aI65+s7JmU64uk66m0IO2DgOy8kyDsl5jrpqzrqLztirjsl5Ag64yA7ZWcIOq0gOywsOydhCDrqYjstpjri6QuXG4gICAgICAvLyAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRyeS50YXJnZXQuc3JjID0gXCJcIjtcbiAgICB9XG4gIH0pO1xufSwgb3B0aW9ucyk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGRlZmF1bHRTaG93aW5nSW1nKCk7XG4gIGlmIChcIkludGVyc2VjdGlvbk9ic2VydmVyXCIgaW4gd2luZG93KSB7XG4gICAgaW1hZ2VzLmZvckVhY2goKHRhcmdldCkgPT4ge1xuICAgICAgaW8ub2JzZXJ2ZSh0YXJnZXQpO1xuICAgIH0pO1xuICB9XG59XG4vLyDqtIDssLDtlaAg64yA7IOB7J2EIOyEoOyWuO2VmOqzoCwg7ZW064u5IOyGjeyEseydhCDqtIDssLDsi5ztgqjri6QuXG5cbmlmIChpbWFnZXMpIHtcbiAgaW5pdCgpO1xufVxuIl19
},{}]},{},[1])