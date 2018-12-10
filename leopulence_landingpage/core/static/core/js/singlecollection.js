"use strict";
$(document).on("ready", function () {
    if($("#content-collectiondetails-area").length){
        var numofItems = $('.content-collectiondetails-animation-area').length;
        var wheight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var i = 1;
        while(i <= numofItems){
            var position = $("#ccaa-" + i).offset();
            var distance = position.top - scrollTop;
            if(distance < -50){
                
            }
            else if(distance > (wheight * 7 / 8)){
               
            }
            else{
                $("#ccaa-" + i).addClass('onscreen');
                var slidedistance = (distance / wheight) * 150 - 140;
                $("#ccai-" + i).css('top',slidedistance + 'px');
            }
            i++;
        }
        if(scrollTop > 337){
            $('.content-collectiondetails-backwriting-topleft').css('opacity','0.1');
            $('.content-collectiondetails-backwriting-topright').css('opacity','0.1');
        }
        else{
            $('.content-collectiondetails-backwriting-topleft').css('opacity','0.0');
            $('.content-collectiondetails-backwriting-topright').css('opacity','0.0');
        }
    }
    $('#headerlangtogglebutton').on("click", function(){headerlangtoggle();});
    $('#headersearchareabutton').on("click", function(){headersearchtoggle();});
    $('#headermenubutton').on("click", function(){menutoggle();});
    $('#homesmallmenubutton').on("click", function(){homemenusmalltoggle();});

    $(".fancybox").fancybox();
});
$(document).on("scroll", function() {
    if($("#content-collectiondetails-area").length){
        var numofItems = $('.content-collectiondetails-animation-area').length;
        var wheight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var i = 1;
        while(i <= numofItems){
            var position = $("#ccaa-" + i).offset();
            var distance = position.top - scrollTop;
            if(distance < -50){
                
            }
            else if(distance > (wheight * 7 / 8)){
               
            }
            else{
                $("#ccaa-" + i).addClass('onscreen');
                var slidedistance = (distance / wheight) * 150 - 140;
                $("#ccai-" + i).css('top',slidedistance + 'px');
            }
            i++;
        }
        if(scrollTop > 337){
            $('.content-collectiondetails-backwriting-topleft').css('opacity','0.1');
            $('.content-collectiondetails-backwriting-topright').css('opacity','0.1');
        }
        else{
            $('.content-collectiondetails-backwriting-topleft').css('opacity','0.0');
            $('.content-collectiondetails-backwriting-topright').css('opacity','0.0');
        }
    }
});

function headerlangtoggle(){
    $('#header-lang-area').toggleClass('header-lang-area-open');
}
function headersearchtoggle(){
    $('#header-search-area').toggleClass('header-search-area-open');
}
function menutoggle(){
    $('#header-menu-button').toggleClass('menu-open');
    $('#menu-area').toggleClass('menu-area-closed');
    var numofItems = $('.menu-item').length;
    var i = 1;
    while(i <= numofItems){
        var timer = 1000 + (500 * (i-1));
        if($('#menu-item-' + i).hasClass('no-sub')){
            var timer = 1200 + (500 * (i-1));
        }
        setmenuitemtiming(i,timer);
        i++;
    }
    $('#responsive-menu-area').toggleClass('menu-area-closed');
    var numofItems = $('.responsive-menu-item').length;
    var i = 1;
    while(i <= numofItems){
        var timer = 1000 + (500 * (i-1));
        if($('#responsive-menu-item-' + i).hasClass('no-sub')){
            var timer = 1200 + (500 * (i-1));
        }
        setresponsivemenuitemtiming(i,timer);
        i++;
    }
    if($("#mysliderX").length){
        $("#mysliderX").toggleClass('slider-close');
    }
    $("body").toggleClass('body-screencap');
}
function setmenuitemtiming(item , time){
    setTimeout(function(){ $('#menu-item-' + item).addClass('menu-item-open'); }, time);
}
function setresponsivemenuitemtiming(item , time){
    setTimeout(function(){ $('#responsive-menu-item-' + item).addClass('responsive-menu-item-open'); }, time);
}
function homemenusmalltoggle(){
    $('#home-menu-small-area').toggleClass('home-menu-small-open');
}