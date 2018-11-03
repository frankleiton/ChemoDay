import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SliderPage } from '../pages/slider/slider';
import { RegisterPage } from '../pages/register/register';
import { InicialPage } from '../pages/inicial/inicial';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Calendar } from '@ionic-native/calendar';
import { MedicamentosPage } from '../pages/medicamentos/medicamentos';
import { ConsultasPage } from '../pages/consultas/consultas';
import { ConsultaformPage } from '../pages/consultaform/consultaform';
import { AdicionartratamentoPage } from '../pages/adicionartratamento/adicionartratamento';
import { TratamentosPage } from '../pages/tratamentos/tratamentos';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SliderPage,
    RegisterPage,
    InicialPage,
    ListPage,
    MedicamentosPage,
    ConsultasPage,
    ConsultaformPage,
    AdicionartratamentoPage,
    TratamentosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SliderPage,
    RegisterPage,
    InicialPage,
    ListPage,
    MedicamentosPage,
    ConsultasPage,
    ConsultaformPage,
    AdicionartratamentoPage,
    TratamentosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Calendar
  ]
})
export class AppModule {}
