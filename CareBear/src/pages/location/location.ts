/**
 * Created by Yaifounde on 02/03/2017.
 */

import { Component } from '@angular/core';
import { Geolocation } from 'ionic-native';

import { NavController } from 'ionic-angular';

import 'leaflet';



@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {

  long;
  lat;

  constructor(public navCtrl: NavController) {
    this.geolocate();
  }


  public geolocate():void {

    Geolocation.getCurrentPosition({timeout: 5000, enableHighAccuracy: true}).then((position) => {
      this.long = position.coords.longitude;
      this.lat  = position.coords.latitude;


    });
  }

  showMap() : void {


    let mymap = L.map('mapID').setView([this.lat, this.long], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets-basic/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: '',
      maxZoom: 18,
      accessToken: 'pk.eyJ1IjoiYnRvbmVnaGluIiwiYSI6ImNpeWE2NnVtYTAwYjcyd255N2s2N2wxYXEifQ.DNjUD35Ie0tFHsAJt_jalg'
    }).addTo(mymap);

    let marker = L.marker([45.643385, 5.869160]).addTo(mymap);
    marker.bindPopup("<b>Care Bear</b><br>I am here.").openPopup();

    let me = L.marker([this.lat, this.long]).addTo(mymap);
    me.bindPopup("<b>Me</b><br>You are here.").openPopup();


  }


}
