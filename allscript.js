var pointEl =document.getElementById('contact');
var formEl = document.querySelectorAll('form');




/*=====toggle icon navbar===== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('ion-android-menu');
    menuIcon.classList.toggle("ion-android-close")
    navbar.classList.toggle('active');
};




let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");




window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); 

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });


        };

    });
    
    /*=====sticky navbar===== */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    


    /**remove toggle icon and navbar when click navbar link */

    // menuIcon.classList.remove('ion-android-menu');
    navbar.classList.remove('active');

};

let inputboxEl = document.getElementById('ty');

inputboxEl.addEventlistener('focus', function(e) {
    inputboxEl.style.background = 'yellow';

});
inputboxEl.addEventlistener('blur', function(e) {
    inputboxEl.style.background = 'white';
});

/*=====*scroll reveal ==*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200


});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });

//

