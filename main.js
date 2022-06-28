window.setInterval(function() {
    if(window.scrollY > 10 || document.getElementById("menu-small") != null){
        if (document.getElementById("navigation").className.includes("colored") == false) {
            document.getElementById("navigation").classList.add("colored");
        }
    }
    else {
        if (document.getElementById("navigation").className.includes("colored") == true) {
            document.getElementById("navigation").classList.remove("colored");
        }
    }
},100);

document.getElementById("hamburger").addEventListener("click", function(){
    if (document.getElementById("menu-small") == null){
        var nav = document.getElementById("navigation");
        var hamburger = document.getElementById("hamburger");
        nav.classList.add("colored");
        hamburger.className = "fa fa-close menu-item";
        el = document.createElement("div");
        el.id="menu-small";
        el.innerHTML = hamburger.parentNode.innerHTML;
        el.lastChild.remove();
        el.lastChild.remove();
        document.getElementById("navigation").parentNode.appendChild(el);
    }
    else{
        var hamburger = document.getElementById("hamburger");
        document.getElementById("menu-small").remove();
        hamburger.className = "fa fa-bars menu-item";
    }
});
window.onscroll = function myFunction() {  
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("scroll-offset");
    var scrollOffset = document.getElementById("scroll-offset");
    scrollOffset.style.backgroundImage = "url(./structure3.jpg)";
    scrollOffset.style.backgroundSize = "cover";
    scrollOffset.style.backgroundRepeat = "no-repeat";
    scrollOffset.style.backgroundPosition = "-100%";
    var xvalue = "center";
    var factor = 0.8;
    var yvalue = scrolltotop * factor - 950;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
}

if (window.location.search == "?sent=success" && window.location.pathname.includes("contact")){
    successMessage = document.createElement("div");
    document.getElementsByTagName("header")[0].prepend(successMessage);
    successMessage.id = "success-message";
    successMessage.style.backgroundColor = "#D0D0D0";
    successMessage.style.textAlign = "center";
    successMessage.style.fontSize = "1.8rem";
    successMessage.style.color = "#030E4F";
    successMessage.style.height = "44px";
    successMessage.style.width = "0px";
    successMessage.style.position = "relative";
    successMessage.style.zIndex = "99";
    successMessage.style.transition = "4s ease-in-out";
    setTimeout(function(){successMessage.style.width = "100%";},1000);
    setTimeout(function(){document.getElementById("success-message").remove(); document.getElementById("success-message2").remove();},5000);

    var successMessage2 = document.createElement("div");
    successMessage2.id = "success-message2";
    successMessage2.style.textAlign = "center";
    successMessage2.style.padding = "10px 0px";
    successMessage2.style.fontSize = "1.8rem";
    successMessage2.style.color = "#030E4F";
    successMessage2.style.backgroundColor = "rgba(0,0,0,0)";
    successMessage2.innerText = "Success! Message Sent";
    document.getElementsByTagName("header")[0].prepend(successMessage2);
    successMessage2.style.width = "100%";
    successMessage2.style.position = "absolute";
    successMessage2.style.zIndex = "100";
    successMessage2.style.opacity = "1";
}