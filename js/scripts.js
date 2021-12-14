/*!
* Start Bootstrap - Bare v5.0.4 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
//   Skrollr
//  var s = skrollr.init();
//  if (s.isMobile()) {
//  s.destroy();
//  }

$(document).on('ready', function () {
    // Slick Slider
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
        speed: 2000,
        swipe: true,
        swipeToSlide: true,
    });
});




//   Navigation
$(function () {
    $(document).scroll(function () {
        var $nav = $("nav");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

        var $navbrand = $(".navbar-brand");
        $navbrand.toggleClass('scrolled-b', $(this).scrollTop() > $nav.height());

        var $navitem = $(".nav-link");
        $navitem.toggleClass('scrolled-a', $(this).scrollTop() > $nav.height());

        var $menu = $(".navbar-toggler-icon");
        $menu.toggleClass('navbar-toggler-icon-dark', $(this).scrollTop() > $nav.height());



    });
});

//Masonry Gallery
$(window).load(function () {

    $(".gallery img").click(function () {
        $(".lightbox").fadeIn(300);
        $(".lightbox").append("<img src='" + $(this).attr("src") + "' alt='" + $(this).attr("alt") + "' />");
        $(".filter").css("background-image", "url(" + $(this).attr("src") + ")");
        /*$(".title").append("<h1>" + $(this).attr("alt") + "</h1>");*/
        $("html").css("overflow", "hidden");
        if ($(this).is(":last-child")) {
            $(".arrowr").css("display", "none");
            $(".arrowl").css("display", "block");
        } else if ($(this).is(":first-child")) {
            $(".arrowr").css("display", "block");
            $(".arrowl").css("display", "none");
        } else {
            $(".arrowr").css("display", "block");
            $(".arrowl").css("display", "block");
        }
    });

    $(".close").click(function () {
        $(".lightbox").fadeOut(300);
        $("h1").remove();
        $(".lightbox img").remove();
        $("html").css("overflow", "auto");
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $(".lightbox").fadeOut(300);
            $(".lightbox img").remove();
            $("html").css("overflow", "auto");
        }
    });

    $(".arrowr").click(function () {
        var imgSrc = $(".lightbox img").attr("src");
        var search = $("section").find("img[src$='" + imgSrc + "']");
        var newImage = search.next().attr("src");
        /*$(".lightbox img").attr("src", search.next());*/
        $(".lightbox img").attr("src", newImage);
        $(".filter").css("background-image", "url(" + newImage + ")");

        if (!search.next().is(":last-child")) {
            $(".arrowl").css("display", "block");
        } else {
            $(".arrowr").css("display", "none");
        }
    });

    $(".arrowl").click(function () {
        var imgSrc = $(".lightbox img").attr("src");
        var search = $("section").find("img[src$='" + imgSrc + "']");
        var newImage = search.prev().attr("src");
        /*$(".lightbox img").attr("src", search.next());*/
        $(".lightbox img").attr("src", newImage);
        $(".filter").css("background-image", "url(" + newImage + ")");

        if (!search.prev().is(":first-child")) {
            $(".arrowr").css("display", "block");
        } else {
            $(".arrowl").css("display", "none");
        }
    });

});

