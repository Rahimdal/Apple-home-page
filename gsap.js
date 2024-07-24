var tl = gsap.timeline()



tl.from(".buynow1 p",{
  
  x:-500,
 duration:0.5,
 opacity: 0
  

})


tl.from ("#img-1",{
  delay:0.2,
  x: -50,
  duration: 0.2,
  opacity: 0,
 
  
})

tl.from ("#img-2",{
  x: -50,
  duration: 0.2,
  opacity: 0,
})

tl.from ("#img-3",{
  y: 500,
  duration: 0.8,
  opacity: 0,

  scale:0.1
})

tl.from ("#img-4",{
  x: -50,
  duration: 0.2,
  opacity: 0,
})

tl.from ("#img-5",{
  x: -50,
  duration: 0.2,
  opacity: 0,
})
