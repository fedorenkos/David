$(document).ready(function() {
      $("#myMenu").mmenu({
               "slidingSubmenus": false,
               "extensions": [
                  "position-right",
                  "theme-dark"
               ],
               "navbars": [
                  {
                     "position": "top",
                     "content": [
                        "searchfield"
                     ]
                  },
                  {
                     "position": "bottom",
                     "content": [
                        "<a class='fa fa-envelope' href='#/'></a>",
                        "<a class='fa fa-twitter' href='#/'></a>",
                        "<a class='fa fa-facebook' href='#/'></a>"
                     ]
                  }
               ]
            });


var api = $('#myMenu').data('mmenu');

api.bind( "open:finish", function(){
	$('.hamburger').addClass('is-active');
});

api.bind( "close:finish", function(){
	$('.hamburger').removeClass('is-active');
});


//slider
$(".sl").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 1000,
  fade: true,
});


var show = true;
$(window).on('scroll load resize', function () {

  if (!show) return false;

  var w_top = $(window).scrollTop();
  var e_top = $('.sitting_bg ').offset().top;

  var w_height = $(window).height();
  var d_height = $(document).height();

  var e_height = $('.sitting_bg').outerHeight();

  console.log(w_top + 200 + " " + e_top);

  if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
    $(".spincrement").spincrement({

      decimalPlaces: 1,
      decimalPoint: ",",
      duration: 5000
    });

    show = false;

  }

});

  
});



      
   