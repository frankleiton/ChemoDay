import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SliderPage } from '../pages/slider/slider';
import { InicialPage } from '../pages/inicial/inicial';
import { MedicamentosPage } from '../pages/medicamentos/medicamentos';
import { ConsultasPage } from '../pages/consultas/consultas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SliderPage;

  pages: Array<{title: string, component: any}>;

  constructor(private storage: Storage, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
    storage.get('User').then((val) => {
      console.log(val);
      if (val.name != "") {
        this.nav.setRoot(InicialPage);
      }
      this.initializeApp();
    });

    

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: InicialPage },
      //{ title: 'List', component: ListPage },
      //{ title: 'Slider', component: SliderPage },
      { title: 'Medicines', component: MedicamentosPage },
      { title: 'Medical consultation', component: ConsultasPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
