$(document).ready(function () {

    // VARS
    var $root = $('html, body');
    var $mainNav = $('.js--main-nav');
    var $icon = $('.js--nav-icon i');
    var $nav = $('nav');
    var mobileBreakpoint = 767;
    var map, lng;


    // STICKY NAV
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $nav.addClass('sticky');
        } else {
            $nav.removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });


    // BUTTON SCROLL
    $('.js--scroll-to-plans').click(function () {
        if ($(window).width() > mobileBreakpoint) {
            $root.animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
        } else {
            $root.animate({scrollTop: $('.js--section-plans').offset().top - 60}, 1000);
        }
    });

    $('.js--scroll-to-start').click(function () {
        if ($(window).width() > mobileBreakpoint) {
            $root.animate({scrollTop: $('.js--section-features').offset().top}, 1000);
        } else {
            $root.animate({scrollTop: $('.js--section-features').offset().top - 60}, 1000);
        }
    });


    // NAVIGATION SCROLL
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                if ($(window).width() > mobileBreakpoint) {
                    $root.animate({
                        scrollTop: target.offset().top
                    }, 1000);
                } else {
                    $root.animate({
                        scrollTop: target.offset().top - 60
                    }, 1000);
                }
                return false;
            }
        }
    });


    // ANIMATIONS
    $('.js--wp-features').waypoint(function () {
        $('.js--wp-features').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-steps').waypoint(function () {
        $('.js--wp-steps').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-locations').waypoint(function () {
        $('.js--wp-locations').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-plans').waypoint(function () {
        $('.js--wp-plans').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    // MOBILE NAV
    $('.js--nav-icon').click(function () {
        $mainNav.slideToggle(200);

        if ($icon.hasClass('ion-navicon-round')) {
            $icon.addClass('ion-close-round');
            $icon.removeClass('ion-navicon-round');
        } else {
            $icon.addClass('ion-navicon-round');
            $icon.removeClass('ion-close-round');
        }
    });

    $('.js--main-nav a').click(function () {

        if (mobileBreakpoint >= $(window).width()) {
            $mainNav.slideToggle(200);
        }

        if ($icon.hasClass('ion-navicon-round')) {
            $icon.addClass('ion-close-round');
            $icon.removeClass('ion-navicon-round');
        } else {
            $icon.addClass('ion-navicon-round');
            $icon.removeClass('ion-close-round');
        }
    });


    $(window).resize(function () {

        if ($(window).width() > mobileBreakpoint) {
            $mainNav.css("display", "block");
            $icon.addClass('ion-close-round');
            $icon.removeClass('ion-navicon-round');
        } else {
            $mainNav.css("display", "none");
            $icon.addClass('ion-navicon-round');
            $icon.removeClass('ion-close-round');
        }
    });

    if ($(window).width() > mobileBreakpoint) {
        lng = -74.6;
    } else {
        lng = -75.15;
    }

    // GOOGLE MAP
    map = new GMaps({
        div: '.map',
        lat: 39.9499596,
        lng: lng,
        zoom: 10
    });

    map.addMarker({
        lat: 39.9499596,
        lng: -75.004976,
        title: 'Maple Shade, NJ',
        infoWindow: {
            content: '<p>If you would like me to work on your website, contact me using the form or email me at:<br><strong>ianmarkind@gmail.com</strong></p>'
        }
    });
});
