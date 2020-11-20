jQuery(document).ready(function($) {

    $('.menu-toggle').click(function () {
        if ($(window).width() < 992 && $(window).width() > $(window).height()) {
            if ($('body').hasClass('main-menu-open')) {
                $('.site-title').css('display', ' block');
            } else {
                $('.site-title').css('display', 'none');
            }
    	} else {
    		$('.site-title').css('display', ' block');
    	}

    });

	/*=========================*\
	* Main menu
	* =========================*/
	$('.menu-toggle').on('click', function() {
		
		if ( $('body').hasClass('main-menu-open') ) {

			$('body').removeClass('main-menu-open');

			$('main .menu-background figure:first-child').addClass('active');

		} else {

			$('body').addClass('main-menu-open');

		}

	});

	/*=========================*\
	* Menu full backgrounds
	* =========================*/

	var current;
	var timer = false;

	function backgroundTimer() {
		timer = setInterval(backgroundSwitch, 5000);	
	}

	function backgroundSwitch() {

		var current = $('.menu-background-item.active');
		var nextItem = current.next();

		if (!nextItem.length) {
			var nextItem = $('.menu-background-item').first();

		}

		$('.menu-background-item').removeClass('active');

		nextItem.addClass('active');


	}

	$('.menu-background-item:first-child').addClass('active');

	// When you hover over a nav item...
	$('nav a[data-background]').mouseover(function () {

		clearTimeout(timer);

		// Get the current background data tag...
		var menuItem = $(this).data('background');

		// Reset all nav backgrounds...
		$('.menu-background-item').removeClass('active');

		// Make active the background item that matches the nav's data attr
		$('.menu-background-item[data-background="' + menuItem + '"]').addClass('active');


	}).mouseout(function() {
		
		// Reset all nav backgrounds...
		$('.menu-background-item').removeClass('active');

		$('.menu-background-item:first-child').addClass('active');

		backgroundTimer();

	});

	backgroundTimer();



	/*=========================*\
	* Down arrow
	* =========================*/
	$('.down-arrow').click(function () {
		
		var nextSection = $(this).parents('section').next('section');

		$('html,body').animate({
			scrollTop: $(nextSection).offset().top
		}, 1000);

	});


	/*=========================*\
	* Full screen images
	* =========================*/

	var timeoutId;
	
	function videobgEnlarge() {

			$('.menu-background-video, .fullscreen-panel-video').each(function () {

				var $videoBgAspect = $(this).find(".videobg-aspect");
				var $videoBgWidth = $(this).find(".videobg-width");
				var videoAspect = $videoBgAspect.outerHeight() / $videoBgAspect.outerWidth();

				windowAspect = ($(window).height() / $(window).width());
				if (windowAspect > videoAspect) {
					$videoBgWidth.width((windowAspect / videoAspect) * 100 + '%');
				} else {
					$videoBgWidth.width(100 + "%")
				}

			});


		}
	
	$(window).resize(function() {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(videobgEnlarge, 100);
	});

	$(function() {
		videobgEnlarge();
	});

});