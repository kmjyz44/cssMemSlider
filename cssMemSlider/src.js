const prev = document.getElementById('prev')
const next = document.getElementById('next')
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')
let index = 0
let i = 5000

const activeSlide = n =>{
  for(let slide of slides){
    
    slide.classList.remove('active')
      
   }
   slides[n].classList.add('active')
}
const activeDot = n =>{
  for(let dot of dots){
    
    dot.classList.remove('active')
      
   }
   dots[n].classList.add('active')
}
const prepareCurrentSlide = ind => {
  activeDot(index)
  activeSlide(index)
}


const nextSlide = () => {
  if(index==slides.length -1){
  index = 0
  prepareCurrentSlide(index)
  
} 
else{
  index++
  prepareCurrentSlide(index)
  console.log(index)
}
}

const prevSlide = () =>{
  if(index==0){
  index ==slides.length -1
} 
else{
  index--
  prepareCurrentSlide(index)
  console.log(index)
}


}
dots.forEach((item,indexDot)=>{
  item.addEventListener('click', ()=>{
    index=indexDot
    prepareCurrentSlide(index)
  })
})

const timerId = 
  setInterval( nextSlide, 5000)
  


next.addEventListener('click', () => {
  setTimeout(clearInterval(timerId))
  nextSlide()
  
  
})
  


prev.addEventListener('click' , () => {
  prevSlide()
  setTimeout(clearInterval(timerId))
})



