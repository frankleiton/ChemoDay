import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AdicionartratamentoPage } from '../adicionartratamento/adicionartratamento';

/**
 * Generated class for the TratamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tratamentos',
  templateUrl: 'tratamentos.html',
})
export class TratamentosPage {

  tratamentos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TratamentosPage');
  }

  addtratamento(){
    this.navCtrl.push(AdicionartratamentoPage);
  }

  ionViewWillEnter(){
    this.storage.get('tratamentos').then((data)=> {
      if(data != null)
      {
        this.tratamentos = data;
      }else{ console.log("tratamentos vazios") }
    });
  }

}
