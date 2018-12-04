import { Component, OnInit } from '@angular/core';
//import * as TinCanJS from 'TinCanJS';
//import * as Cryptojs from 'Cryptojs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  id = 'MF-7IQOi_LA';
  playerHeight = '390';
  playerWidth = '640';
  private player;
  private ytEvent;



  constructor() { }

  ngOnInit() {
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }


  onYouTubePlayerReady(playerId) {
    this.player = document.getElementById("myplayer");
    this.player.addEventListener("onStateChange","onPlayerStateChange");
    //player loaded
    //do some stuff here if you want!
  }

  /*
   onPlayerStateChange(newState) {
    switch (newState) {
    	case (YT.PlayerState.PLAYING):
        this.videoStarted();
        break;
    	case (YT.PlayerState.PAUSED):
        if (this.player.lastPlayerState == YT.PlayerState.PLAYING) {
          this.player.videoWatched(this.player.lastPlayerTime, this.player.getCurrentTime());
        } else if (this.player.lastPlayerState == YT.PlayerState.PAUSED) {
          this.player.videoSkipped(this.player.lastPlayerTime, this.player.getCurrentTime());
        }
        this.player.videoPaused();
        break;
    	case (YT.PlayerState.ENDED):
        this.player.videoEnded();
        break;
    	case (YT.PlayerState.UNSTARTED):
        break;
    }
    this.player.lastPlayerTime = this.player.getCurrentTime();
    this.player.lastPlayerState = newState;
  }
  
   videoWatched(start, finish) {//start and finish in seconds
    window.tincan.sendStatement({
        actor: Cards.getActor(),
        verb: {
            id: "http://activitystrea.ms/schema/1.0/watch",
            display: {'en-US': 'watched'}
        },
        target: {
            id: 'http://www.youtube.com/watch?v=' + videoID,
            definition: {
                name: { "en-US": videoTitle + " from " + timeString(start) + " to " + timeString(finish) },
                extensions: {
                    "http://demo.watershedlrs.com/tincan/extensions/start_point": timeString(start),
                    "http://demo.watershedlrs.com/tincan/extensions/end_point": timeString(finish)
                }
            }
        }
    }); 
  }



videoStarted(){
  sendstatement ('played',false,false);
}

videoPaused(){
  sendstatement ('paused',false,false);
}
videoEnded(){
  sendstatement ('terminated',false,false);
}

videoWatched(start, finish) {//start and finish in seconds
  sendstatement ('watched',seconds2time(parseInt(start)),seconds2time(parseInt(finish)));
}
videoSkipped(start, finish) {//start and finish in seconds
  sendstatement (“skipped”,seconds2time(start),seconds2time(finish));
}
*/







}
