$(document).ready(function() {
	testimonialCarousel();
	portfolioMasonry();
	isotopeFiltering();
	toggleMobileMenu();
});

function testimonialCarousel() {
	$('.testimoials-container').owlCarousel({
		items: 1
	});
}

function portfolioMasonry() {
	$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 360,
		fitWidth: true,
		gutter: 10,
	});
}

function isotopeFiltering() {
	var grid = $('.isotope-grid').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows',
		fitRows: {
			gutter: 10
		}
	});
	
	$('.filter-button-group').on('click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		grid.isotope({filter: filterValue});
	});
}

function toggleMobileMenu() {
	$('.mobile-menu-toggler').on('click', function() {
		$(this).toggleClass('is-active'); // Used to change menu from burger to close icon and vice versa. 
		$('header > nav').toggleClass('visible'); // Used to bring the nav menu into view .
		$('html, body').toggleClass('disableScrolling'); // Disables scrolling when menu is active.
	})
}