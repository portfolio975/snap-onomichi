// galleryのスライダー
const swiper = new Swiper("#js-gallery-swiper", {
  loop: true,
  spaceBetween: 10,
  // slidesPerView: 3.5,
  slidesPerView: "auto",
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

// gallery-pcスライダー
const swiperPc = new Swiper("#js-gallery-pc-swiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: "auto",
  // loopAdditionalSlides: 7,
  // slidesPerView: 7,
  speed: 3000,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  on: {
    // slideChangeTransitionStart: function() {
    //   mySwiperWrapper.style.transitionTimingFunction = 'linear';
    // },
    resize: function() {
      mySwiper.autoplay.start();
    }
  },
  // allowTouchMove: false,
  // longSwipes: false,
});

// cardsのspスライダー
const swiperCardsSp = new Swiper('#js-cards-sp-swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",
  centeredSlides: true,
});

// cards-pcのスライダー
const swiperCardsPc = new Swiper("#js-cards-pc-swiper", {
  loop: true,
  spaceBetween: 32,
  slidesPerView: "auto",
  // 前後の矢印
  navigation: {
    nextEl: ".cards-pc__button-next",
    prevEl: ".cards-pc__button-prev",
  },
});

// const swiper = new Swiper(".swiper", {
//   loop: true,
//   // 前後の矢印
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   // スライドの表示枚数：500px未満の場合
//   slidesPerView: 1,
//   breakpoints: {
//     // スライドの表示枚数：500px以上の場合
//     500: {
//       slidesPerView: 3,
//     }
//   }
// });

// qaのアコーディオンメニュー
jQuery(".qa__question").on("click", function(e) {
  e.preventDefault();

  jQuery(this).next().slideToggle();
  jQuery(this).toggleClass("is-open");
});

// spのハンバーガーメニュー
jQuery("#js-sp-nav-button").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-sp-nav").toggleClass("is-show");
  jQuery(this).toggleClass("is-active");
});

jQuery(".sp-nav__link").on("click", function(e) {
  e.preventDefault();

  jQuery("#js-sp-nav").removeClass("is-show");
  jQuery("#js-sp-nav-button").removeClass("is-active");
});

// smoothscroll
// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').on("click", function() {
  // 移動速度を指定（ミリ秒）
  let speed = 600;
  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top;

  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      // scrollTop: position,
      scrollTop: position - jQuery(".header").outerHeight()
    },
    speed,
  );
  return false;
});

// トップへ戻るボタンのfade-in,fade-out
jQuery(window).scroll(function () {
  if(jQuery(this).scrollTop() > 200) {
    jQuery("#js-top-btn").removeClass("hidden");
    jQuery("#js-top-btn").fadeIn(300);
  } else {
    jQuery("#js-top-btn").fadeOut(300).addClass("hidden");
  }
});

// prizesのモーダルウィンドウ
var trigger = jQuery(".benefit__block"),
    wrapper = jQuery(".modal__wrapper"),
    layer = jQuery(".modal__layer"),
    container = jQuery(".modal__container"),
    close = jQuery(".modal__close-button");

jQuery(trigger).on("click", function() {
  var index = jQuery(this).index();
  jQuery(wrapper).eq(index).fadeIn(400);

  jQuery("html, body").css("overflow", "hidden");
});

jQuery(layer).add(close).on("click", function() {
  jQuery(wrapper).fadeOut(400);

  jQuery("html, body").removeAttr("style");
});
// prizesのモーダルウィンドウ2
var trigger2 = jQuery(".benefit2__block"),
    wrapper2 = jQuery(".modal2__wrapper"),
    layer2 = jQuery(".modal2__layer"),
    container2 = jQuery(".modal2__container"),
    close2 = jQuery(".modal2__close-button");

jQuery(trigger2).on("click", function() {
  var index2 = jQuery(this).index();
  jQuery(wrapper2).eq(index2).fadeIn(400);

  jQuery(container2).scrollTop(0);

  jQuery("html, body").css("overflow", "hidden");
});

jQuery(layer2).add(close2).on("click", function() {
  jQuery(wrapper2).fadeOut(400);

  jQuery("html, body").removeAttr("style");
});
