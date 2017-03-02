/**
 * Created by Yaifounde on 02/03/2017.
 */

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-temperature',
  templateUrl: 'temperature.html'
})
export class TemperaturePage {
  temperature;

  constructor(public navCtrl: NavController) {
    this.initTemperature();
  }

  initTemperature(){
    this.temperature = 37.5;
  }

}
