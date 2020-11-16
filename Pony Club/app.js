
const myFullpage = new fullpage('#fullpage', {
	//Навигация
	menu: '#Mymenu',
	lockAnchors: false,
	anchors: ['main','about','portfolio','contacts'],
	navigation: true,
	navigationPosition: 'left',
	showActiveTooltip: true,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',

	//Скроллинг
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: true,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Доступ
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Дизайн
	controlArrows: true,
	verticalCentered: false,
	sectionsColor : ['#fff', '#fff'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Настроить селекторы
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//события
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});
$(document).ready(function() {
	$("#menu").click(function() {
	  $('.header-menu_open').addClass("show-menu");
	});

	$(".close").click(function() {
		$('.header-menu_open').removeClass("show-menu");
		$('.header-menu_open').addClass("close-menu");
	  });

	  
	  $(".trainers-open").click(function() {
		$('.aboutUs-content').addClass("close-left");
		$('.aboutUs-content').removeClass("show-menu");
		$('.trainers').removeClass("close-left");
		$('.trainers').addClass("show-menu");
	  });
	  
	  $(".close-trainers").click(function() {
		$('.trainers').addClass("close-left");
		$('.trainers').removeClass("show-menu");
		$('.aboutUs-content').removeClass("close-left");
		$('.aboutUs-content').addClass("show-menu");
	  });

		$(".trainers-Jana").click(function() {
			$('.trainers-all-wrapper').addClass("show-menu");
			$('.trainers-all-menu').addClass("close-left");

			$('.trainers-photo-Jana').addClass("show-menu");
			$('.trainers-photo-Jana').removeClass("close-left");
			$('.trainers-all-wrapper-Jana').addClass("show-menu");
			$('.trainers-Jana').addClass("trainers-action");

			$('.trainers-Nataly').removeClass("trainers-action");
			$('.trainers-photo-Nataly').addClass("close-left");
			$('.trainers-photo-Nataly').removeClass("show-menu");

			$('.trainers-Mary').removeClass("trainers-action");
			$('.trainers-photo-Mary').addClass("close-left");
			$('.trainers-photo-Mary').removeClass("show-menu");
			
			$('.trainers-Valerya').removeClass("trainers-action");
			$('.trainers-photo-Valerya').addClass("close-left");
			$('.trainers-photo-Valerya').removeClass("show-menu");

			$('.trainers-Darya').removeClass("trainers-action");
			$('.trainers-photo-Darya').addClass("close-left");
			$('.trainers-photo-Darya').removeClass("show-menu");

			$('.trainers-Olga').removeClass("trainers-action");
			$('.trainers-photo-Olga').addClass("close-left");
			$('.trainers-photo-Olga').removeClass("show-menu");

			$('.trainers-Kata').removeClass("trainers-action");
			$('.trainers-photo-Kata').addClass("close-left");
			$('.trainers-photo-Kata').removeClass("show-menu");
		  });

		  $(".trainers-Nataly").click(function() {
			$('.trainers-all-menu').addClass("close-left");
			$('.trainers-all-wrapper').addClass("show-menu");

			$('.trainers-Nataly').addClass("trainers-action");
			$('.trainers-all-wrapper-Nataly').addClass("show-menu");
			$('.trainers-photo-Nataly').removeClass("close-left");
			$('.trainers-photo-Nataly').addClass("show-menu");

			$('.trainers-Mary').removeClass("trainers-action");
			$('.trainers-photo-Mary').addClass("close-left");
			$('.trainers-photo-Mary').removeClass("show-menu");

			$('.trainers-Jana').removeClass("trainers-action");
			$('.trainers-photo-Jana').addClass("close-left");
			$('.trainers-photo-Jana').removeClass("show-menu");
			
			$('.trainers-Valerya').removeClass("trainers-action");
			$('.trainers-photo-Valerya').addClass("close-left");
			$('.trainers-photo-Valerya').removeClass("show-menu");

			$('.trainers-Darya').removeClass("trainers-action");
			$('.trainers-photo-Darya').addClass("close-left");
			$('.trainers-photo-Darya').removeClass("show-menu");

			$('.trainers-Olga').removeClass("trainers-action");
			$('.trainers-photo-Olga').addClass("close-left");
			$('.trainers-photo-Olga').removeClass("show-menu");

			$('.trainers-Kata').removeClass("trainers-action");
			$('.trainers-photo-Kata').addClass("close-left");
			$('.trainers-photo-Kata').removeClass("show-menu");
		  });

		  $(".trainers-Mary").click(function() {
			$('.trainers-all-menu').addClass("close-left");
			$('.trainers-all-wrapper').addClass("show-menu");

			$('.trainers-Mary').addClass("trainers-action");
			$('.trainers-all-wrapper-Mary').addClass("show-menu");
			$('.trainers-photo-Mary').removeClass("close-left");
			$('.trainers-photo-Mary').addClass("show-menu");
			
			$('.trainers-Nataly').removeClass("trainers-action");
			$('.trainers-photo-Nataly').addClass("close-left");
			$('.trainers-photo-Nataly').removeClass("show-menu");

			$('.trainers-Jana').removeClass("trainers-action");
			$('.trainers-photo-Jana').addClass("close-left");
			$('.trainers-photo-Jana').removeClass("show-menu");

			$('.trainers-Valerya').removeClass("trainers-action");
			$('.trainers-photo-Valerya').addClass("close-left");
			$('.trainers-photo-Valerya').removeClass("show-menu");

			$('.trainers-Darya').removeClass("trainers-action");
			$('.trainers-photo-Darya').addClass("close-left");
			$('.trainers-photo-Darya').removeClass("show-menu");

			$('.trainers-Olga').removeClass("trainers-action");
			$('.trainers-photo-Olga').addClass("close-left");
			$('.trainers-photo-Olga').removeClass("show-menu");

			$('.trainers-Kata').removeClass("trainers-action");
			$('.trainers-photo-Kata').addClass("close-left");
			$('.trainers-photo-Kata').removeClass("show-menu");
		  });


		  $(".trainers-Valerya").click(function() {
			$('.trainers-all-wrapper').addClass("show-menu");
			$('.trainers-all-menu').addClass("close-left");

			$('.trainers-photo-Valerya').addClass("show-menu");
			$('.trainers-photo-Valerya').removeClass("close-left");
			$('.trainers-all-wrapper-Valerya').addClass("show-menu");
			$('.trainers-Valerya').addClass("trainers-action");

			$('.trainers-Nataly').removeClass("trainers-action");
			$('.trainers-photo-Nataly').addClass("close-left");
			$('.trainers-photo-Nataly').removeClass("show-menu");

			$('.trainers-Mary').removeClass("trainers-action");
			$('.trainers-photo-Mary').addClass("close-left");
			$('.trainers-photo-Mary').removeClass("show-menu");

			$('.trainers-Jana').removeClass("trainers-action");
			$('.trainers-photo-Jana').addClass("close-left");
			$('.trainers-photo-Jana').removeClass("show-menu");

			$('.trainers-Darya').removeClass("trainers-action");
			$('.trainers-photo-Darya').addClass("close-left");
			$('.trainers-photo-Darya').removeClass("show-menu");

			$('.trainers-Olga').removeClass("trainers-action");
			$('.trainers-photo-Olga').addClass("close-left");
			$('.trainers-photo-Olga').removeClass("show-menu");

			$('.trainers-Kata').removeClass("trainers-action");
			$('.trainers-photo-Kata').addClass("close-left");
			$('.trainers-photo-Kata').removeClass("show-menu");
		  });

		  $(".trainers-Darya").click(function() {
			$('.trainers-all-wrapper').addClass("show-menu");
			$('.trainers-all-menu').addClass("close-left");

			$('.trainers-photo-Darya').addClass("show-menu");
			$('.trainers-photo-Darya').removeClass("close-left");
			$('.trainers-all-wrapper-Darya').addClass("show-menu");
			$('.trainers-Darya').addClass("trainers-action");

			$('.trainers-Valerya').removeClass("trainers-action");
			$('.trainers-photo-Valerya').addClass("close-left");
			$('.trainers-photo-Valerya').removeClass("show-menu");

			$('.trainers-Nataly').removeClass("trainers-action");
			$('.trainers-photo-Nataly').addClass("close-left");
			$('.trainers-photo-Nataly').removeClass("show-menu");

			$('.trainers-Mary').removeClass("trainers-action");
			$('.trainers-photo-Mary').addClass("close-left");
			$('.trainers-photo-Mary').removeClass("show-menu");

			$('.trainers-Jana').removeClass("trainers-action");
			$('.trainers-photo-Jana').addClass("close-left");
			$('.trainers-photo-Jana').removeClass("show-menu");

			$('.trainers-Olga').removeClass("trainers-action");
			$('.trainers-photo-Olga').addClass("close-left");
			$('.trainers-photo-Olga').removeClass("show-menu");

			$('.trainers-Kata').removeClass("trainers-action");
			$('.trainers-photo-Kata').addClass("close-left");
			$('.trainers-photo-Kata').removeClass("show-menu");
		  });

		  $(".trainers-Olga").click(function() {
			$('.trainers-all-wrapper').addClass("show-menu");
			$('.trainers-all-menu').addClass("close-left");

			$('.trainers-photo-Olga').addClass("show-menu");
			$('.trainers-photo-Olga').removeClass("close-left");
			$('.trainers-all-wrapper-Olga').addClass("show-menu");
			$('.trainers-Olga').addClass("trainers-action");

			$('.trainers-Valerya').removeClass("trainers-action");
			$('.trainers-photo-Valerya').addClass("close-left");
			$('.trainers-photo-Valerya').removeClass("show-menu");

			$('.trainers-Nataly').removeClass("trainers-action");
			$('.trainers-photo-Nataly').addClass("close-left");
			$('.trainers-photo-Nataly').removeClass("show-menu");

			$('.trainers-Mary').removeClass("trainers-action");
			$('.trainers-photo-Mary').addClass("close-left");
			$('.trainers-photo-Mary').removeClass("show-menu");

			$('.trainers-Jana').removeClass("trainers-action");
			$('.trainers-photo-Jana').addClass("close-left");
			$('.trainers-photo-Jana').removeClass("show-menu");

			$('.trainers-Darya').removeClass("trainers-action");
			$('.trainers-photo-Darya').addClass("close-left");
			$('.trainers-photo-Darya').removeClass("show-menu");

			$('.trainers-Kata').removeClass("trainers-action");
			$('.trainers-photo-Kata').addClass("close-left");
			$('.trainers-photo-Kata').removeClass("show-menu");
		  });

		  $(".trainers-Kata").click(function() {
			$('.trainers-all-wrapper').addClass("show-menu");
			$('.trainers-all-menu').addClass("close-left");

			$('.trainers-photo-Kata').addClass("show-menu");
			$('.trainers-photo-Kata').removeClass("close-left");
			$('.trainers-all-wrapper-Kata').addClass("show-menu");
			$('.trainers-Kata').addClass("trainers-action");

			$('.trainers-Valerya').removeClass("trainers-action");
			$('.trainers-photo-Valerya').addClass("close-left");
			$('.trainers-photo-Valerya').removeClass("show-menu");

			$('.trainers-Nataly').removeClass("trainers-action");
			$('.trainers-photo-Nataly').addClass("close-left");
			$('.trainers-photo-Nataly').removeClass("show-menu");

			$('.trainers-Mary').removeClass("trainers-action");
			$('.trainers-photo-Mary').addClass("close-left");
			$('.trainers-photo-Mary').removeClass("show-menu");

			$('.trainers-Jana').removeClass("trainers-action");
			$('.trainers-photo-Jana').addClass("close-left");
			$('.trainers-photo-Jana').removeClass("show-menu");

			$('.trainers-Darya').removeClass("trainers-action");
			$('.trainers-photo-Darya').addClass("close-left");
			$('.trainers-photo-Darya').removeClass("show-menu");

			$('.trainers-Olga').removeClass("trainers-action");
			$('.trainers-photo-Olga').addClass("close-left");
			$('.trainers-photo-Olga').removeClass("show-menu");
		  });

		  $(".close-trainser-wrapper").click(function() {
			$('.trainers-all-menu').removeClass("close-left");
			$('.trainers-all-wrapper').removeClass("show-menu");

			$('.trainers-all-wrapper-Jana').removeClass("show-menu");
			$('.trainers-all-wrapper-Nataly').removeClass("show-menu");
			$('.trainers-all-wrapper-Mary').removeClass("show-menu");
			$('.trainers-all-wrapper-Valerya').removeClass("show-menu");
			$('.trainers-all-wrapper-Darya').removeClass("show-menu");
			$('.trainers-all-wrapper-Olga').removeClass("show-menu");
			$('.trainers-all-wrapper-Kata').removeClass("show-menu");
		  });
		  
		  


  });