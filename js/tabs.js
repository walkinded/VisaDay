$(document).ready(function($) {
  $('.tab_content').hide();
  $('.tab_content:first').show();
  $('.tabs li .main_box_hover:first').addClass('active');
  $('.tabs li').click(function(event) {
    $('.tabs li' && '.main_box_hover').removeClass('active');
    $(this).find('.main_box_hover').addClass('active');
    $('.tab_content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });
});

$('.view-source .hide').hide();
$a = $('.view-source a');
$a.on('click', function(event) {
  $('.block2_drop_dawn li' && '.main_box_hover').removeClass('active');
  $(this).addClass('main_box_hover').addClass('active');
  event.preventDefault();
  $a.not(this).next().slideUp(100);
  $(this).next().slideToggle(100);
});