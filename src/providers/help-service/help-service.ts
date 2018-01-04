import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class HelpServiceProvider {
  data: any;

  constructor(public http: Http) {
    console.log('Hello HelpServiceProvider Provider');
  }

  helpPatientOptions(){
    return this.http.get('http://demo2323113.mockable.io/helpjson')
      .map(res => {
        res = JSON.parse(res['_body']);
        return res;
      });
  }
  lastConsultationDetails(){
    return this.http.get('http://demo2323113.mockable.io/lastConsultationDetails')
      .map(res => {
        res = JSON.parse(res['_body']);
        return res;
      });
  }
}
