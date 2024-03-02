const swiper = new Swiper('.swiper', {
    // Optional parameters
      //spaceBetween: 30,
      direction: 'horizontal',
      slidesPerView: 3,
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          200: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          2000: {
            slidesPerView: 4,
          }
        },
    });
    