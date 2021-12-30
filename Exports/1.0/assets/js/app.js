(function () {
    $("#main-banner").css("background-image", "url('../assets/img/Main-Banner/" + Math.floor(Math.random() * 17 + 1) + ".jpg')")
    $("#background-photo").css("background-image", "url('../assets/img/Main-Banner/" + Math.floor(Math.random() * 17 + 1) + ".jpg')")
    $("#videobackground-source").attr("src", "../assets/videos/" + Math.floor(Math.random() * 6 + 1) + ".mp4")

    
    "use strict";
    
    var cookieAlert = document.querySelector(".cookiealert");
    var acceptCookies = document.querySelector(".acceptcookies");
    
    if (!cookieAlert) {
        return;
    }
    cookieAlert.offsetHeight;

    if (!getCookie("acceptCookies")) {
        cookieAlert.classList.add("show");
    }
    
    acceptCookies.addEventListener("click", function () {
        setCookie("acceptCookies", true, 60);
        cookieAlert.classList.remove("show");
    });
})();

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function generateRandomVideo() {
    $("#videobackground-source").attr("src", "../assets/videos/" + Math.floor(Math.random() * 6 + 1) + ".mp4")
}

function changeTitleLoop() {
    setTimeout(function(){
        let titleRandomArray = ["MEOW", "Nyah", "MEOOOOOOWWWWWWWWWWW", "Cats are amazing", "C.U.T.E.", "*Deep voice* MEOW", "Cats!", "Miau", "I hate dogs", "Caaaaaats", "Green eyes", "C.A.T.S.", "Click me 100 times!"]
        document.title = titleRandomArray[Math.floor(Math.random() * titleRandomArray.length)];
        changeTitleLoop()
    },10000);    
}

window.onload = function () {
    loadMeowAudios()
    changeTitleLoop()
}

function loadMeowAudios() {
    for (let i = 1; i <= 10; i++) {
        meowAudios[i] = new Audio('../assets/audios/' + i + '.ogg')
    }       
}
    
let meowAudios = []
let timesMeowed = 0

function playCatSound() {
    timesMeowed ++
    document.getElementById('times-meowed').innerHTML = 'Meow ' + timesMeowed
    let randomNumberForAudio = Math.floor(Math.random() * 10 + 1)
    meowAudios[randomNumberForAudio].play()
    if (timesMeowed == 100) {
        document.getElementById('times-meowed').innerHTML = 'Why do you like wasting your time?'
    }
}