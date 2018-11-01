import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MedicamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicamentos',
  templateUrl: 'medicamentos.html',
})
export class MedicamentosPage {


  medicamentos:Array<{nome:string, tipo:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.medicamentos = [
      {nome: "Abiraterona 250MG COMP. (VO)**", tipo: "COM"},
      {nome: "ANAGRELIDA 0,5 MG COMP (VO)", tipo: "COM"},
      {nome: "ANAStrozol 1MG COMP. (VO)", tipo: "COM"},
      {nome: "BICAlutamida 50MG COMP. (VO)", tipo: "COM"},
      {nome: "BUSSUlfano 2MG COMP. (VO)**", tipo: "COM"},
      {nome: "Capecitabina 150MG COMP. (VO)**", tipo: "COM"},
      {nome: "Capecitabina 500MG COMP. (VO)", tipo: "COM"}
    ];
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicamentosPage');
  }

}


