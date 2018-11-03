import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';


/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {

  slides = [
    {
      title: "Welcome to the ChemoDay",
      description: "<b>ChemoDay</b> is an environment made to help the chemotherapeutic patient in their day",
      image: "assets/imgs/report.png",
    },
    {
      title: "Daily monitoring",
      description: "Here the patient can register their well-being daily, save their dates of medical consultations, as well as create medication alerts.",
      image: "assets/imgs/calendar.png",
    },
    {
      title: "Medication list",
      description: "<b>ChemoDay</b> also supports medicines with tips and suggestion for usage.",
      image: "assets/imgs/drugs.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

  openRegisterPage()
  {
    this.navCtrl.push(RegisterPage);
  }

}
