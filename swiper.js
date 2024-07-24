var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.8,
    centeredSlides: true,
    spaceBetween: 10,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,

    },
  });