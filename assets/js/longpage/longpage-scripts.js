function layoutBuild() {
	$('.sub-blocks-wrap img').each(function () {

		thisImage = $(this);

		if (thisImage.width() < thisImage.height()) {

			thisImage.addClass('portrait');

		} else if (thisImage.width() > thisImage.height()) {

			thisImage.addClass('landscape');
		}

	});

	$('.sub-blocks-wrap').each(function () {

		var count = $(this).children().length;

		if (count == 1) {

			$(this).addClass('set-1');

		} else if (count == 2) {

			$(this).removeClass('set-2 portrait-set');

			$(this).addClass('portrait-set');


		}

	});
}

jQuery(document).ready(function($) {

	/**
	 *  scroll indicators
	 */
	var scrollIndicators = $('.scroll-indicator, .right-arrow');
	// lazyload();

	setTimeout(function() {
		$('.menu-toggle').removeClass('burger-dark');
		$('.site-header').removeClass('title-dark icon-dark');
	}, 500);
	
	
	/*=========================*\
	* Long page behaviour
	* =========================*/

	$(window).on('resize', function () {

		var maxWidth = 767;
		var width = $(window).width();

		if (width >= maxWidth) {

			var articleWaypoints =
				$('#main article:not(#post-1486):not(#post-1643)').each(function (index, elem) {

					$(elem).waypoint(function (direction) {
						$(elem).toggleClass('active-panel');

						var getCurrent = $('.active-panel').last();
						var getTrigger = getCurrent.prev('.panel-trigger').data('panel');
						var current = $('.internal-nav-list li' + '[data-panel="' + getTrigger + '"]');

						if( $(elem).is(':last-child') ) {
							$('.last-panel').toggleClass('last-panel-active');
						}

						navCurrent(current);

					}, {
							context: '#primary',
							horizontal: true
						});
				});

			var headerWaypoints =
				$('article:not(#post-1486):not(#post-1643) .panel-header').each(function (index, elem) {
					$(elem).waypoint(function (direction) {
						$(elem).parent().toggleClass('complete-panel');

					}, {
							context: '#primary',
							horizontal: true,
							offset: 'right-in-view'
						});
				});

			/**
			 * Burger icon 
			 */
			var burgerWaypointOn =
				$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
					$(elem).waypoint(function (direction) {

						if ( direction == 'right') {
							$('.menu-toggle').removeClass('burger-dark');
						} else {
							$('.menu-toggle').addClass('burger-dark');
						}
						
					}, {
							context: '#primary',
							horizontal: true,
							offset: '95%'
						});
				});

			var burgerWaypointOff =
				$('article:not(#post-1486):not(#post-1643) .panel-header').each(function (index, elem) {
					$(elem).waypoint(function (direction) {
						if (direction == 'right') {
							$('.menu-toggle').addClass('burger-dark');
						} else {
							$('.menu-toggle').removeClass('burger-dark');
						}
					}, {
							context: '#primary',
							horizontal: true,
							offset: '95%'
						});
				});

			/**
			 * Header image 
			 */
				var titleWaypointOn =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							console.log(direction);
							if ( direction == 'right' ) {
								$('.site-header').removeClass('title-dark');
							} else {
								$('.site-header').addClass('title-dark');
							}
							
						}, {
								context: '#primary',
								horizontal: true,
								offset: '50%'
							});
					});

				var titleWaypointOff =
					$('article:not(#post-1486):not(#post-1643) .panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							console.log(direction);
							if (direction == 'right') {
								$('.site-header').addClass('title-dark');
							} else {
								$('.site-header').removeClass('title-dark');
							}

						}, {
								context: '#primary',
								horizontal: true,
								offset: '50%'
							});
					});

			/**
			 * Icon 
			 */
				var iconWaypointOn =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {

							if ( direction == 'right' ) {
								$('.site-header').removeClass('icon-dark');
							} else {
								$('.site-header').addClass('icon-dark');
							}
							
						}, {
								context: '#primary',
								horizontal: true,
								offset: '5%'
							});
					});

				var iconWaypointOff =
					$('article:not(#post-1486):not(#post-1643) .panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							if (direction == 'right') {

								$('.site-header').addClass('icon-dark');
							} else {
								$('.site-header').removeClass('icon-dark');
							}

						}, {
								context: '#primary',
								horizontal: true,
								offset: '5%'
							});
					});

				/**
				 * Setup nav children / parents
				 */ 

				$('.internal-nav-list > li:not([data-panel])').each(function () {

					var cut = $(this).children('ul');
					var target = $(this).prev('li');

					cut.appendTo(target);

					$(this).remove();

				});

				/* ========================= *\
				* NAV WAYPOINTS
				* This needs refactoring.
				/**
				 * Currently each nth-child
				 * is being manually written.
				 * Is there a way we can
				 * loop through nth-childs
				 * and offsets through an
				 * array?
				* ========================= */

				$('#main article:first-of-type').waypoint(function(direction) {
					$('.internal-nav-list > li').removeClass('item-light');
				});

				var navItem1 = $('.internal-nav-list > li:nth-child(1)').outerWidth(true);
				var navItem2 = $('.internal-nav-list > li:nth-child(2)').outerWidth(true);
				var navItem3 = $('.internal-nav-list > li:nth-child(3)').outerWidth(true);
				var navItem4 = $('.internal-nav-list > li:nth-child(4)').outerWidth(true);
				var navItem5 = $('.internal-nav-list > li:nth-child(5)').outerWidth(true);
				var navItem6 = $('.internal-nav-list > li:nth-child(6)').outerWidth(true);
				var navItem7 = $('.internal-nav-list > li:nth-child(7)').outerWidth(true);
				var navItem8 = $('.internal-nav-list > li:nth-child(8)').outerWidth(true);
				var navItem9 = $('.internal-nav-list > li:nth-child(9)').outerWidth(true);
				var navItem10 = $('.internal-nav-list > li:nth-child(10)').outerWidth(true);
				var navItem11 = $('.internal-nav-list > li:nth-child(11)').outerWidth(true);
				var navItem12 = $('.internal-nav-list > li:nth-child(12)').outerWidth(true);
				var navItem13 = $('.internal-nav-list > li:nth-child(13)').outerWidth(true);

				var nav1 = (navItem1 / 2) + 60;
				var nav2 = (navItem2 / 2) + navItem1 + 60;
				var nav3 = (navItem3 / 2) + navItem1 + navItem2 + 60;
				var nav4 = (navItem4 / 2) + navItem1 + navItem2 + navItem3 + 60;
				var nav5 = (navItem5 / 2) + navItem1 + navItem2 + navItem3 + navItem4 + 60;
				var nav6 = (navItem6 / 2) + navItem1 + navItem2 + navItem3 + navItem4 + navItem5 + 60;
				var nav7 = (navItem7 / 2) + navItem1 + navItem2 + navItem3 + navItem4 + navItem5 + navItem6 + 60;
				var nav8 = (navItem8 / 2) + navItem1 + navItem2 + navItem3 + navItem4 + navItem5 + navItem6 + navItem7 + 60;
				var nav9 = (navItem9 / 2) + navItem1 + navItem2 + navItem3 + navItem4 + navItem5 + navItem6 + navItem7 + navItem8 + 60;
				var nav10 = (navItem10 / 2) + navItem1 + navItem2 + navItem3 + navItem4 + navItem5 + navItem6 + navItem7 + navItem8 + navItem9 + 60;
				var nav11 = (navItem11 / 2) + navItem1 + navItem2 + navItem3 + navItem4 + navItem5 + navItem6 + navItem7 + navItem8 + navItem9 + navItem10 + 60;
				var nav12 = (navItem12 / 2) + navItem1 + navItem2 + navItem3 + navItem4 + navItem5 + navItem6 + navItem7 + navItem8 + navItem9 + navItem10 + navItem11 + 60;
				var nav13 = (navItem13 / 2) + navItem1 + navItem2 + navItem3 + navItem4 + navItem5 + navItem6 + navItem7 + navItem8 + navItem9 + navItem10 + navItem11 + navItem12 + 60;

				var imgNavWaypoint1 =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(1)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav1
							});
					});

				var imgNavWaypoint2 =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(2)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav2
							});
					});

				var imgNavWaypoint3 =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(3)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav3
							});
					});

				var imgNavWaypoint4 =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(4)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav4
							});
					});

				var imgNavWaypoint5 =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(5)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav5
							});
					});

				var imgNavWaypoint6 =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(6)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav6
							});
					});

				var imgNavWaypoint7 =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(7)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav7
							});
					});

				var imgNavWaypoint8 =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(8)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav8
							});
					});

				var imgNavWaypoint9 =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(9)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav9
							});
					});

				var imgNavWaypoint10 =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(10)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav10
							});
					});

				var imgNavWaypoint11 =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(11)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav11
							});
					});

				var imgNavWaypoint12 =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(12)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav12
							});
					});

				var imgNavWaypoint13 =
					$('article:not(#post-1486):not(#post-1643) .main-image').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(13)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav13
							});
					});

				var panelNavWaypoint1 =
					$('.panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(1)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav1
							});
					});

				var panelNavWaypoint2 =
					$('.panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(2)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav2
							});
					});

				var panelNavWaypoint3 =
					$('.panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(3)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav3
							});
					});

				var panelNavWaypoint4 =
					$('.panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(4)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav4
							});
					});

				var panelNavWaypoint5 =
					$('.panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(5)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav5
							});
					});

				var panelNavWaypoint6 =
					$('.panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(6)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav6
							});
					});

				var panelNavWaypoint7 =
					$('.panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(7)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav7
							});
					});

				var panelNavWaypoint8 =
					$('.panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(8)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav8
							});
					});

				var panelNavWaypoint9 =
					$('.panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(9)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav9
							});
					});

				var panelNavWaypoint10 =
					$('.panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(10)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav10
							});
					});

				var panelNavWaypoint11 =
					$('.panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(11)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav11
							});
					});

				var panelNavWaypoint12 =
					$('.panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(12)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav12
							});
					});

				var panelNavWaypoint13 =
					$('.panel-header').each(function (index, elem) {
						$(elem).waypoint(function (direction) {
							$('.internal-nav-list > li:nth-child(13)').toggleClass('item-light');
						}, {
								context: '#primary',
								horizontal: true,
								offset: nav13
							});
					});

			/* ========================= *\
			* END OF NAV WAYPOINTS
			* ========================= */

			var screenWidth = ($(window).width() + "").substr(0, 2);
			var scrollTime = 0;

			if (screenWidth > 20) {
      	scrollTime = screenWidth / 75;
			} else {
      	scrollTime = screenWidth / 50;
			}

     	var scrollDistance = 200;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
     	var isTweening = false;

     	if( (navigator.appVersion.indexOf('Edge') > -1) ) { // EDGE fix
     		scrollDistance = 500;
     	}

     	$('.content-area').off('mousewheel');
			$('.content-area').mousewheel(function(event, delta) {
				
				if( (navigator.appVersion.indexOf('Edge') > -1) && isTweening ) { // EDGE fix
					return false;
				} 
				
				var $window = $('.content-area');		//Window object
				$.browser.chrome = $.browser.webkit && !!window.chrome;
				$.browser.safari = $.browser.webkit && !window.chrome;

				scrollIndicators.removeClass('revealed');

				// $window.on("mousewheel DOMMouseScroll", function (event) {
				if ( ($.browser.chrome) || ($.browser.safari) ) {

					event.preventDefault();

					var delta = event.originalEvent.wheelDelta / 120 || -event.originalEvent.detail / 3;
					var scrollLeft = $window.scrollLeft();
					var finalScroll = scrollLeft - parseInt(delta * scrollDistance);

					isTweening = true;

					TweenMax.to($window, scrollTime, {
						scrollTo: { x: finalScroll, rotation:0.01, autoKill: false },
						ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
						overwrite: 5,
						onComplete: function(){ 
				   		isTweening = false; 
						}
					});

					// if current browser is Chrome on Windows
					if (navigator.appVersion.indexOf("Win") != -1) {
						
						if (Math.abs(event.deltaX)) {
							this.scrollLeft -= (delta * 80);
						} else {
							this.scrollLeft -= (delta * 80);
						}

					} else {
						
						if (Math.abs(event.deltaX)) {
							this.scrollLeft -= (delta * 1);
						} else {
							this.scrollLeft -= (delta * 1);
						}

					}

				} else {

					if (Math.abs(event.deltaX)) {
						this.scrollLeft -= (delta * 80);
					} else {
						this.scrollLeft -= (delta * 80);
					}

				}

			});

			var exploreTrigger = $('.panel-trigger[data-panel="1"]').next('article').find('.panel-header');

			exploreTrigger.waypoint(function (direction) {
					$(exploreTrigger).toggleClass('exploring');
				}, {
					context: '#primary',
					horizontal: true,
					offset: '98%'
				});

			$('.site-main').css('margin-bottom', 0);

			scrollIndicators.on('click', function() {

				var targetPanel = $(this).parent('.panel-header').prev('.main-image');

				$('#primary').scrollTo(
					$( targetPanel ),
					1000,
					{
						offset: 500
					}
				);

				scrollIndicators.removeClass('revealed');
			})

		/**
		 * END OF DESKTOP BEHAVIOURS
		 */
		} else {
		/**
		 * MOBILE BEHAVIOURS
		 */

			$('.content-area').unbind('mousewheel');
			$('#main article').unbind('waypoint');

			var panelHeight = $('.last-panel-nav').outerHeight();
			$('.site-main').css('margin-bottom', panelHeight);

		}

	}).resize();

	/**
	 * Nav bar jumps
	 */

	$('.internal-nav-list li[data-panel] > span').on('click', function () {

		var target = $(this).parent('li[data-panel]').data('panel');
		var panel = $('.panel-trigger[data-panel="' + target + '"]').next('article');

		$('#main article, .last-panel').addClass('transition');

		setTimeout(function() {
			$('#primary').scrollTo(
				$(panel)
			);

		}, 250);

		setTimeout(function() {
			$('#main article, .last-panel').removeClass('transition');
		}, 300);
		
		scrollIndicators.addClass('revealed');

		var current = $(this).parent('li');

		navCurrent(current);

	});

	function navCurrent(current) {

		$('.internal-nav-list li[data-panel]').removeClass('active-nav');

		var parent = current.parent().parent('li');

		if ( parent.length ) {

			parent.addClass('active-nav');

		}

		$(current).addClass('active-nav');

	}


});

jQuery(document).ready(function () {
	/**
	 * fires the layoutBuild function
	 * to begin laying out the 
	 * different layout 
	 * possibilities...
	 */
	layoutBuild();
    var pageWidth = 0;
    $('#main article').each(function () {
        pageWidth += $(this).outerWidth();
    });

    var loadingTimer = 0;
    // setInterval(function() {
    //     if (loadingTimer < 100) {
    //         loadingTimer += 1;
    //         $('.overlay-image p').html(loadingTimer + '%');
    //     }
    // }, 15);

    TweenMax.to($('.content-area'), 1, {
        scrollTo: { x: pageWidth },
        ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
        overwrite: 5,
        onComplete: function () {
            setTimeout(function () {
                TweenMax.to($('.content-area'), 0.7, {
                    scrollTo: {x: 0},
                    ease: Power1.easeOut,	//For more easing functions see https://api.greensock.com/js/com/greensock/easing/package-detail.html
                    overwrite: 5,
                    onComplete: function () {
                        $('.overlay-image').addClass('hidden');
                        setTimeout(function () {
                            $('.overlay-content').addClass('hidden');
                            setTimeout(function () {
                                $('.overlay-content').addClass('remove-element');
                            }, 300);
                        }, 300);
                    }
                });
            }, 300);
        }
    });

    // Remove loader backup
    setTimeout(function() {
        $('.overlay-image').addClass('hidden');
        $('.overlay-content').addClass('hidden');
        $('.overlay-content').addClass('remove-element');
	}, 2500);
});

jQuery(window).on('load', function () {
	/**
	 * But sometimes the function fires
	 * before 
	 */
	layoutBuild();

	Waypoint.refreshAll();
});
