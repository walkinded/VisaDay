$(document).ready(function() {
    //Попап менеджер FancyBox
    //Документация: http://fancybox.net/howto
    //<a class="fancybox"><img src="image.jpg" /></a>
    //<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
    $(".fancybox").fancybox();
  
  
    // initialization Swiper
    var swiper = new Swiper('.swiper-container', {
      speed: 800,
      autoHeight: true,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

     // initialization Swiper
     var swiper = new Swiper('.partner .swiper-container', {
      speed: 800,
      autoHeight: true,
      spaceBetween: 30,
      slidesPerView: 1,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
      },
    });
    
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100){
          $('header').addClass('scrolled');        
          $('.menu').addClass('menu_scrolled'); 
      }else{
          $('header').removeClass("scrolled");   
          $('.menu').removeClass('menu_scrolled');  
        }
    });    

    let menuBtn = document.querySelector('.menu-btn');
    let menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function(){
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
    })
  });

  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $('input[type=tel]').mask('+7 (999) 999-99-99');
  
  