import anime from "animejs";

export function translate(element) { //letter
  anime({
    targets: element,
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 2500,
    delay: (el, i) => 100 * (i+1)
  });
}
export function translate1(element) { //line
  anime({
    targets: element,
    scaleX: [0, 1],
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 2500,
    offset: "-=875",
    delay: (el, i, l) => 80 * (l - i)
  });
}
export function translate2(element) {
  anime({
    targets: element,
    opacity: [1, 0],
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1700
  });
}
export function translate3(element) {
  anime({
    targets: element,
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 0
  });
}