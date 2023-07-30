gsap.from('#newsBar',{
  opacity:0,
  y:-10
})

gsap.to('#newsBar',{
  display:'none',
  delay:5,
  y:-10
})

let tl = gsap.timeline()

tl
  .from('#nav1', {
    opacity: 0,
    y:-20
  })
  .from('.logo',{
    x:-10,
    y:-10,
    opacity:0,
    delay:'-0.5'
  })
  .from('.hero-image img', {
    scale: 1.2,
    opacity:0,
    delay:'-0.5'
  })
  .from(['#prodList1', '#prodList2', '#prodList3'],{
    y:20,
    opacity:0
  })
  .from('.product-det',{
    y:-10,
    opacity:0,
    duration:0.5
  })

