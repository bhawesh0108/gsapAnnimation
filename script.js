
var timeLine = gsap.timeline();

timeLine.from("#nav img,#nav #nav-part2 h3,#nav #nav-part3 h4,#nav #nav-part3 button",{
    y:-40,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.2

})

timeLine.from("#inner h1",{
    y:200,
    opacity:0,
    stagger:0.2,
    duration:1

})

timeLine.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.2,
    duration:1
})

timeLine.from("#main>h5",{
    scale:0,
    opacity:0
})

timeLine.to("#main>h5",{
      y:30,
      repeat:-1,
      duration:0.7,
      yoyo:true
})



