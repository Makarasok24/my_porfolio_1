var typingEffect = new Typed('.multiple_text',{
    strings : ['web developer','software engineer','mobile developer'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500

})

ScrollReveal({ 
    reset: true,
    distance:'200px',
    duration: 2500,
    delay: 400 
});

ScrollReveal().reveal('.about_title, .reveal-left',{origin:'left'});
ScrollReveal().reveal('.reveal-right',{delay:400,origin:'right'});
ScrollReveal().reveal('.media a',{delay:500, origin:'right',interval : 200});
ScrollReveal().reveal('.reveal-bottom',{delay:400,origin:'bottom'});
ScrollReveal().reveal('.reveal-top',{delay:400,origin:'top'});
ScrollReveal().reveal('.reveal-rotate',{delay:600,origin:'bottom',rotate:{x:100, z:1000}});

// function revealFunction(){
//     window.sr = ScrollReveal({
//         duration:1350,
//         distance:'250px',
//         easing:'ease-out',
//         reset:true
//     });

//     sr.reveal('.reavel-left',{origin:'left',});
// }

// window.addEventListener('load', () => {
//     revealFunction();
// });