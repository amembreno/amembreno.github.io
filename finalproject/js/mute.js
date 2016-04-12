var tag = document.createElement('script');

tag.src = "http://www.youtube.com/iframe_api";
var firstScriptTag = 
document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, 
firstScriptTag);

var player;
var player2;
var player3;
var player4;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('ytplayer', {
        height:'172',
        width: '260',
        videoID: 'BkoWTNb0Ll8',
        events: {
            'onReady': onPlayerReady
        }
    });
    
    player2 = new YT.Player('ytplayer2', {
         height:'172',
        width: '260',
        videoID: 'kaAQvnkmd7Y',
        events: {
            'onReady': onPlayerReady
        }
    });
    
     player3 = new YT.Player('ytplayer3', {
          height:'172',
        width: '260',
         videoID: 'kaAQvnkmd7Y',
        events: {
            'onReady': onPlayerReady
        }
    });
    
      player4 = new YT.Player('ytplayer4', {
           height:'172',
        width: '260',
        videoID: '4qzYJeVldS4',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady() {
    // Mute!
    player.muted();
    player2.muted();
    player3.muted();
    player4.muted();
}
