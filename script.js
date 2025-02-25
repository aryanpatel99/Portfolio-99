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


// function circledesign(){
//     // defining default scale value 
//     var xscale = 1
//     var yscale = 1

//     var xprev = 0
//     var yprev = 0
//     window.addEventListener('mousemove',function(dets){
//         dets.clientX - xprev
//         x= dets.clientX

//     })

// }













//code for cursor
function circleMouseFollower(){
    window.addEventListener('mousemove',function(details){
        document.querySelector('#minicircle').style.transform = `translate(${details.clientX}px,${details.clientY}px)`

    })
}


circleMouseFollower()
firstPageAnim()