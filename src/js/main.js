    if ($('.js-hamburger').length) {

        $('.js-hamburger').click(function() {

          	var nav = $('.header_mob-nav')

          	$(this).toggleClass('is-active');
          	nav.toggleClass('header_mob-nav--open');
          	$(".header").toggleClass('header_fixed');

      	}); 
    };
    if ($('#links').length) {
        document.getElementById('links').onclick = function (event) {

        	event = event || window.event;

        	var target = event.target || event.srcElement,
        	    link = target.src ? target.parentNode : target,
        	    options = {index: link, event: event},
        	    links = this.getElementsByTagName('a');

        	blueimp.Gallery(links, options);
        };
    }

    if ($('.js-user_present').length) {

        $('.js-user_present').slick({
          dots: false,
          infinite: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
          ]
        });
      };

