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
  
  
    // initialization Swiper
    /*
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
    
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100){
          $('header').addClass('scrolled');        
      }else{
          $('header').removeClass("scrolled");    
        }
    });
    */
    
  });
  
  
  