$(document).on('ready', function () {
  $(document).on('click', function() {
    $('#bs-example-navbar-collapse-1').collapse('hide');
  });
});

$(document).ready(function(){
$('.single-item').slick();
});

$(document).ready(function(){
$('.responsive-boxes').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});


$(function() {
  function slickInit() {
    $(".regular").slick({
      dots: false,
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 4,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
  }
  slickInit();
  $('a[data-toggle="pill"]').on("shown.bs.tab", function(e) {
    $(".regular").slick("unslick");
    slickInit();
  });

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
});
