// ==UserScript==
// @name         Auto-Reddit
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

//click view images button
document.getElementById("viewImagesButton").click();


window.onload=function(){window.addEventListener("keypress", myEventHandler, false);};
$(window).keypress(function (e) {
    //use e.which
    var keyCode = e.which;
    console.log(e, keyCode, e.which);
    if (keyCode == 92) {
        bool = !bool;
    }
});

//remove sidebar
//    document.getElementsByClassName("side")[0].parentNode.removeChild(document.getElementsByClassName("side")[0]);

//scroll toggle variable
var bool = true;

//wait for page load
window.onload=function (){

    //remove all but elements that contain a child with the a.toggleimage button
    delNotText=document.getElementsByClassName("link");
    for (var i = delNotText.length -1; i >= 0; i--) {
        if ($(delNotText[i]).find('a.toggleImage').length === 0) {
            delNotText[i].parentNode.removeChild(delNotText[i]);
        }
    }

    //if no entries randomize reddit.
    if (delNotText === 0){document.getElementsByClassName("subbarlink")[3].click();}

    //scroll page
    function pageScroll() {
        if (bool===true){
            window.scrollBy(0,3); //scroll speed
        }
        scrolldelay = setTimeout(pageScroll,10);
    }

    setTimeout(function (){pageScroll() ; } , 1000 );

    //random page when you are at bottom of page
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            //            setTimeout(function(){
            document.getElementsByClassName("subbarlink")[3].click();
            //            },2000);

        }
    };

};


