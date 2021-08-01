(function($){
    var ico = $('<i class="fa fa-caret-right"></i>');
    $('nav#menu li:has(ul) > a').append(ico);
    
    $('nav#menu li:has(ul)').on('click',function(){
      $(this).toggleClass('open');
    });
    
    $('a#toggle').on('click',function(e){
      $('html').toggleClass('open-menu');
      return false;
    });
    
    
    $('div#overlay').on('click',function(){
      $('html').removeClass('open-menu');
    });
    $(".new-service-box ").owlCarousel({
      items:3,
      loop:true,
      smartSpeed: 1500,
      autoplay: true,
      slideSpeed: 15000,
      margin: 10,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });
    $(".team-slider ").owlCarousel({
      items:3,
      loop:true,
      smartSpeed: 1500,
      autoplay: true,
      slideSpeed: 15000,
      margin: 10,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
    });
    $(".testi-slider").owlCarousel({
      items:2,
      loop:true,
      smartSpeed: 1500,
      autoplay: true,
      slideSpeed: 15000,
      dots:false,
      margin: 10,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
    });
    $('#signup-overlay').click(function(){
      $('.modal2').css("transform","translateY(0)");
    });
    $('#signin-overlay').click(function(){
      $('.modal2').css("transform","translateY(100%)");
    });
  })(jQuery)