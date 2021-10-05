function topBar_menu(){
  $('.top-bar-2>.con>nav>*:not(.logo)').mouseenter(function(){
    $('.top-bar-2>.con>nav ul').addClass('hover');
    $('.top-bar-2>.con>nav>.menu-bg').addClass('hover');
  });
  $('.top-bar-2>.con>nav>*:not(.logo)').mouseleave(function(){
    $('.top-bar-2>.con>nav ul').removeClass('hover');
    $('.top-bar-2>.con>nav>.menu-bg').removeClass('hover');
  });
};

topBar_menu();

function mainBn_swiper(){
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

mainBn_swiper();