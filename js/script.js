$(document).ready(function () {
   $('.parallax__list>li').addClass('layer');
   $('.parallax__list').parallax();
   $('.wrapper').addClass('active');
   $('.parallax__container').addClass('active');

   //высота бекграунда
   /*
      $(function checkForChanges() {
         if (window.matchMedia('(max-width: 550px)').matches) {
            var height = $('.general__page').height(); //получаем высоту одного элемента
            $('.general__page.blog').height(height); //записываем высоту другому элементу
         };
         if (window.matchMedia('(max-width: 1023.98px)').matches) {
            var height = $('.general__page').height(); //получаем высоту одного элемента
            $('.general__page.blog').height(height); //записываем высоту другому элементу
         };
         if (window.matchMedia('(max-width: 1599.98px)').matches) {
            var height = $('.general__page').height(); //получаем высоту одного элемента
            $('.general__page.blog').height(height); //записываем высоту другому элементу
         };
         setTimeout(checkForChanges, 500);
      });
   */

   //burger
   $('.burger').click(function (event) {
      $('.burger,.menu__list,.header__logo').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.menu__link').click(function (event) {
      $('.burger,.menu__list,.header__logo').removeClass('active');
      $('body').toggleClass('lock');
   });


   //tabs
   $('.social__item').click(function (event) {
      $(this).addClass('active');
      $(this).siblings(".social__item").removeClass("active");
      var z = $('.social__item.active').index();
      if (z == 0) {
         $('.social__icon.instagram').addClass('active').siblings(".social__icon").removeClass("active");;
         $('.social__content.instagram').addClass('active').siblings(".social__content").removeClass("active");;
         $('.instagram__img').addClass('active');;
         $('.telegram__gif, .youtube__vid, .github__img').removeClass('active');;
         pauseVideo();
      };
      if (z == 1) {
         $('.social__icon.telegram').addClass('active').siblings(".social__icon").removeClass("active");;

         $('.social__content.telegram').addClass('active').siblings(".social__content").removeClass("active");;
         $('.telegram__gif').addClass('active');;
         $('.instagram__img, .youtube__vid, .github__img').removeClass('active');;
         pauseVideo();
      };
      if (z == 2) {
         $('.social__icon.youtube').addClass('active').siblings(".social__icon").removeClass("active");;

         $('.social__content.youtube').addClass('active').siblings(".social__content").removeClass("active");;
         $('.youtube__vid').addClass('active');;
         $('.instagram__img, .telegram__gif, .github__img').removeClass('active');;
         //playVideo();
      };
      if (z == 3) {
         $('.social__icon.github').addClass('active').siblings(".social__icon").removeClass("active");;

         $('.social__content.github').addClass('active').siblings(".social__content").removeClass("active");;
         $('.github__img').addClass('active');;
         $('.instagram__img, .telegram__gif, .youtube__vid').removeClass('active');;
         pauseVideo();
      };
      //  if ($('.youtube__vid').hasClass('active')) {
      //     $('.youtube__vid').tigger('play');
      //  } else {
      //     $('.youtube__vid').tigger('pause');
      //  };
   });


   // Появление хедера
   var $header = $(".header")
   var scroll = 0
   var active = "active"
   $(window).scroll(function () {
      if ($(window).scrollTop() > scroll) {
         $header.addClass(active)
         $('.parallax__container').removeClass(active)
      } else {
         $header.removeClass(active)
         $('.parallax__container').addClass(active)
      }
   })


   // Плавный переход по ссылкам
   $('a[href^="#"').on('click', function () {

      let href = $(this).attr('href');

      $('html, body').animate({
         scrollTop: $(href).offset().top
      });
      return false;
   });
});



// slider

var numOfSlides = $(".slider__wrapper").length - 1,
   i = numOfSlides,
   j = 1;

/*
$(".slider__wrapper").click(function () {
   $(".slider__wrapper").removeClass("active").removeClass('animated').removeClass('preanimated').removeClass('backpreanimated').removeClass("backactive");
   $(this).addClass("active").removeClass('animated')
   $(this).next('.slider__wrapper').addClass('animated');
   $(this).prev('.slider__wrapper').addClass('preanimated');
   j = $('.slider__wrapper.preanimated').index();

   j++;
   console.log(j);
});

$(".slider__wrapper").eq(0).click(function () {
   $(".slider__wrapper").eq(i).addClass('preanimated');
});
$(".slider__wrapper").eq(i).click(function () {
   $(".slider__wrapper").eq(0).addClass('animated');
});
*/

$(".prevslide, .prevslide__blog").click(function () {
   $(".slider__wrapper").removeClass("active").removeClass('animated').removeClass('preanimated').removeClass('backpreanimated').removeClass("backanimated");
   //$(".slider__wrapper").eq(j - 2).addClass('backpreanimated');
   //$(".slider__wrapper").eq(j - 1).addClass('backactive');
   //$(".slider__wrapper").eq(j).addClass('animated');
   $(".slider__wrapper").eq(j).addClass('backpreanimated').removeClass('animated').removeClass('backactive');
   $(".slider__wrapper").eq(j - 1).addClass('backactive').removeClass('animated').removeClass('backpreanimated');
   $(".slider__wrapper").eq(j - 2).addClass('animated').removeClass('backactive').removeClass('backpreanimated');

   if (j == (-numOfSlides)/*'-8'*/) {
      $(".slider__wrapper").eq(numOfSlides).addClass('animated');
      j = 1;
   };
   j--;
   //console.log(j)
});
$(".nextslide, .nextslide__blog").click(function () {
   $(".slider__wrapper").removeClass("active").removeClass('animated').removeClass('preanimated').removeClass('backpreanimated').removeClass("backactive");
   $(".slider__wrapper").eq(j).addClass('preanimated').removeClass('animated').removeClass('active');
   $(".slider__wrapper").eq(j + 1).addClass('active').removeClass('animated').removeClass('preanimated');
   $(".slider__wrapper").eq(j + 2).addClass('animated').removeClass('active').removeClass('preanimated');
   //$(".slider__wrapper").eq(j - 1).removeClass('preanimated');
   countJPlus();
});


function countJPlus() {
   if (j == numOfSlides) {
      $(".slider__wrapper").eq(0).addClass('active').removeClass('animated');
      $(".slider__wrapper").eq(1).addClass('animated');
   };
   if (j == numOfSlides - 1) {
      $(".slider__wrapper").eq(0).addClass('animated');
   };
   //$(".slider__wrapper").eq(j + 1).addClass('active');

   j++;

   if (j == numOfSlides + 1) {
      j = 0;
   };
   //console.log(j)
}
//$(".slider__wrapper.preanimated").removeClass('preanimated').addClass('active');
//$(".slider__wrapper.active").removeClass('active').addClass('animated');
//$(".slider__wrapper.animated").removeClass('animated').addClass('preanimated');






//Добавление активного класса элементам .info когда он в поле видимости

jQuery(function () {
   var checkViewport = function (el) {
      var minTop = jQuery(document).scrollTop(),
         maxTop = minTop + jQuery(window).height(),
         $myElement = $(el),
         elementOffset = $myElement.offset(),
         elementHeight = $myElement.height(),
         heightUp = elementOffset.top > minTop ? 0 : minTop - elementOffset.top > elementHeight ? elementHeight : minTop - elementOffset.top,
         heightDn = elementOffset.top + elementHeight < maxTop ? 0 : elementOffset.top + elementHeight - maxTop > elementHeight ? elementHeight : elementOffset.top + elementHeight - maxTop,
         heightHide = Math.round(100 * (heightUp + heightDn) / elementHeight);
      //console.log(heightHide)

      if (heightHide <= 60) {
         $('.1').addClass('active')
      } else {
         $('.1').removeClass('active')
      }

   };
   jQuery.fn.scroll_resize_Complete = function (fn, ms) {
      var timer = null;
      this.resize(function () {
         if (timer) clearTimeout(timer);
         timer = setTimeout(fn, ms)
      });
      this.scroll(function () {
         if (timer) clearTimeout(timer);
         timer = setTimeout(fn, ms)
      })
   };
   jQuery(window).scroll_resize_Complete(function () {
      checkViewport(".1")
   })
});
jQuery(function () {
   var checkViewport = function (el) {
      var minTop = jQuery(document).scrollTop(),
         maxTop = minTop + jQuery(window).height(),
         $myElement = $(el),
         elementOffset = $myElement.offset(),
         elementHeight = $myElement.height(),
         heightUp = elementOffset.top > minTop ? 0 : minTop - elementOffset.top > elementHeight ? elementHeight : minTop - elementOffset.top,
         heightDn = elementOffset.top + elementHeight < maxTop ? 0 : elementOffset.top + elementHeight - maxTop > elementHeight ? elementHeight : elementOffset.top + elementHeight - maxTop,
         heightHide = Math.round(100 * (heightUp + heightDn) / elementHeight);
      //console.log(heightHide)

      if (heightHide <= 60) {
         $('.2').addClass('active')
      } else {
         $('.2').removeClass('active')
      }

   };
   jQuery.fn.scroll_resize_Complete = function (fn, ms) {
      var timer = null;
      this.resize(function () {
         if (timer) clearTimeout(timer);
         timer = setTimeout(fn, ms)
      });
      this.scroll(function () {
         if (timer) clearTimeout(timer);
         timer = setTimeout(fn, ms)
      })
   };
   jQuery(window).scroll_resize_Complete(function () {
      checkViewport(".2")
   })
});
jQuery(function () {
   var checkViewport = function (el) {
      var minTop = jQuery(document).scrollTop(),
         maxTop = minTop + jQuery(window).height(),
         $myElement = $(el),
         elementOffset = $myElement.offset(),
         elementHeight = $myElement.height(),
         heightUp = elementOffset.top > minTop ? 0 : minTop - elementOffset.top > elementHeight ? elementHeight : minTop - elementOffset.top,
         heightDn = elementOffset.top + elementHeight < maxTop ? 0 : elementOffset.top + elementHeight - maxTop > elementHeight ? elementHeight : elementOffset.top + elementHeight - maxTop,
         heightHide = Math.round(100 * (heightUp + heightDn) / elementHeight);
      //console.log(heightHide)

      if (heightHide <= 60) {
         $('.3').addClass('active')
      } else {
         $('.3').removeClass('active')
      }

   };
   jQuery.fn.scroll_resize_Complete = function (fn, ms) {
      var timer = null;
      this.resize(function () {
         if (timer) clearTimeout(timer);
         timer = setTimeout(fn, ms)
      });
      this.scroll(function () {
         if (timer) clearTimeout(timer);
         timer = setTimeout(fn, ms)
      })
   };
   jQuery(window).scroll_resize_Complete(function () {
      checkViewport(".3")
   })
});
