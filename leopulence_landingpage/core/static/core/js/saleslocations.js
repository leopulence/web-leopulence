"use strict";
$(document).on("ready", function () {
    $('#headerlangtogglebutton').on("click", function(){headerlangtoggle();});
    $('#headersearchareabutton').on("click", function(){headersearchtoggle();});
    $('#headermenubutton').on("click", function(){menutoggle();});
    $('#homesmallmenubutton').on("click", function(){homemenusmalltoggle();});
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

