function initNavbar() {

    var SCROLL_SPEED = 750;
    var SCROLL_OFFSET = 50;
    var EASING = "swing";

    var $navTop = $("#navbar-top");
    var $navBar = $(".navbar");
    var $navExternal = $(".nav-external");

    $navBar.onePageNav({
        currentClass: "active",
        changeHash: false,
        scrollSpeed: SCROLL_SPEED,
        scrollOffset: SCROLL_OFFSET,
        scrollThreshold: 0.5,
        filter: ":not(.external)",
        easing: EASING
    });

    $(window).on("scroll", function(event) {

        var scroll = $(window).scrollTop();

        if (scroll >= $("#home").height()) {
            $navBar.addClass("fixed");
        } else {
            $navBar.removeClass("fixed");
        }
    }).trigger("scroll");

    $navExternal.click(function(e) {
        e.preventDefault();

        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top - SCROLL_OFFSET
        }, SCROLL_SPEED, EASING);
    });
}

function initPortfolio() {

    var $portfolio = $("#portfolio");
    var $items = $portfolio.find(".items");
    var $filters = $portfolio.find(".filters li a");

    $items.imagesLoaded(function() {

        $items.isotope({
            itemSelector: ".item",
            layoutMode: "fitRows",
            transitionDuration: "0.7s"
        });
    });

    $filters.click(function() {

        var $el = $(this);

        $filters.removeClass("active");

        $el.addClass("active");

        var selector = $el.attr("data-filter");

        $items.isotope({
            filter: selector
        });

        return false;
    });

    $items.find(".item a").venobox({
        border: "2rem",
        closeBackground: "transparent"
    });
}

function initAnimations() {
    var $animated = $(".animated");

    $animated.appear({
        force_process: true
    });

    $animated.on("appear", function() {

        var $el = $(this);

        var animation = $el.data("animation");
        var delay = $el.data("delay");

        // Mofile fix
        if ($(window).width() < 768) {
            delay = 0;
        }

        if (delay) {

            setTimeout(function() {
                $el.addClass(animation);
                $el.addClass("showing");
                $el.removeClass("hiding");
            }, delay);
        } else {

            $el.addClass(animation);
            $el.addClass("showing");
            $el.removeClass("hiding");
        }
    });

    // Service hover animation
    $(".service").hover(function() {
        $("i", this).addClass("animated tada");
    }, function() {
        $("i", this).removeClass("animated tada");
    });
}

$(document).ready(function() {

    initNavbar();
    initPortfolio();
    initAnimations();
});

$(window).on("load", function() {

    var $loader = $(".loader");

    $loader.find(".loading").fadeOut();
    $loader.fadeOut("slow");
});
data = {
    "codinggame": "<a href=''>Mon coding game: Coding game</a>",
    "github":  "<a href=''>Mon coding game: Coding game</a>",
    "cv":  "<a href=''>Mon coding game: Coding game</a>",
    "motivation": "<a href=''>Mon coding game: Coding game</a>",
    "motivé":  "<a href=''>Mon coding game: Coding game</a>",
    "sérieux": "<a href=''>Mon coding game: Coding game</a>",
    "conception":  "<a href=''>Mon coding game: Coding game</a>",
    "équipe": "<a href=''>Mon coding game: Coding game</a>",
    "curieux": "<a href=''>Mon coding game: Coding game</a>",
    "maladroit":  "<a href=''>Mon coding game: Coding game</a>",
}


function put_on_overlay(data){
    document.getElementById("textoverlay").innerHTML = data;
}

var click = 0;
var div = "";
var nb = "";
function presentation_projeft(msg, id){

    var overlay = document.getElementById("overlay_picture");
    var popup = document.getElementById("popup_overlay");

    document.getElementById("overlay_picture").style.display = "block";
    overlay.classList.add("visible")
    click++;
    put_on_overlay(data[div])

    div = msg;
    nb = id;

}

$(document).keydown(function(e) {

    var overlay = document.getElementById("overlay_picture");

    if (e.keyCode == 27) {
        overlay.style.display = "none";
        overlay.classList.remove("visible")
        click = 0;

    }
});

$(document).click(function(event) {
    if(!$(event.target).closest('#popup_overlay').length & click > 1) {
        var overlay = document.getElementById("overlay_picture");
        overlay.style.display = "none";
        overlay.classList.remove("visible")
        click = 0;

    }else{
        click++;
        if (nb == "2"){
            put_on_overlay(data[div]);
        }else{
            var overlay = document.getElementById("overlay_picture");
            overlay.style.display = "none";
            overlay.classList.remove("visible")
            click = 0;
        }

    }
});
presentation_projet = {
    "myprofil_mypollution": 
    "<p>Webzine composé de deux parties,<br> - l'une sur la mode et,<br> - l'autre sur la pollution<br>\
    webzine basé sur le scrapping.<br><br> <a href='' style='text-decoration:underline;'>Le magazine virtuel</a></p>",

    "openfoodfact": "site web utilisant la base de données openfoodfact <br>\
    basé sur la gestion de base de données et les API.<br><br> <a href='https://openfactfood.herokuapp.com/'>Openfactfood</a>",

    "degain": "site web de vêtement<br>\
    avec différentes fonctionnalités comme la réservation, messagerie, proposition de vêtement, account, galerie d'images.<br><br>\
    <a href='https://degainfrip.herokuapp.com/'>Dégain ta frip</a>",

    "tea": "site web sur une boutique de thé permettant la réservation de table.\
    la réservation de produit et de table, messagerie, account, galerie d'images\
     <br><br><a href='https://degaintafrip.herokuapp.com/'>Dégain ton thé</a>",

    "chiro": "site web pour la prise de rendez-vous par la création d'un compte.\
    <br><br><a href='https://jean-patrick-broch.herokuapp.com/'>Chiropracteur</a>",

    "tatoueur": "site web de tatouage de galerie d'images.\
    <br><br><a href='https://jmboyer.herokuapp.com/'>Tatouage</a>",

    "fantaisies": "site web de réservation de bijoux artisanaux où l'on peut réserver des bijoux et écrire des messages.\
    après la création d'un compte\
    <br><br> <a href='https://lesfantaisiedromoises.herokuapp.com/'>Les fantaisies dromoises</a>",

    "caffe": "site web pour <br><br>\
    <a href='https://caffedeparis.herokuapp.com/'>Le Caffé de Paris</a>",
    }


function presentation_projeft(div){

    var overlay = document.getElementById("overlay_picture");
    var popup = document.getElementById("popup_overlay");

    overlay.style.display = "block";
    overlay.classList.add("visible")

    setTimeout(function(){ 
        popup.classList.add("visible")
        document.getElementById("p_popup").innerHTML = presentation_projet[div];
     }, 100);
}


var overlay = document.getElementById("overlay_picture");
var popup = document.getElementById("popup_overlay");

$(document).keydown(function(e) {
    if (e.keyCode == 27) {
        overlay.style.display = "none";
        overlay.classList.remove("visible")
    }
});

$(document).click(function(event) {
    if(!$(event.target).closest('#popup_overlay').length) {
        overlay.style.display = "none";
        overlay.classList.remove("visible")
    }
});