import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { InicialPage } from '../inicial/inicial';

/**
 * Generated class for the AdicionartratamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionartratamento',
  templateUrl: 'adicionartratamento.html',
})
export class AdicionartratamentoPage {

  descricao:any;
  data:any;
  frequencia:any;
  doses:any;

  private time = [1,2,3,4,5,6,7,8,9,10,11,12];

  tratamentos = [];

  tratamento = {
    descricao: "",
    data: "",
    frequencia: "",
    doses: ""
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionartratamentoPage');
  }

  ionViewWillEnter(){
    this.storage.get('tratamentos').then((data)=> {
      if(data != null)
      {
        this.tratamentos = data;
      }else{ console.log("tratamentos vazios") }
    });
  }

  submitInfos()
  {
    this.tratamento.data = this.data;
    this.tratamento.descricao = this.descricao;
    this.tratamento.doses = this.doses;
    this.tratamento.frequencia = this.frequencia;

    this.addtreatment(this.tratamento);
  }

  addtreatment(tratamento:any)
  {
    this.tratamentos.push(tratamento);

    this.storage.set('tratamentos', this.tratamentos).then((data)=> {
      console.log(data);
      this.navCtrl.setRoot(InicialPage);
    })
  }

}
