import { NgModule, ErrorHandler }                   from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp }                                    from './app.component';

//Pages import
import { TemperaturePage }                          from '../pages/temperature/temperature';
import { LocationPage }                             from '../pages/location/location';
import { BabyphonePage }                            from '../pages/babyphone/babyphone';
import { TabsPage }                                 from '../pages/tabs/tabs';

//Services import
import { TempService}                               from '../providers/temperature-service';

@NgModule({
  declarations: [
    MyApp,
    TemperaturePage,
    LocationPage,
    BabyphonePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TemperaturePage,
    LocationPage,
    BabyphonePage,
    TabsPage
  ],
  providers: [
    TempService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
