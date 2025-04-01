document.addEventListener('DOMContentLoaded', () => {

    var ourWorkSlider = new Swiper(".our-work__slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: ".our-work__pagination",
            // type: "progressbar",
        },
        navigation: {
            nextEl: ".our-work__next",
            prevEl: ".our-work__prev",
        },
		  breakpoints: {
			640: {
			  slidesPerView: 2,
			  spaceBetween: 20,
			},
			1500: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
		 },
    });

    var firstScreenSlider = new Swiper(".first-screen__slider", {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: "fade",
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
    });

    var reviewsSlider = new Swiper(".reviews__slider", {
        slidesPerView: 2,
        spaceBetween: 20,
        pagination: {
            el: ".reviews__pagination",
            clickable: true,
            // type: "progressbar",
        },
        navigation: {
            nextEl: ".reviews__next",
            prevEl: ".reviews__prev",
        },breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          980: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
         },
    });

    var gallerySlider = new Swiper(".gallery__slider", {
        slidesPerView: 6,
        spaceBetween: 20,
        freeMode: true,
        loop: true,
        pagination: {
            el: ".gallery__pagination",
            clickable: true,
            
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
         },
    });
    var ourWorkImgSlider1 = new Swiper(".our-work-img__slider1", {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      loop: true,
      pagination: {
          el: ".our-work-img__pagination1",
          clickable: true,
      },
      navigation: {
        nextEl: ".our-work-img__next1",
        prevEl: ".our-work-img__prev1",
      },
    });
    var ourWorkImgSlider2 = new Swiper(".our-work-img__slider2", {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      loop: true,
      pagination: {
          el: ".our-work-img__pagination2",
          clickable: true,
      },
      navigation: {
        nextEl: ".our-work-img__next2",
        prevEl: ".our-work-img__prev2",
      },
    });
    var ourWorkImgSlider3 = new Swiper(".our-work-img__slider3", {
      slidesPerView: 1,
      spaceBetween: 0,
      effect: "fade",
      loop: true,
      pagination: {
          el: ".our-work-img__pagination3",
          clickable: true,
      },
      navigation: {
        nextEl: ".our-work-img__next3",
        prevEl: ".our-work-img__prev3",
      },
    });

    let hoverContainer = document.querySelector('.first-screen__content-right');
    hoverContainer.addEventListener('mouseover', function () {
        document.querySelector('.first-screen').classList.add('hover-container');
    });
    hoverContainer.addEventListener('mouseleave', function () {
        document.querySelector('.first-screen').classList.remove('hover-container');
    });

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('.toTopBtn').fadeIn();
            } else {
                $('.toTopBtn').fadeOut();
            }
        });
        $('.toTopBtn').click(function () {
            $('body,html').animate({ scrollTop: 0 }, 800);
        });
    });


    var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $("header").addClass("header-scroll");
        } else {
            $("header").removeClass("header-scroll");
        }
    });

    $(".header__burger").on('click', function () {
        $('body').toggleClass('menu-open')
    });

    $(".menu__link").on('click', function () {
		$('body').removeClass('menu-open')
    });

    $("a[rel='m_PageScroll2id']").mPageScroll2id({
      offset: 1,
      keepHighlightUntilNext: true
  });
});