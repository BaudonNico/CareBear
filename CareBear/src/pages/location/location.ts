/**
 * Created by Yaifounde on 02/03/2017.
 */

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import 'leaflet';



@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {

  constructor(public navCtrl: NavController) {
  
  }

  showMap() : void {
    let mymap = L.map('mapID').setView([45.643385, 5.869160], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets-basic/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: '',
      maxZoom: 18,
      accessToken: 'pk.eyJ1IjoiYnRvbmVnaGluIiwiYSI6ImNpeWE2NnVtYTAwYjcyd255N2s2N2wxYXEifQ.DNjUD35Ie0tFHsAJt_jalg'
    }).addTo(mymap);

    let marker = L.marker([45.643385, 5.869160]).addTo(mymap);
    marker.bindPopup("<b>Care Bear</b><br>I am here.").openPopup();

  }




}
