/**
 * Created by Yaifounde on 02/03/2017.
 */

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http }  from '@angular/http';

import { TempService } from '../../providers/temperature-service'


@Component({
  selector: 'page-temperature',
  templateUrl: 'temperature.html'
})


export class TemperaturePage {
  temperature;
  color;
  constructor(public navCtrl: NavController, private http : Http, private tempserv : TempService) {
    this.initTemperature();
    this.thermometerColor();
     setInterval(() => {
        this.initTemperature();
    }, 2000);
  }

  initTemperature(){
    this.tempserv.getTemperature()
      .subscribe( temp => {
      this.temperature = temp;
    });
    this.thermometerColor();
  }


  thermometerColor(){
    if (this.temperature < 18){
      this.color = "thermometer-blue";
    }
    if (this.temperature > 18 && this.temperature < 24) {
      this.color="thermometer-green";
    }
    if (this.temperature > 24){
      this.color="thermometer-red";

    }
  }

}
