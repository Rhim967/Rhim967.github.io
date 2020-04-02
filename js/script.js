$(document).ready(function(){
  $('.corousel__inner').slick({
      speed: 1200,
      adaptiveHeight: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icon/left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icon/right.png"></button>',
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  dots: true,
                  arrows: false,
              }
          }
      ]
  });
  
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__link-back');

  // modal windows

  $('[data-modal=consult]').on('click', function() {
     $('.overlay, #consult').fadeIn('slow');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consult, #order, #thanks').fadeOut('slow');
  });
 
  $('.button_mini').each(function(i) {
      $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
      });
  });

  $('#slick-slide-control00, #slick-slide-control01, #slick-slide-control02').empty();
});