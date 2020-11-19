
$(document).ready(function(){
$(".menu-mobile-button").click(function() {
  $('.header').addClass("close-menu");
  $('.mobile-menu-header').addClass("show-menu-flex");
});

$(".addreses-mobile-open").click(function() {
  $('.header').addClass("close-menu");
  $('.addresses').addClass("show-menu-flex");
});

$(".trainers-open").click(function() {
    $('.header').addClass("close-menu");
    $('.trainers-mobile').addClass("show-menu-flex");
  });


$(".back").click(function() {
 $('.mobile-menu-header').removeClass("show-menu-flex");
  $('.header').removeClass("close-menu");
  $('.addresses').removeClass("show-menu-flex");
  });

  $(".Jana").click(function() {
    $('.back').addClass("close-menu");

    $('.trainers-mobile-menu').addClass("close-menu");
    $('.trainers-mobile-photo-Jana').addClass("show-menu");
    $('.trainers-mobile-wrapper-Jana').addClass("show-menu");

    $('.back-trainers').addClass("show-menu");
  });

  $(".Nataly").click(function() {
    $('.back').addClass("close-menu");

    $('.trainers-mobile-menu').addClass("close-menu");
    $('.trainers-mobile-photo-Nataly').addClass("show-menu");
    $('.trainers-mobile-wrapper-Nataly').addClass("show-menu");

    $('.back-trainers').addClass("show-menu");
  });

  $(".Mary").click(function() {
    $('.back').addClass("close-menu");

    $('.trainers-mobile-menu').addClass("close-menu");
    $('.trainers-mobile-photo-Mary').addClass("show-menu");
    $('.trainers-mobile-wrapper-Mary').addClass("show-menu");

    $('.back-trainers').addClass("show-menu");
  });

  $(".Valery").click(function() {
    $('.back').addClass("close-menu");

    $('.trainers-mobile-menu').addClass("close-menu");
    $('.trainers-mobile-photo-Valery').addClass("show-menu");
    $('.trainers-mobile-wrapper-Valery').addClass("show-menu");

    $('.back-trainers').addClass("show-menu");
  });

  $(".Dary").click(function() {
    $('.back').addClass("close-menu");

    $('.trainers-mobile-menu').addClass("close-menu");
    $('.trainers-mobile-photo-Dary').addClass("show-menu");
    $('.trainers-mobile-wrapper-Dary').addClass("show-menu");

    $('.back-trainers').addClass("show-menu");
  });

  $(".Olga").click(function() {
    $('.back').addClass("close-menu");

    $('.trainers-mobile-menu').addClass("close-menu");
    $('.trainers-mobile-photo-Olga').addClass("show-menu");
    $('.trainers-mobile-wrapper-Olga').addClass("show-menu");

    $('.back-trainers').addClass("show-menu");
  });

  $(".Kata").click(function() {
    $('.back').addClass("close-menu");

    $('.trainers-mobile-menu').addClass("close-menu");
    $('.trainers-mobile-photo-Kata').addClass("show-menu");
    $('.trainers-mobile-wrapper-Kata').addClass("show-menu");

    $('.back-trainers').addClass("show-menu");
  });

  $(".back-trainers").click(function() {
    $('.back').removeClass("close-menu");

    $('.trainers-mobile-menu').removeClass("close-menu");

    $('.trainers-mobile-photo-Jana').removeClass("show-menu");
    $('.trainers-mobile-wrapper-Jana').removeClass("show-menu");
    
    $('.trainers-mobile-photo-Nataly').removeClass("show-menu");
    $('.trainers-mobile-wrapper-Nataly').removeClass("show-menu");

    $('.trainers-mobile-photo-Mary').removeClass("show-menu");
    $('.trainers-mobile-wrapper-Mary').removeClass("show-menu");

    $('.trainers-mobile-photo-Valery').removeClass("show-menu");
    $('.trainers-mobile-wrapper-Valery').removeClass("show-menu");

    $('.trainers-mobile-photo-Dary').removeClass("show-menu");
    $('.trainers-mobile-wrapper-Dary').removeClass("show-menu");

    $('.trainers-mobile-photo-Olga').removeClass("show-menu");
    $('.trainers-mobile-wrapper-Olga').removeClass("show-menu");

    $('.trainers-mobile-photo-Kata').removeClass("show-menu");
    $('.trainers-mobile-wrapper-Kata').removeClass("show-menu");

    $('.back-trainers').removeClass("show-menu");
  });
});
