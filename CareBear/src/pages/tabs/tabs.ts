import { Component } from '@angular/core'

import { BabyphonePage }    from '../babyphone/babyphone';
import { LocationPage }     from '../location/location';
import { TemperaturePage }  from '../temperature/temperature';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TemperaturePage;
  tab2Root: any = LocationPage;
  tab3Root: any = BabyphonePage;

  constructor() {

  }
}
