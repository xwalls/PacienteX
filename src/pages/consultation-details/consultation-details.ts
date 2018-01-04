import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelpListPage } from '../help-list/help-list';

@IonicPage()
@Component({
  selector: 'page-consultation-details',
  templateUrl: 'consultation-details.html',
})
export class ConsultationDetailsPage {
  options: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultationDetailsPage');
  }
  ngOnInit(){
    console.log("*****************************************");
    if(this.navParams.get('data') != undefined){
      this.options = this.navParams.get('data');
    }
    else{
      console.log("es undefined");
    }
    console.log("details:");
    console.log(this.options);
    console.log(this.options["help"]);
  }
  selection(item){
    //console.log(this.HelpInfo);
    this.navCtrl.push(HelpListPage, { data: item });
  }
}
