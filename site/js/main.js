$( document ).ready(function() {



$('.breakfast-select').click(function() {
	$('.menu-section').each(function() {
		$(this).fadeOut();
	});
	$('#breakfast-wrap').fadeIn();
});

$('.lunch-select').click(function() {
	$('.menu-section').each(function() {
		$(this).fadeOut();
	});
	$('#lunch-wrap').fadeIn();
});
$('.dinner-select').click(function() {
	$('.menu-section').each(function() {
		$(this).fadeOut();
	});
	$('#dinner-wrap').fadeIn();
});
$('#sushi-select').click(function() {
	$('.menu-section').each(function() {
		$(this).fadeOut();
	});
	$('#sushi-wrap').fadeIn();
});


$("#main-menu").on("click", "li:not(.current)", function ( event ) {
    $(".current", event.delegateTarget).removeClass("current");
    $(this).addClass("current");
});



$(document.body).on('click', '#fb-icon', function() {
	$('#fb-wrap').slideToggle('slow', function() {
	// Animation complete.
	});
});


	$(document.body).on('click', '#switch1', function() {
		// find item within the wrapper, then append to that target
		$('#inner-header').find('#header-image').attr('src', 'images/slider-image1.png');
	});

	$(document.body).on('click', '#switch2', function() {
		// find item within the wrapper, then append to that target
		$('#inner-header').find('#header-image').attr('src', 'images/slider-image2.png');
	});

	$(document.body).on('click', '#switch3', function() {
		// find item within the wrapper, then append to that target
		$('#inner-header').find('#header-image').attr('src', 'images/slider-image3.png');
	});

	$(document.body).on('click', '#switch4', function() {
		// find item within the wrapper, then append to that target
		$('#inner-header').find('#header-image').attr('src', 'images/slider-image4.png');
	});



// and to demonstrate how to target and edit dynamic content
// use a click on body, then compare target

//Begin Ajax Jquery For Image Menu


	loadURLHash();

	$('.ajax-link').click(function() {
		var href = $(this).attr('href');
		var toLoad = href + ' #ajax-wrap';

		if (href.match(/.php/)) {
			window.location.hash = href.substr(0, href.length - 4);
		} else {
			window.location.hash = href.substr(0, href.length - 5);
		}
		// currently, changing the URL will initiate this function
		//$('#ajax-wrap').hide('fast',loadContent(toLoad));
		return false;
	});


	// listen for change in hash
	window.onhashchange = function() {
		loadURLHash();
	}

	// run load function when hash has been changed
	function loadURLHash() {
		// Check for hash value in URL
		var hash = window.location.hash.substr(1);
		console.log(hash);
		var href = $('.ajax-link').each(function(){ //operation of ajax-link classes
			var toLoad, ext, hrefCheck;
			var href = $(this).attr('href');
			console.log(href);

			//var hrefCheck = href.match(/.php/) ? href.substr(0, href.length - 4) : href.substr(0, href.length - 5);

			if (href.match(/.php/)) {
				hrefCheck = href.substr(0, href.length - 4);
				ext = '.php';
			} else if (href.match(/.html/)) {
				hrefCheck = href.substr(0, href.length - 5);
				ext = '.html';
			}

			if(hash==hrefCheck){
				var toLoad = hash + ext + ' #ajax-wrap';
				$('#ajax-wrap').hide('fast',loadContent(toLoad));
			}
		});
	}

	function loadContent(toLoad) {
		$('#ajax-wrap').load(toLoad,'',showNewContent)
	}

	function showNewContent() {
		$('#ajax-wrap').show('normal');
	}



// QUICK AND DIRTY AJAX SLIDER LINK

});
