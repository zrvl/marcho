$(function() {

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="20px" viewBox="0 0 10 20" version="1.1">< g id="surface1" ><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 7.5 17.5 C 7.179688 17.5 6.859375 17.378906 6.617188 17.132812 L 0.367188 10.882812 C -0.121094 10.394531 -0.121094 9.605469 0.367188 9.117188 L 6.617188 2.867188 C 7.105469 2.378906 7.894531 2.378906 8.382812 2.867188 C 8.871094 3.355469 8.871094 4.144531 8.382812 4.632812 L 3.015625 10 L 8.382812 15.367188 C 8.875 15.855469 8.875 16.648438 8.382812 17.132812 C 8.140625 17.378906 7.820312 17.5 7.5 17.5 Z M 7.5 17.5 " /></></svg ></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="10px" height="20px" viewBox="0 0 10 20" version="1.1">< g id="surface1" ><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 2.5 17.5 C 2.179688 17.5 1.859375 17.378906 1.617188 17.132812 C 1.128906 16.644531 1.128906 15.855469 1.617188 15.367188 L 6.984375 10 L 1.617188 4.632812 C 1.128906 4.144531 1.128906 3.351562 1.617188 2.867188 C 2.105469 2.375 2.894531 2.375 3.382812 2.867188 L 9.632812 9.117188 C 10.121094 9.601562 10.121094 10.394531 9.632812 10.882812 L 3.382812 17.132812 C 3.140625 17.378906 2.820312 17.5 2.5 17.5 Z M 2.5 17.5 " /></></svg ></button>',
    infinite: false,
  });

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  })

  $('.shop-content__filter-btn').on('click', function(){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--grid');
    $(this).addClass('shop-content__filter-btn--grid')
  });

  $('.button-list').on('click', function() {
    $('.product-item').addClass('product-item--list')
  });

  $('.button-grid').on('click', function() {
    $('.product-item').removeClass('product-item--list')
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    arrows: false,
    fade: true,
    draggable: false,
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.select-style, .product-one__num').styler();

  $('.star').rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('.promo__clock', deadline);

});

