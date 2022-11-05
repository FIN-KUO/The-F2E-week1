gsap.registerPlugin(ScrollTrigger, TextPlugin);

// 文字無限循環
gsap.to(".loop", {
  xPercent: "-50",
  ease: "none",
  duration: 10,
  repeat: -1,
});