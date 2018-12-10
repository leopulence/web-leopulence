"use strict";
$(document).on("ready", function () {
    if($('#content-ourshops-show-area').length){
        ourshopsresize();
    }
    $('#headerlangtogglebutton').on("click", function(){headerlangtoggle();});
    $('#headersearchareabutton').on("click", function(){headersearchtoggle();});
    $('#headermenubutton').on("click", function(){menutoggle();});
    $('#homesmallmenubutton').on("click", function(){homemenusmalltoggle();});
      document.getElementById('coca-1').onclick = function(){ourshopscountry(1);};
      document.getElementById('coca-2').onclick = function(){ourshopscountry(2);};
      document.getElementById('coca-3').onclick = function(){ourshopscountry(3)};
});
$(document).on("resize", function () {
    if($('#content-ourshops-show-area').length){
        ourshopsresize();
    }
});
$(window).on("resize", function () {
    if($('#content-ourshops-show-area').length){
        ourshopsresize();
    }
});
function init1() {
        // Basic options for a simple Google Map
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(51.507358, -0.127627), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
            }
        ]
    },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#737373"
            }
        ]
    },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#efefef"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#dadada"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#b3b3b3"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#ffffff"
            },
                        {
                            "weight": 1.8
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
            }
        ]
    },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#808080"
            },
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c5d8e7"
            }
        ]
    }
]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('shopsmap-1');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var gmarker = {
            url: 'static/core/images/gmap-icon.png',
            scaledSize: new google.maps.Size(47, 65)};
        var beachMarker = new google.maps.Marker({
            position: new google.maps.LatLng(51.507358, -0.127627),
            map: map,
            icon: gmarker
        });
    }
function init2() {
        // Basic options for a simple Google Map
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(51.507358, -0.127627), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
            }
        ]
    },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#737373"
            }
        ]
    },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#efefef"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#dadada"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#b3b3b3"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#ffffff"
            },
                        {
                            "weight": 1.8
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
            }
        ]
    },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#808080"
            },
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c5d8e7"
            }
        ]
    }
]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('shopsmap-2');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var gmarker = {
            url: 'static/core/images/gmap-icon.png',
            scaledSize: new google.maps.Size(47, 65)};
        var beachMarker = new google.maps.Marker({
            position: new google.maps.LatLng(51.507358, -0.127627),
            map: map,
            icon: gmarker
        });
    }
function init3() {
        // Basic options for a simple Google Map
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(51.507358, -0.127627), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
            }
        ]
    },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#737373"
            }
        ]
    },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#efefef"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#dadada"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#b3b3b3"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#ffffff"
            },
                        {
                            "weight": 1.8
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
            }
        ]
    },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#808080"
            },
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c5d8e7"
            }
        ]
    }
]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('shopsmap-3');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var gmarker = {
            url: 'static/core/images/gmap-icon.png',
            scaledSize: new google.maps.Size(47, 65)};
        var beachMarker = new google.maps.Marker({
            position: new google.maps.LatLng(51.507358, -0.127627),
            map: map,
            icon: gmarker
        });
    }
function init4() {
        // Basic options for a simple Google Map
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(51.507358, -0.127627), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
            }
        ]
    },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#737373"
            }
        ]
    },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#efefef"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#dadada"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#b3b3b3"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#ffffff"
            },
                        {
                            "weight": 1.8
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
            }
        ]
    },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#808080"
            },
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c5d8e7"
            }
        ]
    }
]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('shopsmap-4');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var gmarker = {
            url: 'static/core/images/gmap-icon.png',
            scaledSize: new google.maps.Size(47, 65)};
        var beachMarker = new google.maps.Marker({
            position: new google.maps.LatLng(51.507358, -0.127627),
            map: map,
            icon: gmarker
        });
    }
function init5() {
        // Basic options for a simple Google Map
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 16,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(51.507358, -0.127627), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
            }
        ]
    },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#737373"
            }
        ]
    },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#efefef"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#dadada"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#b3b3b3"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#ffffff"
            },
                        {
                            "weight": 1.8
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
            }
        ]
    },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#808080"
            },
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c5d8e7"
            }
        ]
    }
]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('shopsmap-5');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var gmarker = {
            url: 'static/core/images/gmap-icon.png',
            scaledSize: new google.maps.Size(47, 65)};
        var beachMarker = new google.maps.Marker({
            position: new google.maps.LatLng(51.507358, -0.127627),
            map: map,
            icon: gmarker
        });
    }
function mapinitialization(){
        init1();
        init2();
        init3();
        init4();
        init5();
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
function initiateGmap(coords, gmapid) {
    // When the window has finished loading create our google map below
    var i = 1;
    while(i<=gmapid){
        
    var mapthisidorg = generatemapid(i);
    var thiscoords = coords[i-1];
    google.maps.event.addDomListener(window, 'load', init(mapthisidorg,thiscoords));

    function init(mapthisid,coords) {alert(mapthisid); alert(coords);
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 12,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(coords[i-1]), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#a7a7a7"
            }
        ]
    },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#737373"
            }
        ]
    },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#efefef"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#dadada"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#696969"
            }
        ]
    },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
            }
        ]
    },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#b3b3b3"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
            }
        ]
    },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
            },
                        {
                            "color": "#ffffff"
            },
                        {
                            "weight": 1.8
            }
        ]
    },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d7d7d7"
            }
        ]
    },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#808080"
            },
                        {
                            "visibility": "off"
            }
        ]
    },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c5d8e7"
            }
        ]
    }
]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById(mapthisid);

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var gmarker = {
            url: 'static/core/images/gmap-icon.png',
            scaledSize: new google.maps.Size(36, 63)
        };
        var beachMarker = new google.maps.Marker({
            position: new google.maps.LatLng(coords),
            map: map,
            icon: gmarker
        });
    }
        i++;
    }
}
function ourshopscountry(id){
    var numofItems = $('.content-ourshops-show-item').length;
    var i = 1;
    while(i <= numofItems){
        if(i<id){
            $('#coc-' + i).removeClass('selected-country');
            $('#cossi-' + i).removeClass('content-ourshops-show-current');
            $('#cossi-' + i).removeClass('content-ourshops-show-right');
            $('#cossi-' + i).addClass('content-ourshops-show-left');
        }
        else if(i>id){
            $('#coc-' + i).removeClass('selected-country');
            $('#cossi-' + i).removeClass('content-ourshops-show-current');
            $('#cossi-' + i).removeClass('content-ourshops-show-left');
            $('#cossi-' + i).addClass('content-ourshops-show-right');
        }
        else{
            $('#coc-' + i).addClass('selected-country');
            $('#cossi-' + i).removeClass('content-ourshops-show-right');
            $('#cossi-' + i).removeClass('content-ourshops-show-left');
            $('#cossi-' + i).addClass('content-ourshops-show-current');
        }
        i++;
    }
    ourshopsresize();
}
function ourshopsresize(){
    var numofItems = $('.content-ourshops-show-item').length;
    var i = 1;
    var current = 0;
    while(i <= numofItems){
        if($('#cossi-' + i).hasClass('content-ourshops-show-current')){
            current = i;
        }
        i++;
    }
    if(current > 0){
        var innerh = $('#cossi-' + current).height();
        $("#content-ourshops-show-area").css({"height": innerh + "px", "max-height": innerh + "px"});
    }
}
function generatemapid(i){
    var mapthisid = 'shopsmap-' + i;
    return mapthisid;
}
