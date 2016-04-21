var tag = document.createElement('script');

tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var player2;
var player3;
var player4;

function onYouTubeIframeAPIReady() {
    "use strict";
    player = new YT.Player('ytplayer', {
        height: '172',
        width: '260',
        videoId: 'BkoWTNb0Ll8',
        enablejsapi: 1,
        events: {
            'onReady': onPlayerReady
        }
    });

    player2 = new YT.Player('ytplayer2', {
        height: '172',
        width: '260',
        videoId: 'kaAQvnkmd7Y',
        enablejsapi: 1,
        events: {
            'onReady': onPlayerReady
        }
    });

    player3 = new YT.Player('ytplayer3', {
        height: '172',
        width: '260',
        videoId: 'kaAQvnkmd7Y',
        enablejsapi: 1,
        events: {
            'onReady': onPlayerReady
        }
    });

    player4 = new YT.Player('ytplayer4', {
        height: '172',
        width: '260',
        videoId: '4qzYJeVldS4',
        enablejsapi: 1,
        events: {
            'onReady': onPlayerReady
        }
    });
}


function onPlayerReady(event) {
    // Mute!
    "use strict";
    player.mute();
    player2.mute();
    player3.mute();
    player4.mute();
}
