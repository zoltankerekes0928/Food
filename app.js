const review = [
 {id:1,
 img:"review/drinks.jpg",
 desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec quam commodo, finibus magna nec, congue erat. Morbi elit elit, viverra ut sodales accumsan, dignissim at dolor. In ac dignissim elit. Mauris et suscipit mauris, ornare ornare ante. Aliquam erat volutpat. Nullam cursus mauris vitae vulputate vulputate.",
},
{ id:2,
  img:"review/gofry.jpg",
  desc:"Vestibulum sagittis odio ornare viverra condimentum. Nullam nec elementum nunc. Nullam dui lectus, interdum a pulvinar sit amet, pulvinar vel quam. Sed sollicitudin velit est, eget mollis sapien accumsan vitae. Etiam id lorem nibh. Etiam ac tortor sit amet leo ornare laoreet non sit amet odio. Donec fringilla consectetur euismod. ",
 },
 {id:3,
  img:"review/pizza.jpg",
  desc:"Aliquam eu diam scelerisque, consequat eros sit amet, viverra ligula. Nunc interdum tincidunt leo et mattis. Pellentesque porttitor egestas turpis a vulputate. Ut volutpat quis enim sed molestie. Proin non finibus purus, sed fringilla urna. ",
 },
 {id:4,
  img:"review/snack.jpg",
  desc:"Cras sit amet iaculis dui. Vivamus varius sem quis libero molestie, vel volutpat eros aliquet. Phasellus ultrices, ipsum id consequat vulputate, libero nulla sodales urna, nec rutrum nisl orci eget nisl. Curabitur auctor vehicula diam et mattis. Nullam fringilla lorem nisi, a ullamcorper ante dapibus vel.",
 }
]


const menuBtn = document.getElementById('menu-bar')
const navbar = document.querySelector('.navbar')

const image = document.getElementById('image')
const nextBtn = document.querySelector('.next-arrow')
const prewBtn = document.querySelector('.back-arrow')
const description = document.querySelector('.description')




menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle('fa-times')
  navbar.classList.toggle('showMenu')
})

window.addEventListener('scroll', ()=>{
  menuBtn.classList.remove('fa-times')
  navbar.classList.remove('showMenu')
})


let reviewCounter = 0

var timer = setInterval(showAuto, 2000)
 
window.addEventListener("DOMContentLoaded", function () {
  showReview(reviewCounter)
  setInterval(showAuto, 3000)

})

function showReview(number){
  let item = review[number]
  image.src = item.img
  console.log(item.img)
  description.innerHTML = item.desc
}

nextBtn.addEventListener('click', ()=>{
  stopShowAuto()
  reviewCounter ++
  if(reviewCounter>=review.length){
    reviewCounter=0
  }
  showReview(reviewCounter)
  
})

prewBtn.addEventListener('click', ()=>{
  stopShowAuto()
  reviewCounter --
  if(reviewCounter<0){
    reviewCounter=review.length-1
  }
  showReview(reviewCounter)
})




function showAuto(){
  let item = review[random()]
  image.src = item.img
  description.innerHTML = item.desc
}

function stopShowAuto(){
  clearInterval(timer)
}

function random(){
 return Math.floor(Math.random()*review.length)
}



