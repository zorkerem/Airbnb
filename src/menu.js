(function ($) {
	$(".headerHero__icon").click(function () {
		$(".headerHero__menu").toggle();
		$(".headerHero__icon").toggleClass("fixed");
		$(".headerHero__icon span:nth-child(1)").toggleClass("active1");
		$(".headerHero__icon span:nth-child(2)").toggleClass("active2");
	});
})(jQuery);