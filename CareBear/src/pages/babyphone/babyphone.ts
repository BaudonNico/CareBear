/**
 * Created by Yaifounde on 02/03/2017.
 */

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-babyphone',
  templateUrl: 'babyphone.html'
})
export class BabyphonePage {
  url:string;
  stream:any;
  promise:any;
  play:boolean;
  pause:boolean;
  volumeTemp:any;
  counter : number;
  constructor(public navCtrl: NavController) {
    this.play = true
    this.url = "http://192.168.43.55:8080/bear.mp3";
    this.stream = new Audio(this.url);
    this.counter = 0;
  }
  playStream() {
    if(this.counter == 0){
      this.stream.play();
      this.volumeTemp = this.stream.volume;
    }
    this.counter++;
    this.stream.volume = this.volumeTemp;
    this.play = false;
    this.pause = true;
  };

  pauseStream() {
    this.stream.volume = 0;
    this.play = true;
    this.pause = false;
  };
}
