import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicialPage } from '../inicial/inicial';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  User = {
    name: "",
    date: "",
    gender: "",
    height: "",
    weigth: "",
    chemo: ""
  };


  name: any;
  date: string;
  gender: string;
  height: string;
  weigth: string;
  chemo: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  openPageInicial() {

    this.User.name = this.name;
    this.User.date = this.date;
    this.User.gender = this.gender;
    this.User.height = this.height;
    this.User.weigth = this.weigth;
    this.User.chemo = this.chemo;

    this.storage.set('User', this.User).then((data)=>{
      console.log(data);
      this.storage.get('User').then((val) => {
        console.log(val);
        this.navCtrl.setRoot(InicialPage);
      });
    }); 

  }

}
