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

  constructor(public navCtrl: NavController) {
    //this.url = "10.7.40.189:8080/radio.mp3";
    this.url = "http://192.168.43.55:8080/bear.mp3";
    this.stream = new Audio(this.url);

    //this.playStream();
  }

  playStream() {
    this.stream.play();
    this.promise = new Promise((resolve,reject) => {
      this.stream.addEventListener('playing', () => {
        resolve(true);
      });

      this.stream.addEventListener('error', () => {
        reject(false);
      });
    });

    return this.promise;
  };

  pauseStream() {
    this.stream.pause();
    this.stream.currentTime = 0;
  };

}
