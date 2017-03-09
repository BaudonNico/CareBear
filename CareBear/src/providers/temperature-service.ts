/**
 * Created by Yaifounde on 07/03/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'


/*
 Generated class for the temperature provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class TempService {

  constructor(public http: Http ) {
  }

  getTemperature(): Observable<string> {

    return this.http.get('http://192.168.43.136/temp/temp.html')
      .map((response: Response) => response.text());

  }

}
