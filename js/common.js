$(document).ready(function() {

    $(".menuToggle").click(function() {
      $(this).toggleClass("active");
      $('.menu').slideToggle(300, function(){
        if($(this).css('display') === "none"){
          $(this).removeAttr('style');
        }
      });
    });
    $(document).click(function(event) {
      if ($(event.target).closest(".menuToggle, .menu").length) return;   //при клике на эти блоки не скрывать
      $('.menu').hide();  //скрываем .menu при клике вне .menu
      event.stopPropagation();
      if ($(".menuToggle").toggleClass("active", true)) {
        $(".menuToggle").toggleClass("active");
      }
    });
    $(document).keyup(function(e) {
      if (e.key === "Escape" && $(".menuToggle").toggleClass("active", true)) {
        $('.menu').hide();
        e.stopPropagation();
        $(".menuToggle").toggleClass("active");
      }
    });

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
    
  });
  
  
  