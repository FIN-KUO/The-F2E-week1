

$( document ).ready(function() {
  console.log( "ready!" );
  
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const timeline = gsap.timeline();

  // 文字無限循環


  // timeline.fromTo(".banner .txt_md", {autoAlpha: 0}, {autoAlpha: 1, duration: 1});
  timeline.from(".hero .txt_md" , {y : 200 ,duration:1});

  timeline.from(".loop1", {xPercent: "-50",ease: "none",duration: 2,repeat: -1});

  timeline.fromTo(".group1", {autoAlpha: 0}, {autoAlpha: 1, duration: 1});
  timeline.fromTo(".group2", {autoAlpha: 0}, {autoAlpha: 1, duration: 1});
  timeline.fromTo(".group3", {autoAlpha: 0}, {autoAlpha: 1, duration: 1});

  var bannerWidth = parseInt($(".banner").css("width"));
  var imgWidth = parseInt($(".loop2 img").css("width"));

  timeline.to(".loop2", {x:() => { return (bannerWidth-imgWidth)} ,ease: "none",duration: 2});
  timeline.from(".loop3", {x:() => { return (bannerWidth-imgWidth)},ease: "none",duration: 2}, "<");


});

$("#hamburger").on('click', () => {
  $(".hamBar").toggleClass('active');
});
$(".xmark").on('click', () => {
  $(".hamBar").toggleClass('active');
});
