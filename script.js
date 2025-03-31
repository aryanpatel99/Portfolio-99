const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),   //el is the top level element that contains the whole website
    smooth: true
});

//animation hero pge
function firstPageAnim(){
    var tl = gsap.timeline()

    tl.from('nav',{
        y:'-10',
        opacity:0,
        duration:1.7,
        ease:Expo.easeInOut 
    })
    .to('.boundingelem',{
        y:0,
        ease:Expo.easeInOut,
        duration:1.7,
        delay:-1,
        stagger:0.2   // gives a delay
    })
    .from('#herofooter',{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease:Expo.easeInOut,
    })
}


//code for cursor
function circleMouseFollower(){
    window.addEventListener('mousemove',function(details){
        document.querySelector('#minicircle').style.transform = `translate(${details.clientX}px,${details.clientY}px)`

    })
}


circleMouseFollower()
firstPageAnim() 


// select the elem and make the mouse move effect
document.querySelectorAll('.elem')
.forEach(function(elem){
    var rotate = 0
    var diffrot = 0


    elem.addEventListener('mouseleave',function(details){
         
         gsap.to(elem.querySelector('img'),{
            opacity:0,
            display:'none',
            ease:Power3,
            duration:0.5

         })
     })

    elem.addEventListener('mousemove',function(details){

       var diff = details.clientY -  elem.getBoundingClientRect().top

       diffrot= details.clientX - rotate
       rotate = details.clientX

       
        
        gsap.to(elem.querySelector('img'),{
            opacity:1,
            display:'block',
            ease:Power3,
            top:diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20,20,diffrot*0.5)
        })
    })
})

const time = document.querySelector('#time');
setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    time.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}, 1000);
