import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the ConsultaformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultaform',
  templateUrl: 'consultaform.html',
})
export class ConsultaformPage {

  Consultas = [];

  Consulta = {
    descricao: "",
    dataconsulta: "",
    local: ""
  }

  description:any;
  date:any;
  local:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultaformPage');
  }

  ionViewWillEnter(){
    this.storage.get('consultasM').then((val) => {
      if(val != null)
      {
        this.Consultas = val;
      }
      console.log(this.Consultas);
    });
  }

  submitInfos()
  {
    this.Consulta.descricao = this.description;
    this.Consulta.dataconsulta = this.date;
    this.Consulta.local = this.local;
    
    console.log(this.Consulta);
    this.setInfos(this.Consulta);
  }

  setInfos(consulta)
  {
    this.Consultas.push(consulta);
    this.storage.set('consultasM', this.Consultas).then((data)=> {
      console.log(data);
    });
  }

}
