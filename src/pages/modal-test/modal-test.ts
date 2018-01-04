import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';


@IonicPage()
@Component({
  selector: 'page-modal-test',
  templateUrl: 'modal-test.html',
})
export class ModalTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalTestPage');
  }

  openModal(){
    console.log("te dije que no lo piques!");
    let myModal = this.modalCtrl.create(ModalPage);
    myModal.present();
  }
}
