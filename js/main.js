$(document).ready(function(){
	$('.slider').slick({
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true,
          slidesToShow: 1,
    });

  $('.single-slider').slick({
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: true,
          slidesToShow: 1,
    });

  $(window).load(function(){
      $ (".bottom-header").sticky({ topSpacing: 0, className: 'sticky' });
  });

  $('.bottom-right__btn-search').click(function(){
    $('.search').toggleClass('search-translate');
    $('body').toggleClass('body-overflow');
    $('.search-form__input').focus();
  });
  $('.search__close').click(function(){
    $('.search').toggleClass('search-translate');
    $('body').toggleClass('body-overflow');
  });
});