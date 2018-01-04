import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { TestPage } from '../test/test';
import { HelpTextPage } from '../help-text/help-text';

@IonicPage()
@Component({
  selector: 'page-help-list',
  templateUrl: 'help-list.html',
})
export class HelpListPage {
  options: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpListPage');
  }
  ngOnInit(){
    console.log("*****************************************");
    //console.log("options1: "+ this.options);
    if(this.navParams.get('data') != undefined){
      this.options = this.navParams.get('data');
    }
    else{
      console.log("es undefined");
    }
  }

  refresh(item, id){
    console.log("Se llamo a si misma");
    console.log(this.isList(item));
    console.log(item);
    if(this.isList(item)){
      this.navCtrl.push(HelpListPage, {data: item});
    }
    else {
      this.navCtrl.push(HelpTextPage, {data: item});
    }
  }

  isList(item){
    var i = item.length;
    while(i--){
      if(item[0]['title'] === undefined)
        return true;
      else
        return false;
    }
  }
}
