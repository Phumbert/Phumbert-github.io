// Custom Javascripts
// MUG Responsive One-Page Portfolio Template
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// 01 Isotope
var $container = $('.portfolio-content');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		}
	});

	$('nav.portfolio-nav ul a').click(function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
	  return false;
	});

	var $optionSets = $('nav.portfolio-nav ul'),
	       $optionLinks = $optionSets.find('a');
	 
	       $optionLinks.click(function(){
	          var $this = $(this);
		  // don't proceed if already selected
		  if ( $this.hasClass('selected') ) {
		      return false;
		  }
	   var $optionSet = $this.parents('nav.portfolio-nav ul');
	   $optionSet.find('.selected').removeClass('selected');
	   $this.addClass('selected'); 
	});
	
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// 02 Smooth Scroll
$( '.home a, .arrow' ).click( function( e ) {
e.preventDefault();
var MainNavId = $( this ).attr( 'href' );
$( 'html, body' ).animate({ scrollTop : $( MainNavId ).offset().top }, 1500);
});

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// 03 Sticky Menubar
$(window).load(function(){
      $("#MainNav").sticky({ topSpacing: 0 });
    });
	
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

	
// 04 Our Skills Bar
if($('.our-skills').length != 0){
	var skillbar_active = false;
	$('.skill-bar-value').hide();
			
	if($(window).scrollTop() == 0 && isScrolledIntoView($('.our-skills')) == true){
		skillbarActive();
		skillbar_active = true;
	}
			else if(isScrolledIntoView($('.our-skills')) == true){
				skillbarActive();
				skillbar_active = true;
			}
	$(window).bind('scroll', function(){
		if(skillbar_active === false && isScrolledIntoView($('.our-skills')) == true ){
			skillbarActive();
			skillbar_active = true;
		}
	});
}

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= (docViewBottom + $(elem).height())) && (elemTop >= (docViewTop - $(elem).height())));
}

function skillbarActive(){
	setTimeout(function(){

		$('.skill-bar-value').each(function() {
			$(this)
				.data("origWidth", $(this)[0].style.width)
				.css('width','1%').show();
			$(this)
				.animate({
				width: $(this).data("origWidth")
				}, 1200);
		});

		$('.skill-bar-value .dot').each(function() {
			var me = $(this);
			var perc = me.attr("data-percentage");

			var current_perc = 0;

			var progress = setInterval(function() {
				if (current_perc>=perc) {
					clearInterval(progress);
						} else {
							current_perc +=1;
							me.text((current_perc)+'%');
						}
			}, 10);
		});
	}, 10);}

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// 05 Parallax Efect
$('#MainHeader').parallax("20%", 0.2);
$('#Quote').parallax("20%", 0.2);
$('#Image-Quote').parallax("20%", 0.2);

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// 06 Flexslider
$(function(){
  SyntaxHighlighter.all();
});
$(window).load(function(){
  $('.flexslider').flexslider({
	animation: "fade",
	start: function(slider){
	  $('body').removeClass('loading');
	}
  });
  $('.flexheader').flexslider( {
  	animation: "slide",
  	directionNav: false,
  	direction: "vertical",
  	slideshowSpeed: 5000
  	
  });
});

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// 07 Responsive Menu
jQuery('.menu').meanmenu({
	meanMenuContainer: ".menuresponsive",
	meanScreenWidth: "780"
});

//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// 08 Loader
$(window).load(function() {
    $('.spinner').fadeOut();
});
