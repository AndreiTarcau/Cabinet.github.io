function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
}

let nav = document.getElementById('myTopnav');

    window.onscroll = function(){

    if (window.pageYOffset >100) {

        nav.style.background = " #333";
        nav.style.boxShadow = "0px 4px 2px  #333";
        nav.style.opacity = "1";
        nav.style.transition = "0.7s";
    }else{
        nav.style.background = " #333";
        nav.style.boxShadow = "none";
        nav.style.opacity = "1";
        nav.style.transition = "0.7s";
    }
    }
