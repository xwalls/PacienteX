import { TestPage } from './../test/test';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  testRadioOpen: boolean;
  testRadioResult;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: '¿Porque deseas cancelar la consulta?',
      buttons: [
        {
          text: 'Regresar',
          handler: () => {
            console.log('Regresando..');
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ],
    });

    alert.addInput({
      type: 'radio',
      label: 'me vale vrg',
      value: 'blue',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'no parece doctor',
      value: 'green'
    });

    alert.addInput({
      type: 'radio',
      label: 'no esta buenote',
      value: 'red'
    });

    alert.addInput({
      type: 'radio',
      label: 'me equivoque',
      value: 'yellow'
    });

    alert.addInput({
      type: 'radio',
      label: 'no se',
      value: 'purple'
    });
    alert.present(alert);
  }

  regresar(){
    this.navCtrl.pop();
  }

}
