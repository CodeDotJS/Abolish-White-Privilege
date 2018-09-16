function removeIds() {
    var id = ['question', 'no', 'yes']; // or just get the goddamn "box"
    for (var i = 0; i < id.length; i++) {
        var spacex = id[i];
        var element = document.getElementById(spacex);
        element.parentNode.removeChild(element);
    }
}

function letsGrab(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}

function abolishMeDaddy() {
    var grab = document.documentElement;
    document.body.style.background = 'black';
    document.getElementById('message').innerHTML = '<div style="font-size: 30px; color: lightgreen; margin-top: 20%; opacity: 0.2;"> OMG! <br> YOU JUST DID</div>';
    removeIds();
    letsGrab(grab);
}

function thatsRacist() {
    document.getElementById('message').innerHTML = '<div onclick="location.reload(true/false)" style="font-size: 30px; color: grey; margin-top: 5%; opacity: 1;"> DON\'T BE A DICK!</div>'
}
