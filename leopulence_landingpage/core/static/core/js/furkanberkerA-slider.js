"use strict";
function runfurkanberkerAslider(nameofshow,imagearray,timing,movement,delayer){
    var fbaslider = document.getElementById(nameofshow);
    fbaslider.style.height = "100%";
    fbaslider.style.width = "100%";
    fbaslider.style.position = "absolute";
    fbaslider.style.overflow = "hidden";
    $('#furkanberkerA-slider').css('top','-4px');
    
    var numberofslides = imagearray.length;
    var i = 0;
    while(i<numberofslides){
        fbaslider.innerHTML = fbaslider.innerHTML + "<div class='" + nameofshow + "image' id='" + nameofshow + "image-" + (i+1) + "'></div>";
        var fbasliderimage = document.getElementById(nameofshow + 'image-' + (i+1));
        fbasliderimage.style.height = "100%";
        fbasliderimage.style.width = "100%";
        fbasliderimage.style.position = "absolute";
        fbasliderimage.style.backgroundPosition = "center";
        fbasliderimage.style.backgroundSize = "cover";
        fbasliderimage.style.zIndex = "1";
        fbasliderimage.style.backgroundImage = "url('" + imagearray[i] + "')";
        if(i===0){
            $('#' + nameofshow + 'image-' + (i+1)).addClass('currentfbaslide');
        }
        
        i++;
    }
    if(movement === 'slide'){
        furkanberkerAsliderSlideShow(nameofshow,imagearray,timing,delayer);
    }
    if(movement === 'slideY'){
        furkanberkerAsliderSlideYShow(nameofshow,imagearray,timing,delayer);
    }
    if(movement === 'opac'){
        furkanberkerAsliderOpacShow(nameofshow,imagearray,timing,delayer);
        setupopac(nameofshow,imagearray,timing);
    }
}
function setupopac(nameofshow,imagearray,timing){
    var i = 0;
    while(i < imagearray.length){
        if($("#" + nameofshow + "slidepoint-" + (i+1)).length){
            setupopac2(nameofshow,imagearray,timing,(i+1));
        }
        i++;
    }
}
function setupopac2(nameofshow,imagearray,timing,direction){
    var fbaslidepointelement = document.getElementById(nameofshow + "slidepoint-" + direction);
    fbaslidepointelement.onclick=function(){furkanberkerAsliderOpacShowChosen(nameofshow,imagearray,timing,direction);};
}
function furkanberkerAsliderSlideShow(nameofshow,imagearray,timing,delayer){
    $('.currentfbaslide').css('z-index','2');
    var i = 1;
    var current;
    while(i <= imagearray.length){
        if($('#' + nameofshow + 'image-' + i).hasClass('currentfbaslide')){
            current = i;
        }
        else{
            $('#' + nameofshow + 'image-' + i).addClass('rightfbaslide');
        }
        i++;
    }
    furkanberkerAsliderSetPoints();
    if (delayer !== 0){
    setInterval(function(){
        furkanberkerAsliderSlideShowNext(nameofshow,imagearray,timing,"next");
    }, delayer);
    }
}
function furkanberkerAsliderSlideYShow(nameofshow,imagearray,timing,delayer){
    $('.currentfbaslide').css('z-index','2');
    var i = 1;
    var current;
    while(i <= imagearray.length){
        if($('#' + nameofshow + 'image-' + i).hasClass('currentfbaslide')){
            current = i;
        }
        else{
            $('#' + nameofshow + 'image-' + i).addClass('bottomfbaslide');
        }
        i++;
    }
    furkanberkerAsliderSetPoints();
    if (delayer !== 0){
    setInterval(function(){
        furkanberkerAsliderSlideYShowNext(nameofshow,imagearray,timing,"next");
    }, delayer);
    }
    
}
function furkanberkerAsliderOpacShow(nameofshow,imagearray,timing,delayer){
    $('.currentfbaslide').css('z-index','2');
    var i = 1;
    var current;
    while(i <= imagearray.length){
        if($('#' + nameofshow + 'image-' + i).hasClass('currentfbaslide')){
            current = i;
        }
        else{
            $('#' + nameofshow + 'image-' + i).addClass('lowopafbaslide');
        }
        i++;
    }
    furkanberkerAsliderSetPoints();
    if (delayer !== 0){
    setInterval(function(){
        furkanberkerAsliderOpacShowNext(nameofshow,imagearray,timing,"next");
    }, delayer);
    }
    
}
function furkanberkerAsliderSetPoints(){
    $(".currentfbaslide").css('-webkit-transform','translate(0px,0px)');
    $(".currentfbaslide").css('-moz-transform','translate(0px,0px)');
    $(".currentfbaslide").css('-o-transform','translate(0px,0px)');
    $(".currentfbaslide").css('-ms-transform','translate(0px,0px)');
    $(".currentfbaslide").css('transform','translate(0px,0px)');
    $(".currentfbaslide").css('opacity','1');
    $(".currentfbaslide").css('opacity','1');
    $(".currentfbaslide").css('opacity','1');
    $(".currentfbaslide").css('opacity','1');
    $(".currentfbaslide").css('opacity','1');
    $(".rightfbaslide").css('-webkit-transform','translate(100%,0px)');
    $(".rightfbaslide").css('-moz-transform','translate(100%,0px)');
    $(".rightfbaslide").css('-o-transform','translate(100%,0px)');
    $(".rightfbaslide").css('-ms-transform','translate(100%,0px)');
    $(".rightfbaslide").css('transform','translate(100%,0px)');
    $(".leftfbaslide").css('-webkit-transform','translate(-100%,0px)');
    $(".leftfbaslide").css('-moz-transform','translate(-100%,0px)');
    $(".leftfbaslide").css('-o-transform','translate(-100%,0px)');
    $(".leftfbaslide").css('-ms-transform','translate(-100%,0px)');
    $(".leftfbaslide").css('transform','translate(-100%,0px)');
    $(".topfbaslide").css('-webkit-transform','translate(0px,-100%)');
    $(".topfbaslide").css('-moz-transform','translate(0px,-100%)');
    $(".topfbaslide").css('-o-transform','translate(0px,-100%)');
    $(".topfbaslide").css('-ms-transform','translate(0px,-100%)');
    $(".topfbaslide").css('transform','translate(0px,-100%)');
    $(".bottomfbaslide").css('-webkit-transform','translate(-0px,100%)');
    $(".bottomfbaslide").css('-moz-transform','translate(-0px,100%)');
    $(".bottomfbaslide").css('-o-transform','translate(-0px,100%)');
    $(".bottomfbaslide").css('-ms-transform','translate(-0px,100%)');
    $(".bottomfbaslide").css('transform','translate(-0px,100%)');
    $(".lowopafbaslide").css('opacity','0');
    $(".lowopafbaslide").css('opacity','0');
    $(".lowopafbaslide").css('opacity','0');
    $(".lowopafbaslide").css('opacity','0');
    $(".lowopafbaslide").css('opacity','0');
}
function furkanberkerAsliderSetTimers(timer){
    $(".furkanberkerAslidertiming").css('-webkit-transition',timer + 'ms');
    $(".furkanberkerAslidertiming").css('-moz-transition',timer + 'ms');
    $(".furkanberkerAslidertiming").css('-o-transition',timer + 'ms');
    $(".furkanberkerAslidertiming").css('-ms-transition',timer + 'ms');
    $(".furkanberkerAslidertiming").css('transition',timer + 'ms');
}
function furkanberkerAsliderSlideShowNext(nameofshow,imagearray,timing,direction){
    var i = 1;
    var current;
    while(i <= imagearray.length){
        if($('#' + nameofshow + 'image-' + i).hasClass('currentfbaslide')){
            current = i;
        }
        i++;
    }
    if(direction === "next"){
        var next = current + 1;
        if(next > imagearray.length){
            next = 1;

        }
    }
    if(direction === "prev"){
        var next = current - 1;
        if(next < 1){
            next = imagearray.length;

        }
    }
        var i = 1;
        while(i <= imagearray.length){
            if(i<next){
                $('#' + nameofshow + 'image-' + i).addClass('furkanberkerAslidertiming');
                $('#' + nameofshow + 'image-' + i).addClass('leftfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('rightfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('currentfbaslide');
            }
            if(i===next){
                $('#' + nameofshow + 'image-' + i).addClass('furkanberkerAslidertiming');
                $('#' + nameofshow + 'image-' + i).addClass('currentfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('rightfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('leftfbaslide');
            }
            if(i>next){
                $('#' + nameofshow + 'image-' + i).addClass('furkanberkerAslidertiming');
                $('#' + nameofshow + 'image-' + i).addClass('rightfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('currentfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('leftfbaslide');
            }
            i++;
        }
    
    $.when(furkanberkerAsliderSetTimers(timing)).then(furkanberkerAsliderSetPoints());
    //changeshowcasewriting(next,imagearray.length);
}
function furkanberkerAsliderSlideYShowNext(nameofshow,imagearray,timing,direction){
    var i = 1;
    var current;
    while(i <= imagearray.length){
        if($('#' + nameofshow + 'image-' + i).hasClass('currentfbaslide')){
            current = i;
        }
        i++;
    }
    var next = current + 1;
    if(next > imagearray.length){
        next = 1;
        
    }
    
        var i = 1;
        while(i <= imagearray.length){
            if(i<next){
                $('#' + nameofshow + 'image-' + i).addClass('furkanberkerAslidertiming');
                $('#' + nameofshow + 'image-' + i).addClass('topfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('bottomfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('currentfbaslide');
            }
            if(i===next){
                $('#' + nameofshow + 'image-' + i).addClass('furkanberkerAslidertiming');
                $('#' + nameofshow + 'image-' + i).addClass('currentfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('bottomfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('topfbaslide');
            }
            if(i>next){
                $('#' + nameofshow + 'image-' + i).addClass('furkanberkerAslidertiming');
                $('#' + nameofshow + 'image-' + i).addClass('bottomfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('currentfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('topfbaslide');
            }
            i++;
        }
    
    $.when(furkanberkerAsliderSetTimers(timing)).then(furkanberkerAsliderSetPoints());
}
function furkanberkerAsliderOpacShowNext(nameofshow,imagearray,timing,direction){
    var i = 1;
    var current;
    while(i <= imagearray.length){
        if($('#' + nameofshow + 'image-' + i).hasClass('currentfbaslide')){
            current = i;
        }
        i++;
    }
    
    if(direction === "next"){
    var next = current + 1;
    if(next > imagearray.length){
        next = 1;
        
    }
    }
    if(direction === "prev"){
    var next = current - 1; 
    if(next < 1){
        next = imagearray.length;
        
    }
    }
        var i = 1;
        while(i <= imagearray.length){
            if(i===next){
                $('#' + nameofshow + 'image-' + i).addClass('furkanberkerAslidertiming');
                $('#' + nameofshow + 'image-' + i).addClass('currentfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('lowopafbaslide');
            }
            else{
                $('#' + nameofshow + 'image-' + i).addClass('furkanberkerAslidertiming');
                $('#' + nameofshow + 'image-' + i).addClass('lowopafbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('currentfbaslide');
            }
            i++;
        }
    
    $.when(furkanberkerAsliderSetTimers(timing)).then(furkanberkerAsliderSetPoints());
    changeshowcasewriting(next,imagearray.length);
    furkanberkerAsliderOpacShowCallback(nameofshow,next,imagearray.length);
}
function furkanberkerAsliderOpacShowChosen(nameofshow,imagearray,timing,direction){
    var i = 1;
    var current;
    while(i <= imagearray.length){
        if($('#' + nameofshow + 'image-' + i).hasClass('currentfbaslide')){
            current = i;
        }
        i++;
    }
    var next = direction;
        var i = 1;
        while(i <= imagearray.length){
            if(i===next){
                $('#' + nameofshow + 'image-' + i).addClass('furkanberkerAslidertiming');
                $('#' + nameofshow + 'image-' + i).addClass('currentfbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('lowopafbaslide');
            }
            else{
                $('#' + nameofshow + 'image-' + i).addClass('furkanberkerAslidertiming');
                $('#' + nameofshow + 'image-' + i).addClass('lowopafbaslide');
                $('#' + nameofshow + 'image-' + i).removeClass('currentfbaslide');
            }
            i++;
        }
    
    $.when(furkanberkerAsliderSetTimers(timing)).then(furkanberkerAsliderSetPoints());
    changeshowcasewriting(next,imagearray.length);
    furkanberkerAsliderOpacShowCallback(nameofshow,next,imagearray.length);
}
function furkanberkerAsliderOpacShowCallback(nameofshow,next,total){
    var i = 1;
    while(i <= total){
        $('#' + nameofshow + 'slidepoint-' + i).removeClass('active');
        i++;
    }
    $('#' + nameofshow + 'slidepoint-' + next).addClass('active');
}