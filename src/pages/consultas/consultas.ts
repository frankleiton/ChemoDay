import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConsultaformPage } from '../consultaform/consultaform';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the ConsultasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultas',
  templateUrl: 'consultas.html',
})
export class ConsultasPage {

  Consultas = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultasPage');
  }

  ionViewWillEnter(){
    this.storage.get('consultasM').then((val) => {
      if(val != null)
      {
        this.Consultas = val;
        console.log(this.Consultas);
      }
    });
  }

  eventConsulta()
  {
    this.navCtrl.push(ConsultaformPage);
  }

}
