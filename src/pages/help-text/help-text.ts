import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HelpListPage } from '../help-list/help-list';


@IonicPage()
@Component({
  selector: 'page-help-text',
  templateUrl: 'help-text.html',
})
export class HelpTextPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpTextPage');
  }
  ngOnInit(){
    console.log("////////////////////////////////////////");
    this.items = this.navParams.get('data');
    console.log(this.items);
  }

  load(){
    console.log("entro");
  }

}
