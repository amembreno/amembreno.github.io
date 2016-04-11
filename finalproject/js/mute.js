var tag = document.createElement('script');

tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var player2;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        events: {
            'onReady': onPlayerReady
        }
    });
    
    player2 = new YT.Player('ytplayer2', {
        events: {
            'onReady': onPlayerReady
        }
    });
    
     player3 = new YT.Player('ytplayer3', {
        events: {
            'onReady': onPlayerReady
        }
    });
    
      player4 = new YT.Player('ytplayer4', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady() {
    // Mute!
    player.mute();
    player2.mute();
    player3.mute();
    player4.mute()
}
