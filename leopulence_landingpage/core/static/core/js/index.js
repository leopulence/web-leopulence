"use strict";
//$( "button" ).on( "click", notify );
$(document).on( "ready", function () {
    $('#headerlangtogglebutton').on("click", function(){headerlangtoggle();});
    $('#headersearchareabutton').on("click", function(){headersearchtoggle();});
    $('#headermenubutton').on("click", function(){menutoggle();});
    $('#homesmallmenubutton').on("click", function(){homemenusmalltoggle();});
    $('#showcasearrowleft').on("click", function(){showcase(0);});
    $('#showcasearrowright').on("click", function(){showcase(1);});
    runfurkanberkerAslider('mysliderX', sliderimagesX, 1000, 'slide', 9000);

});
function showcase(side) {
        if (side == 1) {
            furkanberkerAsliderSlideShowNext('mysliderX', sliderimagesX, 1000, "next");
        }
        if (side == 0) {
            furkanberkerAsliderSlideShowNext('mysliderX', sliderimagesX, 1000, "prev");
        }
    }
$("#homesearchshopcountry").on("change", function () {
        if ($(this).data('options') == undefined) {
            /*Taking an array of all options-2 and kind of embedding it on the select1*/
            $(this).data('options', $('#homesearchshopcity option').clone());
        }
        var id = $(this).val();
        var options = $(this).data('options').filter('[class=' + id + ']');
        $('#homesearchshopcity').html(options);
    });
$(document).on("scroll", function() {
    if($("#home-content-area").length){
        var scrollTop = $(window).scrollTop();
        var position = $("#home-content-area").offset();
        var distance = position.top - scrollTop;
        var changepos = distance / 2;
        $('#hcfl-c').css('-ms-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-c').css('-webkit-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-c').css('transform','translate(0px,' + changepos + 'px)');
        var changepos = distance / 4;
        $('#hcfl-o').css('-ms-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-o').css('-webkit-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-o').css('transform','translate(0px,' + changepos + 'px)');
        var changepos = distance / 2;
        $('#hcfl-l').css('-ms-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-l').css('-webkit-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-l').css('transform','translate(0px,' + changepos + 'px)');
        var changepos = distance / 4;
        $('#hcfl-l2').css('-ms-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-l2').css('-webkit-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-l2').css('transform','translate(0px,' + changepos + 'px)');
        var changepos = distance / 2;
        $('#hcfl-e').css('-ms-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-e').css('-webkit-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-e').css('transform','translate(0px,' + changepos + 'px)');
        var changepos = distance / 4;
        $('#hcfl-c2').css('-ms-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-c2').css('-webkit-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-c2').css('transform','translate(0px,' + changepos + 'px)');
        var changepos = distance / 2;
        $('#hcfl-t').css('-ms-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-t').css('-webkit-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-t').css('transform','translate(0px,' + changepos + 'px)');
        var changepos = distance / 3;
        $('#hcfl-i').css('-ms-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-i').css('-webkit-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-i').css('transform','translate(0px,' + changepos + 'px)');
        var changepos = distance / 3;
        $('#hcfl-o2').css('-ms-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-o2').css('-webkit-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-o2').css('transform','translate(0px,' + changepos + 'px)');
        var changepos = distance / 4;
        $('#hcfl-n').css('-ms-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-n').css('-webkit-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-n').css('transform','translate(0px,' + changepos + 'px)');
        var changepos = distance / 5;
        $('#hcfl-s').css('-ms-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-s').css('-webkit-transform','translate(0px,' + changepos + 'px)');
        $('#hcfl-s').css('transform','translate(0px,' + changepos + 'px)');
    }
});
function changeshowcasewriting(next,total){
    var i = 1;
    while(i <= total){
        if(i < next){
            $('#showcase-writings-' + i).addClass('showcase-writings-item-left');
            $('#showcase-writings-' + i).removeClass('showcase-writings-item-right');
            $('#showcase-writings-' + i).removeClass('showcase-writings-item-current');
        }
        else if(i === next){
            $('#showcase-writings-' + i).removeClass('showcase-writings-item-left');
            $('#showcase-writings-' + i).removeClass('showcase-writings-item-right');
            $('#showcase-writings-' + i).addClass('showcase-writings-item-current');
        }
        else if(i > next){
            $('#showcase-writings-' + i).removeClass('showcase-writings-item-left');
            $('#showcase-writings-' + i).addClass('showcase-writings-item-right');
            $('#showcase-writings-' + i).removeClass('showcase-writings-item-current');
        }
        i++;
    }
}
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
        var timer = 300 + (300 * (i-1));
        if($('#menu-item-' + i).hasClass('no-sub')){
            var timer = 400 + (300 * (i-1));
        }
        setmenuitemtiming(i,timer);
        i++;
    }
    $('#responsive-menu-area').toggleClass('menu-area-closed');
    var numofItems = $('.responsive-menu-item').length;
    var i = 1;
    while(i <= numofItems){
        var timer = 300 + (300 * (i-1));
        if($('#responsive-menu-item-' + i).hasClass('no-sub')){
            var timer = 400 + (300 * (i-1));
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
