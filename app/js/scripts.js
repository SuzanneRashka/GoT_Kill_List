/*

    Template Name : Rolling - Freelancer Portfolio Template
    Author : UiPasta Team
    Website : http://www.uipasta.com/
    Support : http://www.uipasta.com/support/

*/

/*

   Table Of Content

   1. Smooth Scroll
   2. Scroll Naviagation Background Change with Sticky Navigation
   3. Mobile Navigation Hide or Collapse on Click
   4. Scroll To Top
   5. Quotes Slider
   6. Portfolio Filtering
   7. Portfolio Filtering Kill List
   8. Portfolio
   9. Isotope

*/

(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

        /* Scroll Naviagation Background Change with Sticky Navigation */

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });

        /* Mobile Navigation Hide or Collapse on Click */

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195

		    });

        /* Scroll To Top */

        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	      });

  	    $('.scroll-to-top').click(function(){
  		  $('html, body').animate({scrollTop : 0},800);
  		  return false;
  	    });

        /* Quotes Slider */

        $(".quote-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: true,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "backSlide"
        });

        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();

        /* Portfolio Filtering Kill List */

        $(document).ready(function(){
          $('input').change(function(){
            var filter = $(this).val();
            $('option').each(function(){
              if ($(this).val() == filter){
                $(this).show();
              } else {
                $(this).hide();
              }
              $('select').val(filter);
            });
          });
        });

        /*  Portfolio  */

        $(function(){
          $("selectkiller").hide();
          $("all-season").change(function(){
            if($("#selectseason").val()=='all'){
              $("#selectkiller").show();
            } else {
              $("#selectkiller").hide();
            }
          });
        });

    });

        /* Isotope */

        $(function() {

          var $container = $('#container'),
          $select = $('#filters select');
          $container.isotope({
              itemSelector: '.item'
          });
          $select.change(function() {
              var filters = $(this).val();
              $container.isotope({
                  filter: filters
              });
          });
          });

   })(jQuery);
