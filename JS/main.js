'use strict';



//************************************** */ ANIMATE_NAVBAR_START


window.onscroll = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById('navigation_bar').style.padding = '2px 0px';
        document.getElementById('logo').style.fontSize = '1.4rem';
    } else {
        document.getElementById('navigation_bar').style.padding = '6px 0px';
        document.getElementById('logo').style.fontSize = '2rem';
    }
};


//******************************************* */ ANIMATE_NAVBAR_END

//******************************************* */ RESPONSIVE_NAVBAR

if (window.innerWidth < 780) {
    document.getElementById('plus_one').setAttribute('class', 'fa-solid fa-plus');

    document.getElementById('plus_one').addEventListener('click', ()=>{

        $("#sub_menu").slideToggle(300, ()=>{

            if (! $('#plus_one').hasClass('fa-plus')) {

                document.getElementById('plus_one').setAttribute('class', 'fa-solid fa-plus');
                
            }else{

                document.getElementById('plus_one').setAttribute('class', 'fa-solid fa-minus');

            }
        });
    });

    document.getElementById('deep_plus').setAttribute('class', 'fa-solid fa-plus');

    document.getElementById('deep_plus').addEventListener('click', ()=>{
        $('#deep_sub').slideToggle(300, ()=>{

            if (! $('#deep_plus').hasClass('fa-plus')) {

                document.getElementById('deep_plus').setAttribute('class', 'fa-solid fa-plus');

            } else {

                document.getElementById('deep_plus').setAttribute('class', 'fa-solid fa-minus');

            }
        })
    })
} 



// **********************************************  COUNT_PLUGIN_START

$('#counter_one').countMe(0, 8);
$('#counter_two').countMe(0, 4);
$('#counter_three').countMe(0, 1);
$('#counter_four').countMe(0, 20);

//*************************************************   COUNT_PLUGIN_END

//***********************************************   CAROUSEL_TESTIMONIAL_PLUGIN_START

$('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 800,
    responsiveClass:true,
    responsive:{
        425: {
            items : 1,
            margin : 200
        },
        375: {
            margin: 250
        },
        320: {
            margin: 300
        }
    }
});

//************************************************  CAROUSEL_TESTIMONIAL_PLUGIN_START

//************************************************** */ TOOLTIP_PLUGIN



var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
        html: true
    })
});



//************************************************************* */ TOOLTIIP_PLUGIN_ENDING

//**************************************************************** */ ISOTOP_PLUGIN_START

var $container = $('.portfolio_container').isotope({
    percentPosition: true
});

$('.portfolio_filter').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
});

//***************************************************** */ ISOTOP_PLUGIN_END

//************************************************** */ PORTFOLIO_CLICK_BUTTON

let portfolio = document.getElementById('portfolio_list');

portfolio.children[0].addEventListener('click', () => {
    portfolio.children[0].style.color = 'blue';
    portfolio.children[1].style.color = '';
    portfolio.children[2].style.color = '';
    portfolio.children[3].style.color = '';
});

portfolio.children[1].addEventListener('click', () => {
    portfolio.children[1].style.color = 'blue';
    portfolio.children[0].style.color = '';
    portfolio.children[2].style.color = '';
    portfolio.children[3].style.color = '';
});

portfolio.children[2].addEventListener('click', () => {
    portfolio.children[2].style.color = 'blue';
    portfolio.children[0].style.color = '';
    portfolio.children[1].style.color = '';
    portfolio.children[3].style.color = '';
});

portfolio.children[3].addEventListener('click', () => {
    portfolio.children[3].style.color = 'blue';
    portfolio.children[0].style.color = '';
    portfolio.children[1].style.color = '';
    portfolio.children[2].style.color = '';
});

//******************************************************** */ PORTOFOLIO_CLICK_BUTTON_END