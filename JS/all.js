
  var wrapWidth = parseInt($(".wrap").css("width"));
  var padWidth = 768;
  
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const timeline = gsap.timeline();

  timeline.from('.hero .txt_md', {top: 200, opacity:0 ,duration:2});
  timeline.from('.hero .txt_lg', {top: 200, opacity:0 ,duration:2},"<");

  if (wrapWidth < padWidth)  {
    timeline.from('.hero .img_lock', {top: 150, opacity:0 ,duration:2},"<");
    timeline.from('.hero .img_code', {top: 0, opacity:0 ,duration:2},"<");
  }else{
    timeline.fromTo('.hero .img_lock', {top: 150, opacity:0 ,duration:2}, {top: 65, opacity:1 ,duration:2},"<");
    timeline.fromTo('.hero .img_code', {top: 0, opacity:0 ,duration:2}, {top: 60, opacity:1 ,duration:2},"<");

    timeline.from('.hero .img_lock', {top: 65,duration:8});
    timeline.from('.hero .img_code', {top: 60,duration:8},"<");
    timeline.from('.hero button', {x: 20,duration:8},"<");
  };

  
  // 文字無限循環
  timeline.from(".loop1", {xPercent: "-50",ease: "none",duration: 2,repeat: -1});

//question
  const question = document.querySelector(".question")
  ScrollTrigger.create({
    trigger: question,
    markers: true,

    //向下滾動進入start點時觸發callback
    onEnter: function () {
      timeline.fromTo(".group1", {autoAlpha: 0}, {autoAlpha: 1, duration: 1});
      timeline.fromTo(".group2", {autoAlpha: 0}, {autoAlpha: 1, duration: 1});
      timeline.fromTo(".group3", {autoAlpha: 0}, {autoAlpha: 1, duration: 1});
    },

    //向下滾動超過end點時觸發callback
    onLeave: function () {
      gsap.set(".group1" ,  { autoAlpha: 0 });
      gsap.set(".group2" ,  { autoAlpha: 0 });
      gsap.set(".group3" ,  { autoAlpha: 0 });
    }, 

    //向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: function () {
      timeline.fromTo(".group1", {autoAlpha: 0}, {autoAlpha: 1, duration: 1});
      timeline.fromTo(".group2", {autoAlpha: 0}, {autoAlpha: 1, duration: 1});
      timeline.fromTo(".group3", {autoAlpha: 0}, {autoAlpha: 1, duration: 1});
    },

  });

  
// banner
  var imgWidth = parseInt($(".loop2 img").css("width"));

  const banner = document.querySelector(".banner")
  ScrollTrigger.create({
    trigger: banner,
    markers: true,

    //向下滾動進入start點時觸發callback
    onEnter: function () {
      timeline.to(".loop2", {x:() => { return (wrapWidth-imgWidth)} ,ease: "none",duration: 2});
      timeline.from(".loop3", {x:() => { return (wrapWidth-imgWidth)},ease: "none",duration: 2}, "<");
      timeline.from('.banner .img_title', {width:0, opacity:0 ,duration:3},"<");
      timeline.from('.banner .txt_title', { opacity:0 ,duration:3},"<");
      timeline.from('.banner .img_front', {width:0,top: -350,left: 500, opacity:0 ,duration:3},"<");
      timeline.from('.banner .img_uxdesign', {width:0,top: 300,left: -110, opacity:0 ,duration:3},"<");

      if (wrapWidth < padWidth){
        timeline.from('.banner .img_rightHand', {top: 100, opacity:0 ,duration:3},"<");
        timeline.from('.banner .img_leftHand', {top: -100, opacity:0 ,duration:3},"<");
      }else{
        timeline.from('.banner .img_rightHand', {left: -120, opacity:0 ,duration:3},"<");
        timeline.from('.banner .img_leftHand', {left: 120, opacity:0 ,duration:3},"<");
      };
    },

    //向下滾動超過end點時觸發callback
    onLeave: function () {
      gsap.set(".banner .img_title" ,  { autoAlpha: 0 });
      gsap.set(".banner .txt_title" ,  { autoAlpha: 0 });
      gsap.set(".banner .img_front" ,  { autoAlpha: 0 });
      gsap.set(".banner .img_uxdesign" ,  { autoAlpha: 0 });
      gsap.set(".banner .img_rightHand" ,  { autoAlpha: 0 });
      gsap.set(".banner .img_leftHand" ,  { autoAlpha: 0 });
      // gsap.set(".loop2" ,  { transform: () => {return 'translate' + (imgWidth - wrapWidth, 0)} });
      // gsap.set(".loop3" ,  { transform: () => {return 'translate' + (imgWidth - wrapWidth, 0)} });
    }, 

    //向上滾動超過end點時觸發（回滾時觸發）callback
    onEnterBack: function () {
      timeline.to(".loop2", {x:() => { return (wrapWidth-imgWidth)} ,ease: "none",duration: 2});
      timeline.from(".loop3", {x:() => { return (wrapWidth-imgWidth)},ease: "none",duration: 2}, "<");
      timeline.from('.banner .img_title', {width:0, opacity:0 ,duration:3},"<");
      timeline.from('.banner .txt_title', { opacity:0 ,duration:3},"<");
      timeline.from('.banner .img_front', {width:0,top: -350,left: 500, opacity:0 ,duration:3},"<");
      timeline.from('.banner .img_uxdesign', {width:0,top: 300,left: -110, opacity:0 ,duration:3},"<");

      if (wrapWidth < padWidth){
        timeline.from('.banner .img_rightHand', {top: 100, opacity:0 ,duration:3},"<");
        timeline.from('.banner .img_leftHand', {top: -100, opacity:0 ,duration:3},"<");
      }else{
        timeline.from('.banner .img_rightHand', {left: -120, opacity:0 ,duration:3},"<");
        timeline.from('.banner .img_leftHand', {left: 120, opacity:0 ,duration:3},"<");
      };
    },

  });

  


$("#hamburger").on('click', () => {
  $(".hamBar").toggleClass('active');
});
$(".xmark").on('click', () => {
  $(".hamBar").toggleClass('active');
});

